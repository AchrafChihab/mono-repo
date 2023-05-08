
import { Location } from "@angular/common";

import { Category, CategoryService } from '@medcoding/shared';
import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'admin-addcategory',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  categoryForm = new FormGroup({
    label: new UntypedFormControl('', [Validators.required]),
    icon: new UntypedFormControl('', [Validators.required, Validators.pattern(/[a-zA-Z-]*/)]),
    color: new UntypedFormControl(),
  })



  constructor(private categoryService: CategoryService, private location: Location) {}

  categories:Category[]=[]


  myCategory:Category = {
    label:"",
    color:"",
    icon:"",
  }

  submit(form: FormGroup) {

    if(form.invalid) {
      return
    }

    this.saveCategory()

  }

  saveCategory() {
    this.categoryService.addCategory(this.categoryForm.value).subscribe(res => {
      if(res.success) {
       this.location.back()
      }
    },
    err => console.error(err))
  }

}
