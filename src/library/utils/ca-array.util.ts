export class CArrayUtil
{
  public static areEqual( array1, array2 ):boolean
  {
    return JSON.stringify(array1) === JSON.stringify(array2);
  }

  public static isEmpty( array:any[] ):boolean
  {
    return CArrayUtil.areEqual( array, [] );
  }

  public static clone( array:any[] ):any[]
  {
    return Object.assign([], array);
  }
}
