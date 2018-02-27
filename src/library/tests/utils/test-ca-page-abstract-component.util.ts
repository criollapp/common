import {Router} from '@angular/router';
import {CAPageAbstract} from '../../abstracts/ca-page.abstract';
import {Component} from '@angular/core';

@Component({template: ''})
export class XTestPageAbstractComponent extends CAPageAbstract {

  constructor( protected _router: Router ) {
    super();
  }

  public get router() {
    return this._router;
  }
}
