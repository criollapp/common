import {CAGeneratorUtil} from '../../utils/ca-generator.util';

describe('CAGeneratorUtil', () => {

  it('getRandomNumber when have two range, numbers must be between range', () => {
    const numberGot = CAGeneratorUtil.getRandomNumber(1, -1);

    expect(numberGot).toBeGreaterThanOrEqual(-1);
    expect(numberGot).toBeLessThanOrEqual(1);
  });

  it('getFakeId number must be negative', () => {
    expect(CAGeneratorUtil.getFakeId()).toBeLessThan(0);
  });

  it('getFakeId number never must be duplicated', () => {
    CAGeneratorUtil.generatedIds = [];
    CAGeneratorUtil.maxIdNumber = -2;
    CAGeneratorUtil.generatedIds.push(-1);

    expect(CAGeneratorUtil.getFakeId()).toBe(-2);
  });

});
