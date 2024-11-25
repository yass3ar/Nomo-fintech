import { expect } from '@wdio/globals'
import allureReporter from '@wdio/allure-reporter'
import {LoginPage} from '../../POM/pagesCommon/loginPage.js' assert{type:"js"};
const {ProductsPage} = require('../../POM/pagesCommon/productsPage.js');
const {HomePage} =  require('../../POM/pagesAndroid/homePage.js');
import Users from '../../Data/userCredentials.json' assert{type:"json"};
const loginpage = new LoginPage();
const homepage = new HomePage();
const productspage = new ProductsPage();
console.log(Users);

describe("Login trials ", () => {
    before(async () => {
      //Open the side menu and click on login button
      await homepage.menuBtn.click();
      await homepage.loginBtn.click();
    })
    Object.entries(Users).forEach(([userType, credentials]) => {
    it("Should try to login with different credentials", async () => {
          await loginpage.login(credentials.username, credentials.password);
          if (userType === "STANDARD") {
            await productspage.isProductsPageVisible();
            await expect(productspage.productsPage).toBeEnabled(); 

          };
        });
    });
  })