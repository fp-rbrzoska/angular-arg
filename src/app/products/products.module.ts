import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsFormComponent } from './products-form/products-form.component';


@NgModule({
  declarations: [
    ProductsAddComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductsEditComponent,
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
