
import { CAlertClass } from "../class/ca-alert.class";

export interface ICAResponse
{
  code:number;
  data:any;
  alerts:CAlertClass[];

  isOk():boolean;
  serverFailed():boolean;
  requestFailed():boolean;
  notFound():boolean;
  notAuthorized():boolean;
}
