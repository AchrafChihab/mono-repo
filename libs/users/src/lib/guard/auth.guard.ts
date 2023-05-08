import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private StorageService:StorageService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const token: string | null = this.StorageService.getToken()

        if(!token){
          this.router.navigate(['/login'])
          return false
        }



        if (token.split('.').length == 3) {
          const payload= token.split('.')[1]
          const decodeToken = JSON.parse(atob(payload))
          return decodeToken.isAdmin && this.StorageService.expiredToken(decodeToken.exp)
        }
    return true;
  }

}
