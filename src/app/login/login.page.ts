import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMesagge: string = '';
  loginForm: FormGroup;
  validationMessages = {
    email: [
      { type: 'required', message: 'El Email es necesario' },
      { type: 'pattern', message: 'Ingrese un email valido' },
    ],
    password: [
      { type: 'required', message: 'El Password es necesario' },
      {
        type: 'minlength',
        message: 'El password minimo debe tener 6 caracteres.',
      },
    ],
  };
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }
  ngOnInit() {}
  async loginUser(credentials: any) {
    try {
      await this.auth.loginUser(credentials);
      this.storage.set('isUserLoggedIn', true);
      this.navCtrl.navigateRoot('/menu/home');
    } catch (error: any) {
      this.errorMesagge = error;
      console.log(error);
    }
  }
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }
}
