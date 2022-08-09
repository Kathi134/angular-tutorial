import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../fooproducts';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() pAlerts!: Product;
  @Output() notify = new EventEmitter();
}
