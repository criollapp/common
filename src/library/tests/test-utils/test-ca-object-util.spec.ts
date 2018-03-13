import {CAObjectUtil} from '../../utils/ca-object.util';
import { TestModel } from "../utils/ca-test-model";

describe('CAObjectUtil', () => {
  let model: TestModel = new TestModel();

  it('objectHasProperties is true when all properties name are on object', () => {
    expect( CAObjectUtil.objectHasProperties(model.getJsonObject(), ['example1','example2','exampleProperty3']) ).toBeTruthy();
  });

  it('objectHasProperties is false when one property is n o in object', () => {
    expect( CAObjectUtil.objectHasProperties(model.getJsonObject(), ['example1','example2','exampleProperty4']) ).toBeFalsy();
  });

  it('objectHasProperties is false when properties are empty', () => {
    expect( CAObjectUtil.objectHasProperties(model.getJsonObject(), []) ).toBeFalsy();
  });

  it('objectHasProperties is false when object is null', () => {
    expect( CAObjectUtil.objectHasProperties(null, []) ).toBeFalsy();
  });

  it('objectHasProperties is false when properties is null', () => {
    expect( CAObjectUtil.objectHasProperties(model.getJsonObject(), null) ).toBeFalsy();
  });

  it('objectsAreEqual is false  when objects are different', () => {
    expect( CAObjectUtil.areEqual( {es:"Hola Mundo"}, {en:"Hello  world"} ) ).toBeFalsy();
  });

  it('objectsAreEqual is true when objects are equal', () => {
    expect( CAObjectUtil.areEqual( {es:"Hola Mundo"}, {es:"Hola Mundo"} ) ).toBeTruthy();
  });

});
