import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConcernPage } from '../../pages/concern/concern';
import { ProductPage } from '../../pages/product/product';
import { BrandPage } from '../../pages/brand/brand';
import { ShoppingCartPage } from '../../pages/shopping-cart/shopping-cart';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  concern(){
    this.navCtrl.push(ConcernPage);
  }

  brand(){
    this.navCtrl.push(BrandPage);
  }

  Products(){
    this.navCtrl.push(ProductPage);
  }

  onShoppingCart(){
    this.navCtrl.push(ShoppingCartPage);
  }
}
