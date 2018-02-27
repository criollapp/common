import { CAModelArrayResponse } from "../../class/ca-model-array.response";
import { TestXModel } from "../utils/test-ca-model.util";
import { CAModelAbstract } from "../../abstracts/ca-model.abstract";

describe('CAModelArrayResponse',()=>{
  let object:CAModelArrayResponse = new CAModelArrayResponse();
  object.data = [new TestXModel()];

  it('data has attr array model',()=>{
    expect(object.data[0] instanceof CAModelAbstract).toBeTruthy();
  });
});
