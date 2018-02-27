import { ICAModel } from "../interfaces/i-ca-model.interface";
import { CAResponseAbstract } from "../abstracts/ca-response.abstract";

export class CAModelResponse extends CAResponseAbstract
{
  public data:ICAModel;
}
