export function CAJson( alias?: string) {
  return function (target: Object, propertyKey: string | symbol) {
    target['json'] = target['json'] || {};
    target['json'][propertyKey] = alias ? alias : propertyKey;
  };
}
