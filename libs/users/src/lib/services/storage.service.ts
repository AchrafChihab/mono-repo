import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  private readonly App_Token = 'app_token'

  setToken(data:string){
    localStorage.setItem(this.App_Token, data)
  }

  getToken(){
    return localStorage.getItem(this.App_Token)
  }

  removeToken(){
    return localStorage.removeItem(this.App_Token)
  }

  expiredToken(expiration: number) : boolean{
    return Math.floor(new Date().getTime()/ 1000) >= expiration
  }
}
