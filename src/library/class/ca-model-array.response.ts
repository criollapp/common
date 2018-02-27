import { ICAModel } from "../interfaces/i-ca-model.interface";
import { CAResponseAbstract } from "../abstracts/ca-response.abstract";

export class CAModelArrayResponse extends CAResponseAbstract
{
  public data:ICAModel[];
}
