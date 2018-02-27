export class CANumberUtil {
  static distributeAmountBetween(amount: number, qty: number = 2, precision: number = 4): number[] {
    const distribution: number[] = [];
    let distributed = 0;
    const amountToDistribute: number = CANumberUtil.getWithPrecision(amount / qty, precision);
    let i = 0;

    while (i < qty) {
      let amountForPart: number = amountToDistribute;
      distributed = CANumberUtil.getWithPrecision(distributed + amountForPart, precision);
      i++;
      if (i === qty) {
        amountForPart = CANumberUtil.getWithPrecision(amountForPart + amount - distributed, precision);
      }
      distribution.push(amountForPart);
    }
    return distribution;
  }

  static getWithPrecision(number: number, precision = 4): number {
    return parseFloat(number.toFixed(precision));
  }
}
