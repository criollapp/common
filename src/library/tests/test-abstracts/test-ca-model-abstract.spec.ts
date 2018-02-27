import {CAModelAbstract} from '../../abstracts/ca-model.abstract';
import {TestModel} from '@criollapp/tests';
import { TestXEmptyPropertyModel } from "../utils/test-ca-empty-properties-model.util";
import { TestXModel } from "../utils/test-ca-model.util";

describe('CAModelAbstract', () => {
  const model:TestXModel = new TestXModel();

  it('id must be negative when object not have it', () => {
    expect(model.id).toBeLessThan(0);
  });


  it('id should be set', () => {
    model.id = 11111111111111;

    expect(model.id).toBe(11111111111111);
  });

  it('property set value when generic object is set by constructor', () => {
    let object:TestXEmptyPropertyModel = new TestXEmptyPropertyModel({name: 'myCrazyValue'});

    expect(object.name).toBe('myCrazyValue');
  });

  it('isOnDb is true when id is positive', () => {
    model.id = 11111111111111;

    expect(model.isOnDb()).toBeTruthy();
  });

  it('isOnDb is false when id is negative', () => {
    model.id = -11111111111111;

    expect(model.isOnDb()).toBeFalsy();
  });

  it('getJsonObject get object with properties with CAJson decorator', () => {
    expect( model.getJsonObject().hasOwnProperty('example1') ).toBeTruthy();
  });

  it('getJsonObject get object without properties without CAJson decorator', () => {
    expect( model.getJsonObject().hasOwnProperty('example2') ).toBeFalsy();
  });

  it('properties on constructor are set into model', () => {
    let model2:TestXModel = new TestXModel({example1:'hello3'});

    expect( model2.example1 == 'hello3' ).toBeTruthy();
  });

});
