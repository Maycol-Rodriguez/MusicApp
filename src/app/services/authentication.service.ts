import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private storage: Storage) {}

  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if (
        credentials.email == 'maycol@gmail.com' &&
        credentials.password == '111111'
      ) {
        accept('Login exitoso');
      } else {
        reject('Verifique sus credenciales');
      }
    });
  }

  registerUser(userData: any) {
    userData.password = btoa(userData.password);
    return this.storage.set('user', userData);
  }

  logoutUser() {
    return this.storage.remove('user');
  }
}
