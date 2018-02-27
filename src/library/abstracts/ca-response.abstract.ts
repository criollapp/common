import { ICAResponse } from "../interfaces/i-ca-response.interface";
import { CAlertClass } from "@criollapp/components";

export abstract class CAResponseAbstract implements ICAResponse
{
  public static readonly CODE_OK:number = 200;
  public static readonly CODE_SERVER_FAILED:number = 500;
  public static readonly CODE_NOT_FOUND:number = 404;
  public static readonly CODE_NOT_AUTHORIZED:number = 401;
  public static readonly CODE_BAD_REQUEST:number = 400;

  public code:number;
  public data:any;
  public alerts:CAlertClass[];

  public isOk():boolean
  {
    return this.code == CAResponseAbstract.CODE_OK;
  }

  public serverFailed():boolean
  {
    return this.code == CAResponseAbstract.CODE_SERVER_FAILED;
  }

  public requestFailed():boolean
  {
    return this.code == CAResponseAbstract.CODE_BAD_REQUEST;
  }

  public notFound():boolean
  {
    return this.code == CAResponseAbstract.CODE_NOT_FOUND;
  }

  public notAuthorized():boolean
  {
    return this.code == CAResponseAbstract.CODE_NOT_AUTHORIZED;
  }
}
