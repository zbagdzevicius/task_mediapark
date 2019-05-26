import { AuthStateModel } from 'src/app/core/models/auth.model';


export class SetAuth {
  static readonly type = '[auth] set auth';
  constructor(public payload: AuthStateModel) { }
}

export class ResetAuth {
  static readonly type = '[auth] reset auth';
}
