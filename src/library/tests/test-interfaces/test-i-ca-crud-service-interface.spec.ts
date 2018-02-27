import { ICACrudService } from "../../interfaces/i-ca-crud-service.interface";
import { TestIXCrudServiceImplementation } from "../utils/test-i-ca-crud-service-implementation.util";
import { TestXModel } from "../utils/test-ca-model.util";

describe('ICACrudService',()=>{
  let implementation:ICACrudService = new TestIXCrudServiceImplementation();

  it('has save method',()=>{
    const model:TestXModel = new TestXModel();

    expect( implementation.save( model ) instanceof Promise ).toBeTruthy();
  });
});
