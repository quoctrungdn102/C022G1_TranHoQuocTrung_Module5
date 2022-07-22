import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,private router: Router) {
  }

  productFormEdit: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    const product = this.productService.findById(id)
    console.log(product)
    this.productFormEdit.patchValue(product)
  }


  submit() {
    const product = this.productFormEdit.value;
    this.productService.editProduct(product);
    this.router.navigateByUrl('/product/list')
  }
}
