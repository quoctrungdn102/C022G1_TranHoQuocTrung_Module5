import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  listProduct: any;

  ngOnInit(): void {
    this.productService.getListProduct().subscribe(data => {
      console.log(data);
      this.listProduct = data;
    });
  }

}
