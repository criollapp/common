import {Router} from '@angular/router';
import { CAClassAbstract } from "./ca-class.abstract";

export abstract class CAPageAbstract extends CAClassAbstract {
  protected _router: Router;

  constructor() {
    super();

    this._router;
  }

  goTo( url: string ): Promise<boolean> {
    const commands: string[] = [url];
    return this._router.navigate(commands);
  }
}
