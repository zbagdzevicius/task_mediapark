import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { SetAuth, ResetAuth } from '../../actions/auth.actions';
import { AuthState } from '../../state/auth.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  @Select(AuthState.getAuthStatus) isLoggedIn$: Observable<boolean>;
  @Select(AuthState.getAuthUser) email$: Observable<string>;
  isLoggedIn: boolean;
  email: string;

  constructor(private store: Store) {
    this.isLoggedIn$.subscribe(isLoggenin => this.isLoggedIn = isLoggenin);
    this.email$.subscribe(email => this.email = email);
  }


  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new ResetAuth());
  }

}
