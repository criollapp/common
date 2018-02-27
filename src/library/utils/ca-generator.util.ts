export class CAGeneratorUtil {
  public static readonly initialMaxIsNumber:number = -99999999999;

  static generatedIds:number[] = [];
  static maxIdNumber = CAGeneratorUtil.initialMaxIsNumber;

  static getRandomNumber(max: number = 999999999999999999999999999999999999999, min: number = 0): number {
    return Math.floor(Math.random() * ( max - min + 1 ) + min);
  }

  static getFakeId(): number {
    let id:number = 0;
    do {
      id = CAGeneratorUtil.getRandomNumber(-1, CAGeneratorUtil.maxIdNumber);
    } while (CAGeneratorUtil.generatedIds.indexOf(id) > -1);
    CAGeneratorUtil.generatedIds.push(id);
    return id;
  }
}
