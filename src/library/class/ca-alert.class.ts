import { CAKeyValue } from "./ca-key-value.class";

export class CAlertClass extends CAKeyValue {

  static readonly TYPE_WARNING = 'warning';
  static readonly TYPE_INFO = 'info';
  static readonly TYPE_SUCCESS = 'success';
  static readonly TYPE_DANGER = 'danger';

  public type = '';
  public allowClose: boolean;

  constructor(message: string = '', type: string = '', key = '', allowClose = false) {
    super();

    this.message = message;
    this.type = type == '' ? CAlertClass.TYPE_INFO : type;
    this.key = key;
    this.allowClose = allowClose;
  }

  public get message()
  {
    return this.value;
  }

  public set message( message:string )
  {
    this.value = message;
  }

  public static alertExists( alerts: CAlertClass[], messageToSearch: string): Boolean {
    return alerts.filter((alert: CAlertClass) => alert.message === messageToSearch || alert.key === messageToSearch ).length > 0;
  }

  public setInfoType()
  {
    this.type = CAlertClass.TYPE_INFO;
  }

  public setWarningType()
  {
    this.type = CAlertClass.TYPE_WARNING;
  }

  public setSuccessType()
  {
    this.type = CAlertClass.TYPE_SUCCESS;
  }

  public setDangerType()
  {
    this.type = CAlertClass.TYPE_DANGER;
  }
}
