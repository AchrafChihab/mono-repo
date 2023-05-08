import { Category } from "./category";

export interface Product {
  _id?: string;
  title?: string;
  description?: string;
  brand?: string;
  countStock?:number;
  thumbnail?:string;
  images?: string[];
  rating?: number;
  isFeatured?: boolean;
  content?:string;
  price?:number;
  category?:Category;

}

export interface ResProduct {
  success?: boolean;
  products: Product[]
}

export interface ResOneProduct {
  success?: boolean;
  product: Product;
}

