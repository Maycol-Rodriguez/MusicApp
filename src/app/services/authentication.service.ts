import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}
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
}
