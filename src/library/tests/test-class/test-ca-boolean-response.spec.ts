import { CABooleanResponse } from "../../class/ca-boolean.response";

describe('CABooleanResponse',()=>{
  let object:CABooleanResponse = new CABooleanResponse();
  object.data = true;

  it('data has attr boolean',()=>{
    expect(typeof object.data == 'boolean').toBeTruthy();
  });
});
