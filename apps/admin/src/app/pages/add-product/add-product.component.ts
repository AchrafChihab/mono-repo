// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ProductsService } from './../../../../../../libs/shared/src/lib/services/products.service';
import { Location } from "@angular/common";
import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Category, CategoryService, ResCategory } from '@medcoding/shared';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product } from 'libs/shared/src/lib/models/product';

@Component({
  selector: 'admin-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {


  productForm = new FormGroup({
      title: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', [Validators.required]),
      brand: new UntypedFormControl('', [Validators.required]),
      countStock: new UntypedFormControl('', [Validators.required]),
      rating: new UntypedFormControl('', [Validators.required]),
      // created_at: new UntypedFormControl('', [Validators.required]),
      // updated_at: new UntypedFormControl('', [Validators.required]),
      price: new UntypedFormControl('', [Validators.required]),
      category: new UntypedFormControl('', [Validators.required]),
      // thumbnail: new UntypedFormControl('', [Validators.required]),
  })



  constructor(private productservice: ProductsService, private location: Location,private categoryService: CategoryService) {}

  products:Product[]=[]
  categories:Category[]=[]
  thumbnail : any;


  // myProduct:Product = {
  //   title:"",
  //   description:"",
  //   brand:"",
  //   countStock:0,
  //   rating:0,
  //   price:0,
  //   category:"",


  // }

  submit(form: FormGroup) {

    if(form.invalid) {
      return
    }

    this.saveProduct()

  }


  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        const mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return ;
        }
        this.thumbnail = file;

    }
  }

  saveProduct(){
    const formData = new FormData() ;
    if(!this.thumbnail){
      return
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const product = {
      title: this.productForm.controls['title'].value,
      // content: this.productForm.controls['content'].value,
      description: this.productForm.controls['description'].value,
      brand:this.productForm.controls['brand'].value,
      countStock: this.productForm.controls['countStock'].value,
      // isFeatured: this.productForm.controls['isFeatured'].value,
      price: this.productForm.controls['price'].value ,
      category : this.productForm.controls['category'].value,
      rating : this.productForm.controls['rating'].value

    }
    console.log(this.thumbnail)
    formData.append('thumbnail', this.thumbnail) ;
    formData.append('product' , JSON.stringify(product) ) ;
    console.log(product,'_________________________')
    this.productservice.addProduct(formData).subscribe(() => {
        // this.productForm.reset()
        // this.router.navigate(['/blog/addProduct'])
      })
  }
  ngOnInit(): void {
    this.getCategories()
}

    getCategories(){
      this.categoryService.getAllCategories().subscribe((res: ResCategory) => this.categories = res.categories);
      }

  // saveProduct() {
  //   this.productservice.addProduct(this.productForm.value).subscribe(res => {
  //     if(res.success) {
  //      this.location.back()
  //     }
  //   },
  //   err => console.log(err))
  // }

}
