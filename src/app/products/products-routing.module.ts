import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
{ path: '', component: ProductsListComponent },
{ path: 'add', component: ProductsAddComponent },
{ path: ':id', component: ProductsDetailsComponent },
{ path: ':id/edit', component: ProductsEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
