export class Company {
  _symbol: string;
  _name: string;

  constructor(symbol: string, name: string, companyStorage: CompanyStorage) {
    if (!/^[a-zA-Z0-9]{2,5}$/.test(symbol)) {
      throw new Error(
        "The company symbol must be between 2 and 5 alphanumeric characters."
      );
    }
    if (companyStorage.doesCompanyExistWithSymbol(symbol)) {
      throw new Error("A company with this symbol already exists.");
    }
    this._symbol = symbol;
    this._name = name;
    companyStorage.addCompany(this);
  }
}

export class CompanyStorage {
  private companies: Company[] = [];
  addCompany(company: Company) {
    this.companies.push(company);
  }
  doesCompanyExistWithSymbol(symbol: string): boolean {
    return this.companies.some((company) => company._symbol === symbol);
  }
}
