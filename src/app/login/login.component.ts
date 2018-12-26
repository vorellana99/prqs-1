import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    user  = '';
    password = '';
    constructor(
        private translate: TranslateService,
        private messageService: MessageService,
        public router: Router
        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {}

    onLoggedin() {
        if (this.user.trim() === '' || this.password.trim() === '') {
            this.messageService.add({severity: 'info', summary: '', detail: 'Debe ingresar un Usuario y/o Contraseña válidos.'});
        } else {
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
        }
    }

}
