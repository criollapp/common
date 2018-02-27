import { CArrayUtil } from "../../utils/ca-array.util";
import {TestModel} from '@criollapp/tests';

describe('CArrayUtil', () => {

  it('areEqual is false  when arrays are different', () => {
    expect( CArrayUtil.areEqual( ['es','en'], ['es','en','fr'] ) ).toBeFalsy();
  });

  it('areEqual is true  when arrays are equal', () => {
    expect( CArrayUtil.areEqual( ['es','en'], ['es','en'] ) ).toBeTruthy();
  });

  it('isEmpty is true when array is empty', () => {
    expect( CArrayUtil.isEmpty([]) ).toBeTruthy();
  });

  it('isEmpty is false when array is null', () => {
    expect( CArrayUtil.isEmpty(null) ).toBeFalsy();
  });

  it('isEmpty is false when array is undefined', () => {
    expect( CArrayUtil.isEmpty(undefined) ).toBeFalsy();
  });

  it('isEmpty is false when array has value', () => {
    expect( CArrayUtil.isEmpty([1]) ).toBeFalsy();
  });

  it('clone return a copy of array', () => {
    expect( CArrayUtil.areEqual( CArrayUtil.clone([1,2,3,4]), [1,2,3,4] ) ).toBeTruthy();
  });

  it('clone return a copy of array when is objects', () => {
    expect( CArrayUtil.areEqual( CArrayUtil.clone([{hello: 'world'}]), [{hello: 'world'}] ) ).toBeTruthy();
  });

  it('clone return a copy of array when is objects from types', () => {
    let objects:TestModel[] = [ new TestModel(), new TestModel() ];
    expect( CArrayUtil.areEqual( CArrayUtil.clone(objects), objects ) ).toBeTruthy();
  });

});
