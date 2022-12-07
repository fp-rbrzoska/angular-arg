import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fp-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
  constructor(private _routing: ActivatedRoute) {
    console.log(_routing.snapshot.paramMap.get('id'))
  }
}
