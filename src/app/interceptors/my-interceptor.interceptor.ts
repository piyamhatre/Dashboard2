// Import necessary modules from Angular
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CacheService } from '../services/cache.service';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  // Inject CacheService in the constructor
  constructor(private cacheService: CacheService) {}

  // Intercept function to handle HTTP requests
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Create a unique key for the request based on URL and parameters
    const key = this.createKey(request);

    // Check if a cached response exists for the key
    const cachedResponse = this.cacheService.get(key);
    if (cachedResponse) {

      // Return an observable with the cached response as an HttpResponse
      return new Observable((observer) => {
        observer.next(new HttpResponse({ body: cachedResponse }));
        observer.complete();
      });
    }

    // If no cached response, continue with the original request
    return next.handle(request);
  }

  // Private function to create a unique key for the request based on URL and parameters
  private createKey(request: HttpRequest<any>): string {
    const url = request.urlWithParams;
    const params = request.params.toString();
    return `${url}_${params}`;
  }

}
