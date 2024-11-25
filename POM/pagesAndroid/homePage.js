import { $ } from '@wdio/globals'
export class HomePage {
    /**
     * define selectors using getter methods
     */
    get menuBtn() {
        return driver.$("accessibility id:open menu");

      }
    
      get loginBtn() {
       return driver.$("accessibility id:menu item log in");
      }
    }
    