import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/user.model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetAuth, ResetAuth } from '../../actions/auth.actions';
import { AuthState } from '../../state/auth.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLoginForm: FormGroup;
  user: User = new User();

  @Select(AuthState.getAuthStatus) isLoggedIn$: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    const emailRegEx = /(?=^.{6,25}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
    this.userLoginForm = this.formBuilder.group({
      // email: [this.user.email, Validators.email],
      // password: [this.user.password, Validators.pattern(emailRegEx)]
      email: [this.user.email],
      password: [this.user.password]
    }
    );


    this.isLoggedIn$.subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

  onSubmit() {
    this.user = this.userLoginForm.value;
    if (this.userLoginForm.valid) {
      this.store.dispatch(new SetAuth({ email: this.user.email, loggedIn: true }));
      setTimeout(this.logout, 5 * 60 * 1000);
    } else {
      console.log('bad credentials');
    }
  }

  logout() {
    this.store.dispatch(new ResetAuth());
  }

}
