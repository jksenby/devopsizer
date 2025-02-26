import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

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
    // window.electronAPI.openPopup();
    this.http.get(environment.host + 'login/google', {observe: 'response'}).subscribe({next: response => {
      console.log(response)
    }, error: response => {
      console.log(response)
    }});

    // window.open(environment.host + 'login/google', '_self')
  }

}
