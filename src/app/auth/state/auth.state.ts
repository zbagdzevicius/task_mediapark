import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetAuth, ResetAuth } from '../actions/auth.actions';
import { AuthStateModel } from 'src/app/core/models/auth.model';


@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    email: null,
    loggedIn: null
  }
})

export class AuthState {

  @Selector()
  static getAuthStatus(auth: AuthStateModel) {
      return auth.loggedIn;
  }
  @Selector()
  static getAuthUser(auth: AuthStateModel) {
      return auth.email;
  }

  @Action(SetAuth)
  setAuth(context: StateContext<AuthStateModel>, { payload }: SetAuth) {
    context.patchState(payload);
  }

  @Action(ResetAuth)
  resetAuth(context: StateContext<AuthStateModel>) {
    context.patchState({
      email: null,
      loggedIn: null
    });
  }

}
