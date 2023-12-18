// Import necessary modules from Angular
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  // Private cache object to store key-value pairs
  private cache: { [key: string]: any } = {};

  // Function to get the value from the cache based on a given key
  get(key: string): any {
    return this.cache[key];
  }

  // Function to set a key-value pair in the cache
  set(key: string, value: any): void {
    this.cache[key] = value;
  }
}
