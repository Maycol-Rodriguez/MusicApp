import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) {}

  ngOnInit() {}

  closeMenu() {
    this.menu.close();
  }

  async logout() {
    try {
      await this.storage.set('isUserLoggedIn', false);
      this.navCtrl.navigateRoot('/login');
    } catch (error) {
      console.log(error);
    }
  }

  goToSettings() {
    this.navCtrl.navigateForward('/menu/settings');
    this.menu.close();
  }

  goToHome() {
    this.navCtrl.navigateRoot('/menu/home');
    this.menu.close();
  }

  goToIntro() {
    this.navCtrl.navigateRoot('/intro');
    this.menu.close();
  }
}
