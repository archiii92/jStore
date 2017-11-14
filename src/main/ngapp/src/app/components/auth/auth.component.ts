import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';

import 'jquery';
declare var $: any;

@Component({
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.less']
})
export class AuthComponent implements OnInit{
    username: string;
    password: string;
    errorMessage: string = null;
    @ViewChild('authModal') authModal: ElementRef;

    constructor(
        private auth: AuthService,
        private router: Router,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.show();

        $(this.authModal.nativeElement).on('hidden.bs.modal', () => {
            this.goBack();
        });
      }

    authenticate(form: NgForm) {
        if (form.valid) {
            this.auth.authenticate(this.username, this.password)
                .subscribe(response => {
                    if (response) {
                        this.hide();
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

    show(): void {
        $(this.authModal.nativeElement).modal('show');
    }

    hide(): void {
        $(this.authModal.nativeElement).modal('hide');
    }
}
