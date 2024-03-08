import { Company } from "../class";

export class CompanyStorage {
  private companies: Company[] = [];
  addCompany(company: Company) {
    this.companies.push(company);
  }
  doesCompanyExistWithSymbol(symbol: string): boolean {
    return this.companies.some((company) => company._symbol === symbol);
  }
}
