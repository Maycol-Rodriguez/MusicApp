import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private storage: Storage) {}
  loginUser(credentials: any) {
    return new Promise((resolve, reject) => {
      if (
        credentials.email === 'maycol@gmail.com' &&
        credentials.password === '123456'
      ) {
        resolve('Login exitoso');
      } else {
        reject('Usuario y/o contraseña incorrectos');
      }
    });
  }
  registerUser(userData: any) {
    userData.password = btoa(userData.password);
    return this.storage.set('user', userData);
  }
}
