import { expect } from '@wdio/globals'
import { Given, When, Then } from '@cucumber/cucumber';
import {LoginPage} from '../../POM/pagesAndroid/loginPage.js' assert{type:"js"};
const {ProductsPage} = require('../../POM/pagesAndroid/productsPage.js');
const {HomePage} =  require('../../POM/pagesAndroid/homePage.js');
import Users from '../../Data/userCredentials.json' assert{type:"json"};
const loginpage = new LoginPage();
const homepage = new HomePage();
const productspage = new ProductsPage();
console.log(Users);
//console.log(loginpage.inputUsername)


describe("Login trials ", () => {
    beforeEach(async () => {
      //Open the side menu 
      await homePage.menuBtn.click();
      await homePage.loginBtn.click();

      //Click on the login button
      await driver.$("accessibility id:menu item log in").click();
    });

    // Object.entries(Users).forEach(([userType, credentials]) => {
    it("Shuld try to login with different credentials", async () => {
      const credentials = Object.entries(Users)
          await loginpage.login(credentials.username, credentials.password);
          Then('User should see error message', async () => {
            const isVisible = await driver.$("xpath://android.widget.TextView[@text=\"User is locked\"]");
            softAssert(expect(isVisible).toBeVisible());
          });
          
          Then('I should see an error message', async () => {
            const isErrorVisible = await loginpage.userNameIsRequired;
            softAssert(expect(isErrorVisible).toBeVisible());
          });
  
    //   //Validate the error message
    //   await expect(
    //     $(
    //       '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'
    //     )
    //   ).toHaveText("Provided credentials do not match any user in this service.");
    // });
  
    // it("should login with valid credentials", async () => {
    //   //Access the username input element by its content-desc
    //   Given('I launch the application', async () => {
    //     await browser.pause(2000); // Wait for app to load
    //   });
    //   When('I enter the correct username', async (username) => {
    //     const username = LOGIN_USERS.STANDARD.username;
    //     await loginpage.inputUserName.setValue(username);
    //   });
      
    //   When('I enter the correct password', async (password) => {
    //     const password = LOGIN_USERS.STANDARD.password;
    //     await loginpage.inputPassword.setValue(password);
    //   });
      
    //   When('I tap on the login button', async () => {
    //     await loginpage.btnLogin.click();
    //   });
      
    //   Then('I should see the products page', async () => {
    //     const isVisible = await productspage.isProductsPageVisible();
    //     assert.isTrue(isVisible, 'products page is visible');
    //     await softAssert(expect(productspage.productsPage).toHaveText("Products"));
    //   });
    // });
    it("test", async () => {
      //Access the username input element by its content-desc
    
        await browser.pause(2000); // Wait for app to load
        await loginpage.login(credentials.username, credentials.password);
        await loginpage.btnLogin.click();
      });
    });
  });
