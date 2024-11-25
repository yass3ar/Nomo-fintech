import { $ } from '@wdio/globals'
 export class LoginPage{
    /**
     * define selectors using getter methods
     */
    get inputUserName() {
        return driver.$("accessibility id:Username input field");

      }
    
      get inputPassword() {
       return driver.$("accessibility id:Password input field");
      }
    
      get btnLogin() {
        return driver.$("accessibility id:Login button");
      }
    
      get userNameIsRequired() {
        return driver.$("xpath://android.widget.TextView[@text=\"Username is required\"]");
      }
      get passwordIsRequired() {
        return driver.$("xpath://android.widget.TextView[@text=\"Password is required\"]");
      }

      get userIsLocked() {
        return driver.$("xpath://android.widget.TextView[@text=\"User is locked\"]");
      }
      /**
       * a method to encapsule automation code to interact with the page
       * e.g. to login using username and password
       */
      async login(username, password) {
        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
      }
}