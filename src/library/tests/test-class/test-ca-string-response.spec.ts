import { CAModelAbstract } from "../../abstracts/ca-model.abstract";
import { CAStringResponse } from "../../class/ca-string.response";

describe('CAStringResponse',()=>{
  let object:CAStringResponse = new CAStringResponse();
  object.data = '';

  it('data has attr string',()=>{
    expect(typeof object.data == 'string').toBeTruthy();
  });
});
