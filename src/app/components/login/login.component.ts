import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CheckboxModule, InputTextModule, ButtonModule]
})
export class LoginComponent  implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  onGoogleLogin() {
    window.open(environment.host + 'login/google', '_self')
  }

}
