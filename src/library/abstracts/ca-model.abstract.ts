import {CAClassAbstract} from './ca-class.abstract';
import {CAGeneratorUtil} from '../utils/ca-generator.util';
import {ICAModel} from '../interfaces/i-ca-model.interface';

export abstract class CAModelAbstract extends CAClassAbstract implements ICAModel {
  private _id: number;
  public json: Object;

  constructor(args?: any) {
    super();

    if (args) {
      for (const field in this.json) {
        if (this.json.hasOwnProperty(field)) {
          const alias = this.json[field];
          this[field] = args[alias];
        }
      }

      for (const field in args) {
        this[field] = args[field];
      }
    }

    this.initId();
  }

  get id() {
    return this._id;
  }

  set id(newId) {
    this._id = newId;

    this.initId();
  }

  private initId() {
    if (this._id == null) {
      this._id = CAGeneratorUtil.getRandomNumber(-1, -9999999999999999999999);
    }
  }

  public getJsonObject(): any {
    const object = {};
    for (const field in this.json) {
      if (this.json.hasOwnProperty(field)) {
        const alias = this.json[field];
        object[alias] = this[field];
      }
    }
    return object;
  }

  public isOnDb() {
    return this.id > 0;
  }
}
