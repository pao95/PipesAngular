import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   nombre = 'Fernando';
   arreglo = [1, 2, 3, 4 , 5, 6 , 7 , 8 , 9];

   PI = Math.PI;

   a = 0.234;

   salario = 1234.5;

   heroe = {
  nombre: 'Logan',
  clave: 'Wolverine',
  edad: 500,
  direccion: {
    calle: 'Primera',
    numero: 134,

  }};


  fecha = new Date();

  nombre2 = 'paOLA Rosa hiNostroZa trujilLo';

  video = 'PfO_gYVOHQU';

  // tslint:disable-next-line:no-inferrable-types
  activado: boolean = true;

}
