import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slides = [
    {
      title: 'Quevedo',
      img: 'https://lh3.googleusercontent.com/_xtNRdAigNR0XtdJuEUCtsHyRYd2WladgU-k3YgR3x-B_CtGGl_828i9Vsu-blCKlYlVJ0b1ie8Jyp1Q=w544-h544-l90-rj',
      icon: 'beer-outline',
      description:
        'Pedro Luis Domínguez Quevedo Arilla, conocido artísticamente como Quevedo, es un cantante español de reguetón, trap y pop rap.',
    },
    {
      title: 'Feid',
      img: 'https://th.bing.com/th/id/R.78d0bd3b53f9fa1901c83bf782253548?rik=DIdlrgtliT9lsg&pid=ImgRaw&r=0',
      icon: 'barbell-outline',
      description:
        'Salomón Villada Hoyos​ conocido por su nombre artístico Feid, es un cantante, compositor y productor musical colombiano. Durante su trayectoria musical ha trabajado con varios artistas cómo Daddy Yankee, J Balvin, J Quiles, Manuel Turizo, Sebastián Yatra, Nacho, Maluma, Karol G, Yandel, entre otros.​​​​​Fuente: Wikipedia (https://es.wikipedia.org/wiki/Feid), bajo la licencia Creative Commons Attribution CC-BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0/legalcode)',
    },
    {
      title: 'Jhayco',
      img: 'https://lh3.googleusercontent.com/_C2PL7KCnY2Mglqc8hunHnXaYWTgnLRirvl19g6mx708YBY8U5NGlCVKOu85Ou-bPfASLGt1ITGN9QnnsQ=w544-h544-l90-rj',
      icon: 'beer-outline',
      description:
        'Jesús Manuel Nieves Cortés ​ conocido artísticamente como Jhayco o Jhay Cortez, es un cantante, rapero, compositor y productor musical puertorriqueño.​ Fuente: Wikipedia (https://es.wikipedia.org/wiki/Jhayco), bajo la licencia Creative Commons Attribution CC-BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0/legalcode)',
    },
    {
      title: 'ODISEO',
      img: 'https://lh3.googleusercontent.com/8zJN0uGKPiJFUuxOdRvRWAPikV6ApV8S4A9ZCB6jkJsMyWgKhWPPt7lrtSldZ1kRoeN4k4SpHX9xDtH2=w544-h544-l90-rj',
      icon: 'beer-outline',
      description:
        'Odisseo es una banda de rock mexicana de Ecatepec, Estado de México actualmente la banda está conformada por Juan Pablo López Voz, Daniel León Guitarra, Edgar Macin Bajo, Manuel Uribe Batería y Rodolfo Guerrero Teclados.Fuente: Wikipedia (https://es.wikipedia.org/wiki/Odisseo), bajo la licencia Creative Commons Attribution CC-BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0/legalcode)',
    },
  ];

  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {}

  close() {
    console.log('estoy tratando de cerrar');
    this.storage.set('introShow', true);
    this.router.navigateByUrl('/menu/home');
  }
}
