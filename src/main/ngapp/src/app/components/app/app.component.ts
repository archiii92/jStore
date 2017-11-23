import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'j-store-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private auth: AuthService,
        private router: Router
    ) {}

    logout() {
        this.auth.clear();
        this.router.navigateByUrl('/');
    }

    get authenticated(): boolean {
        return this.auth.authenticated;
    }
}
