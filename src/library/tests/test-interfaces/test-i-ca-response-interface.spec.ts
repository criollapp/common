import { ICAResponse } from "../../interfaces/i-ca-response.interface";
import { TestXResponseAbstract } from "../utils/test-ca-response-abstract.util";
import { CAlertClass } from "../../class/ca-alert.class";

describe('ICAResponse',()=>{
  let implementation:ICAResponse = new TestXResponseAbstract();
  implementation.code = 999;
  implementation.alerts = [new CAlertClass()];
  implementation.data = 1;

  it('has code attr',()=>{
    expect( typeof implementation.code == 'number' ).toBeTruthy();
  });

  it('has data attr',()=>{
    expect( implementation.data == 1 ).toBeTruthy();
  });

  it('has alerts attr',()=>{
    expect( implementation.alerts.length == 1 ).toBeTruthy();
  });

  it('has isOk method',()=>{
    expect( implementation.isOk() == false ).toBeTruthy();
  });

  it('has serverFailed method',()=>{
    expect( implementation.serverFailed() == false ).toBeTruthy();
  });

  it('has requestFailed method',()=>{
    expect( implementation.requestFailed() == false ).toBeTruthy();
  });

  it('has notFound method',()=>{
    expect( implementation.notFound() == false ).toBeTruthy();
  });

  it('has notAuthorized method',()=>{
    expect( implementation.notAuthorized() == false ).toBeTruthy();
  });
});
