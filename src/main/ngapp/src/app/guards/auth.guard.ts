import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { debug } from 'util';

@Injectable()
export class AuthGuard {
    constructor(
        private router: Router,
        private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.auth.authenticated) {
            this.router.navigateByUrl('/auth');
            return false;
        }
        return true;
    }
}
