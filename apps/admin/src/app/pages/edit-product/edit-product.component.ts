import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'libs/shared/src/lib/services/products.service';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Category, CategoryService, ResCategory } from '@medcoding/shared';
import { Location } from '@angular/common'

@Component({
  selector: 'admin-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


  id: string = ""
  categories:Category[]=[]
  thumbnail : any;

  productForm = new FormGroup({
    title: new UntypedFormControl('', [Validators.required]),
    description: new UntypedFormControl('', [Validators.required]),
    brand: new UntypedFormControl('', [Validators.required]),
    countStock: new UntypedFormControl('', [Validators.required]),
    rating: new UntypedFormControl('', [Validators.required]),
    // created_at: new UntypedFormControl('', [Validators.required]),
    // updated_at: new UntypedFormControl('', [Validators.required]),
    price: new UntypedFormControl('', [Validators.required]),
    category: new UntypedFormControl( [Validators.required]),
   // thumbnail: new UntypedFormControl(''),
})

  constructor(private productservice: ProductsService, private route: ActivatedRoute, private location: Location, private categoryservice: CategoryService){}

  ngOnInit(): void {

    this.getCategories()

    this.route.params.subscribe((params: any) => {
      this.productservice.getProduct(params.id).subscribe(res => {
        this.id = params.id
        this.productForm.patchValue(res.product)
        this.productForm.get('category')?.setValue( res.product.category )
      })
  })



  }

  submit(form: FormGroup) {

    if(form.invalid) {
      return
    }

    this.updateProduct
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

updateProduct() { //  this.location.back()
    const formData = new FormData() ;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const product = {
    title: this.productForm.controls['title'].value,
    description: this.productForm.controls['description'].value,
    // content: this.productForm.controls['content'].value,
    rating: this.productForm.controls['rating'].value,
    brand:this.productForm.controls['brand'].value,
    countStock: this.productForm.controls['countStock'].value,
    price: this.productForm.controls['price'].value ,
    category : this.productForm.controls['category'].value
  }

  console.log(product, 'ediiiit')
    formData.append('thumbnail', this.thumbnail) ;
    formData.append('product' , JSON.stringify(product) ) ;

    this.productservice.updateProduct(this.id,formData).subscribe(res => {
      if(res.success) {
        this.location.back()
      }
    },
    err => console.error(err))
  }


  getCategories(){
    this.categoryservice.getAllCategories().subscribe((res: ResCategory) => this.categories = res.categories);
    }
}

