import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { DataService } from 'src/app/services/Shared/data.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  itemCount = 0;
  checkoutProducts: CartProduct[];
  totalPrice: number = 0;
  constructor(private dataService: DataService) {
    const products = JSON.parse(localStorage.getItem('Cart'));
    this.checkoutProducts = products;
    products.forEach((product) => {
      this.totalPrice += product.Price;
    });
  }

  ngOnInit() {
    this.dataService.count.subscribe(count => this.itemCount = count);
  }

}
