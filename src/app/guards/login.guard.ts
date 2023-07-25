import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private storage: Storage, private navCtrl: NavController) {}

  async canActivate() {
    const isUserLoggedIn = await this.storage.get('isUserLoggedIn');
    console.log('isUserLoggedIn', isUserLoggedIn);
    if (isUserLoggedIn) {
      return true;
    } else {
      this.navCtrl.navigateRoot('/login');
      console.log('isUSerLoggedIn', isUserLoggedIn);
      return false;
    }
  }
}
