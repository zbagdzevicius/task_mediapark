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
  @Select(AuthState.getAuthUser) email$: Observable<boolean>;
  isLoggedIn: boolean;
  email: string;

  constructor(private store: Store) {
    this.isLoggedIn$.subscribe(data => this.isLoggedIn = data);
    this.email$.subscribe(data => this.email = data);
  }


  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new ResetAuth());
  }

}
