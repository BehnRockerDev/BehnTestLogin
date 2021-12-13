import { Injectable } from '@angular/core';
import { User } from "../_models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Setting as optional, as there will be no logged in user when the app launches.
  public currentUser?: User;

  constructor() { }

  //Service can unwrap and give the contents of the user's "loggedIn" variable, so others don't have to worry about unwrapping.
  //If the user is undefined (which could happen if an invalid form is submitted), false is returned.
  currentUserIsLoggedIn() {
    if (typeof this.currentUser !== "undefined") {
      return this.currentUser?.loggedIn;
    } else {
      return false;
    }
  }

  currentUsersName() {
    if (typeof this.currentUser !== "undefined") {
      return this.currentUser?.name;
    } else {
      return "";
    }
  }
}
