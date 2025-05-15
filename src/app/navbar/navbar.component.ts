import { Component, Renderer2, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule , TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDark = false;
  isAdmin = false;

  constructor(
    private renderer: Renderer2,
    private auth: Auth,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    // 🌙 الثيم
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.setDarkMode(true);
      this.isDark = true;
    }

    // 👤 تحقق من المستخدم
    this.auth.onAuthStateChanged(user => {
      if (user?.email === 'admin@example.com') {
        this.isAdmin = true;
      }
    });

    // 🌐 إعدادات اللغة
    this.translate.addLangs(['en', 'ar']);
    const savedLang = localStorage.getItem('lang') || this.translate.getBrowserLang() || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
    this.setDirection(savedLang);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.setDarkMode(this.isDark);
  }

  setDarkMode(enable: boolean) {
    if (enable) {
      this.renderer.addClass(document.body, 'dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.setDirection(lang);
  }

  setDirection(lang: string) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
  }
}
