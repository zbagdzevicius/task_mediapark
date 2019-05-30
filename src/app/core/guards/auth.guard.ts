import { Subscription, Observable } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthState } from 'src/app/auth/state/auth.state';
import { Store, Select } from '@ngxs/store';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    @Select(AuthState.getAuthStatus) isLoggedIn$: Observable<boolean>;
    isLoggedIn: boolean;

    constructor(private store: Store, private router: Router) { }

    canActivate() {
        this.isLoggedIn$
            .subscribe(isLoggedIn => {
                if (!isLoggedIn) {
                    this.router.navigate(['']);
                }
                this.isLoggedIn = isLoggedIn;
            });
        return this.isLoggedIn;
    }

}
