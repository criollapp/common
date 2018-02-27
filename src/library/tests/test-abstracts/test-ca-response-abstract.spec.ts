import { CAResponseAbstract } from "../../abstracts/ca-response.abstract";
import { TestXResponseAbstract } from "../utils/test-ca-response-abstract.util";

describe('CAResponseAbstract',()=>{
  let response:CAResponseAbstract = new TestXResponseAbstract();

  it('isOk when response code is 200, result must be true',()=>{
    response.code = CAResponseAbstract.CODE_OK;

    expect(response.isOk()).toBeTruthy();
  });

  it('isOk when response code is not 200, result must be false',()=>{
    response.code = 9999999;

    expect(response.isOk()).toBeFalsy();
  });

  it('requestFailed when response code is 400, result must be true',()=>{
    response.code = CAResponseAbstract.CODE_BAD_REQUEST;

    expect(response.requestFailed()).toBeTruthy();
  });

  it('requestFailed when response code is not 400, result must be false',()=>{
    response.code = 9999999;

    expect(response.requestFailed()).toBeFalsy();
  });

  it('serverFailed when response code is 500, result must be true',()=>{
    response.code = CAResponseAbstract.CODE_SERVER_FAILED;

    expect(response.serverFailed()).toBeTruthy();
  });

  it('serverFailed when response code is not 500, result must be false',()=>{
    response.code = 9999999;

    expect(response.serverFailed()).toBeFalsy();
  });

  it('notFound when response code is 404, result must be true',()=>{
    response.code = CAResponseAbstract.CODE_NOT_FOUND;

    expect(response.notFound()).toBeTruthy();
  });

  it('notFound when response code is not 404, result must be false',()=>{
    response.code = 9999999;

    expect(response.notFound()).toBeFalsy();
  });

  it('notAuthorized when response code is 404, result must be true',()=>{
    response.code = CAResponseAbstract.CODE_NOT_AUTHORIZED;

    expect(response.notAuthorized()).toBeTruthy();
  });

  it('notAuthorized when response code is not 404, result must be false',()=>{
    response.code = 9999999;

    expect(response.notAuthorized()).toBeFalsy();
  });

});
