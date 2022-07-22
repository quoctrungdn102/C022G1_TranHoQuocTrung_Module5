import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {DeleteProductComponent} from "./product/delete-product/delete-product.component";
import {EditProductComponent} from "./product/edit-product/edit-product.component";


const routes: Routes = [
  {
    path: 'product/list', component: ProductListComponent
  },
  {
    path: 'product/create-product', component: ProductCreateComponent
  },
  {
    path: 'product/delete-product/:id', component: DeleteProductComponent
  },
  {
    path: 'product/edit-product/:id', component: EditProductComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
