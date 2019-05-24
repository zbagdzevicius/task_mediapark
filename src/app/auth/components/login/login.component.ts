import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Login } from '../../../core/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLoginForm: FormGroup;
  login: Login = new Login();

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    const emailRegEx = /(?=^.{6,25}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
    this.userLoginForm = this.formBuilder.group({
      email: [this.login.email, Validators.email],
      password: [this.login.password, Validators.required, Validators.pattern(emailRegEx)]
    }
    );
  }

  ngOnInit() {
  }

  onSubmit() {
    this.login = this.userLoginForm.value;

    if (this.userLoginForm.valid) {

    } else {

    }
  }

}
