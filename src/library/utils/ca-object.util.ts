export class CAObjectUtil
{
  public static objectHasProperties( object:any, properties:string[] )
  {
    let hasProperties:boolean = true;
    if(object && properties && properties.length > 0) {
      properties.forEach( (prop)=> {
        if( !object.hasOwnProperty( prop ) ) {
          hasProperties = false;
        }
      });
    } else {
      hasProperties = false;
    }
    return hasProperties;
  }

  public static areEqual( object1, object2 ):boolean
  {
    return JSON.stringify(object1) === JSON.stringify(object2);
  }
}
