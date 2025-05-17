import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'booking-system';

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }
}
