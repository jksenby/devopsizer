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
    document.cookie = "session=.eJwlzjsOwjAMANC7ZGZw6ji2uQyKf4K1pRPi7oCY3_Je7VZ7Hvd2fe5nXtrtEe3aoKsKFADXxmFDkcZk3sZwNCzsueYgRuMJNUGtC7OHqpsHVnT4UZkaGa8Ej9GpnFaEuLgumUIRmH2leYYssRjUfVHNRda-kfPI_b_B9v4AoL8wag.Z7MXiw.AG9oY4q45c_kR6iicT70Qg3rFQo"
    this.primeng.ripple.set(true);
  }
}