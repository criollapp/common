import { CAModelResponse } from "../../class/ca-model.response";
import { TestXModel } from "../utils/test-ca-model.util";
import { CAModelAbstract } from "../../abstracts/ca-model.abstract";

describe('CAModelResponse',()=>{
  let object:CAModelResponse = new CAModelResponse();
  object.data = new TestXModel();

  it('data has attr model',()=>{
    expect(object.data instanceof CAModelAbstract).toBeTruthy();
  });
});
