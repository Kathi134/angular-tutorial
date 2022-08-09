import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../fooproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(item: Product) {
    var elem = document.getElementById('amount') as HTMLInputElement;
    var num = elem.value;
    var amount = Number(num);
    for(let i=0; i<amount; i++){
      this.cartService.update(item);
    }
    window.alert(
      amount + ' ' + item.name + ' has been added to the cart'
    );
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdExtractedFromRoute = Number(routeParams.get('pId'));

    this.product = products.find((i) => i.id === productIdExtractedFromRoute);
  }
}
