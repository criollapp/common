import { CAClassAbstract } from "../abstracts/ca-class.abstract";

export class CAKeyValue extends CAClassAbstract
{
    public key:string;
    public value:string;

    constructor( key:string = '', value:string = '' )
    {
        super();

        this.key = key;
        this.value = value;
    }
}
