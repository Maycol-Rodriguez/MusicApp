import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  errorMesagge: string = '';
  registerForm: FormGroup;
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
    name: [
      { type: 'required', message: 'El Nombre es necesario' },
      {
        type: 'minlength',
        message: 'El Nombre minimo debe tener 6 caracteres.',
      },
    ],
    last_name: [
      { type: 'required', message: 'El Apellido es necesario' },
      {
        type: 'minlength',
        message: 'El Apellido minimo debe tener 6 caracteres.',
      },
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private navCtrl: NavController
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$'
          ),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
      name: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
      last_name: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }

  ngOnInit() {}
  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  async registerUser(valores: any) {
    console.log(valores);
    try {
      const user = await this.authService.registerUser(valores);
      this.navCtrl.navigateForward('/login');
    } catch (error) {
      console.log(error);
    }
  }
}
