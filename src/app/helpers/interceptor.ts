import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LangInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const lang = localStorage.getItem('lang') || 'en'
        
        req = req.clone({
            setHeaders: {
                'Accept-Language': lang
            }
        })
        
        return next.handle(req);
    }
}