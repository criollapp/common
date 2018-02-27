import {CANumberUtil} from '../../utils/ca-number.util';
describe('CANumberUtil', () => {

  it('distributeAmountBetween has correct repartition', () => {
    expect(CANumberUtil.distributeAmountBetween(10000, 3)).toEqual([3333.3333, 3333.3333, 3333.3334]);
  });

  it('distributeAmountBetween has correct precision', () => {
    expect(CANumberUtil.distributeAmountBetween(10000, 3, 6)).toEqual([3333.333333, 3333.333333, 3333.333334]);
  });

  it('getWithPrecision has correct precision', () => {
    expect(CANumberUtil.getWithPrecision(3333.3333333333333, 2)).toEqual(3333.33);
  });

});
