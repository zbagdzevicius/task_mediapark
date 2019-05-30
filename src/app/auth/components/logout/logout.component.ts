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

  @Select(AuthState.getAuthUser) email$: Observable<string>;
  name: string;

  constructor(private store: Store) {
    this.email$.subscribe(email => {
      if (email !== null) {
        this.name = this.stripEmail(email);
      }
    }
    );
  }


  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new ResetAuth());
  }

  stripEmail(email: string) {
    const emailArray: string[] = email.split('@');
    return emailArray[0];
  }

}
