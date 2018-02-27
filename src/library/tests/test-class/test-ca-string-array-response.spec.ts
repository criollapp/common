import { CAModelAbstract } from "../../abstracts/ca-model.abstract";
import { CAStringResponse } from "../../class/ca-string.response";
import { CAStringArrayResponse } from "../../class/ca-string-array.response";

describe('CAStringArrayResponse',()=>{
  let object:CAStringArrayResponse = new CAStringArrayResponse();
  object.data = [''];

  it('data has attr string',()=>{
    expect(typeof object.data[0] == 'string').toBeTruthy();
  });
});
