class Investor {
  investedAmount: any;
  makeInvestment(offer, amount) {
    if (this.investedAmount + amount > offer.investmentMax) {
      throw new Error("The investment exceeds the maximum allowed amount.");
    }
  }
}
