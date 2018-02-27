import { CAModelAbstract } from "../../abstracts/ca-model.abstract";
import { CAJson } from "../../decorators/ca-json.decorator";

export class TestXModel extends CAModelAbstract
{
  @CAJson() example1:string;
  example2:string;

  constructor(args?: any)
  {
    super(args);
  }
}
