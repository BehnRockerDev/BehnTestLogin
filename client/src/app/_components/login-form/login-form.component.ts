import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { LoginService } from "../../_services/login.service";
import {Router} from "@angular/router";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  //Needs to be explicitly unwrapped to work with reactive form. Undefined will not work with form groups.
  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    public userService: UserService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.min(1)]],
      password: ['', [Validators.required, Validators.min(1)]]
    })
  }

  onReset(): void {
    this.loginForm.reset();
    this.submitted = false;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;
    this.loginService.testLogin(this.loginForm);

    if (this.userService.currentUserIsLoggedIn()) {
      //Page re-directs back to home, as there is no longer a reason to be on the login page.
      await this.router.navigate(['/home']);
    }
  }
}
