import { CAKeyValue } from "../../class/ca-key-value.class";

describe('CAKeyValue', () => {
  const keyValue:CAKeyValue = new CAKeyValue();

  it('key must be empty', () => {
    expect(keyValue.key).toBe('');
  });

  it('value must be empty', () => {
    expect(keyValue.value).toBe('');
  });

  it('key and value are inserted by constructor', () => {
    let keyValue:CAKeyValue = new CAKeyValue( 'myKey', 'myValue' );

    expect(keyValue.key).toBe('myKey');
    expect(keyValue.value).toBe('myValue');
  });

});
