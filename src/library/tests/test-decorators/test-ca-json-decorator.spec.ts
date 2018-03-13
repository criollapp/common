import { TestModel } from "../utils/ca-test-model";

describe('JsonDecorator', () => {
  const model: TestModel = new TestModel({
    example1: 'valueExample1',
    example2: 'valueExample2',
    exampleProperty3: 'valueExample3'
  });

  it('when put object in constructor, value must be set on equivalent propierties', () => {
    expect(model.exampleProperty1 === 'valueExample1').toBeTruthy();
    expect(model.exampleProperty2 === 'valueExample2').toBeTruthy();
  });

  it('when put object in constructor but, it not have key name on decorator, value must be set on equivalent propierties', () => {
    expect(model.exampleProperty3 === 'valueExample3').toBeTruthy();
  });

  it('when call getJson method, object json must be returned', () => {
    const objectReturned = model.getJsonObject();
    expect(objectReturned.example1 === 'valueExample1').toBeTruthy();
    expect(objectReturned.example2 === 'valueExample2').toBeTruthy();
  });
});
