import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageType: 'localStorage' | 'sessionStorage';

  constructor() {
    if (sessionStorage.getItem('access')) {
      this.storageType = 'sessionStorage';
    } else {
      this.storageType = 'localStorage';
    }
  }

  public setStorageType(type: 'localStorage' | 'sessionStorage'): void {
    this.storageType = type;
  }

  setItemToStorage(key: string, value: string): void {
    this.STORAGE.setItem(key, value)
  }
  getItemToStorage(key: string): string {
    return this.STORAGE.getItem(key) || '';
  }
  get STORAGE() {
    return this.storageType === 'sessionStorage' ? sessionStorage : localStorage;
  }

  public clear(): void {
    this.STORAGE.clear();
  }
}
