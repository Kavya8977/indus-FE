import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AdminService, AuthServiceService } from "./auth-service.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable()
export class Jwtinterceptor implements HttpInterceptor {

    // constructor(private authService: AdminService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let token = localStorage.getItem('token');
      if(localStorage.getItem('token')){
        token = token.replace(/^"|"$/g,'');
      }     
  
      if (token) {
        const cloned = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
  
        return next.handle(cloned);
      } else {
        return next.handle(req);
      }
    }
  
}
