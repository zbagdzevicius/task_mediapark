import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState } from './auth/state/auth.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mediapark';

  @Select(AuthState.getAuthStatus) isLoggedIn$: Observable<boolean>;

  constructor(
    private router: Router
  ) {

    this.isLoggedIn$
      .subscribe(isLoggedIn => {
        if (isLoggedIn === true) {
          return this.router.navigate['table'];
        } else {
          return this.router.navigate[''];
        }
      });
  }

}
