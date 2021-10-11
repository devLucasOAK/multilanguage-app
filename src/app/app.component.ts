import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngx-translate';

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en')
    const lang = localStorage.getItem('lang') || 'en'
    this.translate.use(lang)
    document.documentElement.lang = lang
  }
}
