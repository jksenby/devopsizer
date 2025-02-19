import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config'
import { DrawerComponent } from './components/drawer/drawer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [DrawerComponent, RouterOutlet, ButtonModule, RouterLink, BreadcrumbModule],
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}