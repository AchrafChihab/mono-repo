
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ProductsService } from './../../../../../../libs/shared/src/lib/services/products.service';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product, ResProduct } from './../../../../../../libs/shared/src/lib/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productservice: ProductsService){}

  products: Product[] = []
  cat : any
  ngOnInit(): void {
    this.getproducts();
}

getproducts() {
  this.productservice.getAllProducts().subscribe(({success, products}: ResProduct) => {
    if(success) {
      this.products = products
      console.log(products)
    }
  })
}

deleteProduct(id:string ){
  this.productservice.deleteProduct(id).subscribe(()=>{
    this.getproducts();
  })
}

}
