import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  languages = [
    {
      id: 'en',
      title: 'English'
    },
    {
      id: 'de',
      title: 'German'
    },
    {
      id: 'ar',
      title: 'Arabic'
    }
  ];
  
  selectedLanguage: string= 'en';
  
  constructor() { }

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('lang') || 'en'
  }

  changeLocale(){
    localStorage.setItem('lang', this.selectedLanguage)
    window.location.reload()
  }

}
