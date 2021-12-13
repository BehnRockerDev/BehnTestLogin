import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {User} from "../_models/User";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //Variables that can be called when checking the test login.
  private testName: string = "Testy McUser";
  private testPassword: string = "password123";
  private testUsername: string = "testuser";

  //UserService is included in this service via dependency injection.
  constructor(private userService: UserService) { }

  //This tests the login, without reaching out to a database or web API.
  //If the login form passed to it is valid, it will then check if the info the user put in matches the test username and password.
  //If everything matches, a user object is created with the test info, and sent to live in the user service.
  //If it does not match, a blank user object is created, and sent to live in the user service.
  testLogin(loginForm: FormGroup): void {
    if (loginForm.valid) {
      if (loginForm.value.username === this.testUsername && loginForm.value.password === this.testPassword) {
        this.userService.currentUser = new User(true, this.testName, this.testPassword, this.testUsername);
      } else {
        this.userService.currentUser = new User(false);
      }
      return;
    }

    //If the form is not valid, an alert is shown, and no user object is created.
    alert('Form is not valid');
    return;
  }
}
