import { ICACrudService } from "../../interfaces/i-ca-crud-service.interface";
import { ICAResponse } from "../../interfaces/i-ca-response.interface";
import { ICAModel } from "../../interfaces/i-ca-model.interface";
import { TestXResponseAbstract } from "./test-ca-response-abstract.util";

export class TestIXCrudServiceImplementation implements ICACrudService
{
  save(model: ICAModel): Promise<ICAResponse>
  {
    return Promise.resolve(new TestXResponseAbstract());
  }
}
