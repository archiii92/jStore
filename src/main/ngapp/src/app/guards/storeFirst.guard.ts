import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CartDetailComponent } from '../components/cartDetail/cartDetail.component';

/**
 * If first navigation is navigation to CartDetailComponent, then reroute to products
 */
@Injectable()
export class StoreFirstGuard {
    private firstNavigation = true;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component === CartDetailComponent) {
                this.router.navigateByUrl('/products');
                return false;
            }
        }
        return true;
    }
}
