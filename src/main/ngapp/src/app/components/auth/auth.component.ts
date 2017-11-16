import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.less']
})
export class AuthComponent {
    username: string;
    password: string;
    errorMessage: string = null;

    constructor(
        private auth: AuthService,
        private router: Router,
        private location: Location
    ) {}

    authenticate(form: NgForm) {
        if (form.valid) {
            this.auth.authenticate(this.username, this.password)
                .subscribe(response => {
                    if (response) {
                        this.goBack();
                    } else {
                        this.errorMessage = 'Неверный логин/пароль';
                    }
                });
        } else {
            this.errorMessage = 'Введите логин/пароль';
        }
    }

    goBack(): void {
        this.location.back();
    }
}
