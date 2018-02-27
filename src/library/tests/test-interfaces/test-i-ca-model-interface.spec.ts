import { ICAModel } from "../../interfaces/i-ca-model.interface";
import { TestXModel } from "../utils/test-ca-model.util";

describe('ICAModel',()=>{
  let implementation:ICAModel = new TestXModel();

  it('has id attr',()=>{
    expect( implementation.id < 0 ).toBeTruthy();
  });

  it('has isOnDb method',()=>{
    expect( implementation.isOnDb() == false ).toBeTruthy();
  });
});
