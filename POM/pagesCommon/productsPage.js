import { $ } from '@wdio/globals'
export class ProductsPage{
    /**
     * define selectors using getter methods
     */
    get productsPage() {
        return driver.$("accessibility id:container header");
      }
      async isProductsPageVisible() {
        return this.productsPage.isDisplayed();
      }
    }    