export class User {
  private readonly _loggedIn: boolean;
  private readonly _name: string | undefined;
  private _password: string | undefined;
  private _username: string | undefined;

  constructor(loggedIn: boolean, name?: string, password?: string, username?: string) {
    this._loggedIn = loggedIn;
    this._name = name;
    this._password = password;
    this._username = username;
  }

  public get loggedIn() {
    return this._loggedIn;
  }

  public get name() {
    return this._name;
  }
}
