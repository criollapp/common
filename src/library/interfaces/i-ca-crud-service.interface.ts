import {ICAModel} from './i-ca-model.interface';
import { ICAResponse } from "./i-ca-response.interface";

export interface ICACrudService
{
    save(model: ICAModel): Promise<ICAResponse>;
    //delete(): Promise<boolean>;
    //getOne(): Promise<ICAModel>;
    //getAll(): Promise<ICAModel[]>;
}
