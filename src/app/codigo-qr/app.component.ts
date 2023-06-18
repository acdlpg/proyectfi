import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QR';
  ventas:Venta[]=[
    {id:1,nombre:"Omar",direccion:"VIllasuncion",total:65,pelicula:"El Juego",Sala:4},
    {id:2,nombre:"Erick",direccion:"Valeria Mall",total:78,pelicula:"SAW",Sala:8},
    {id:3,nombre:"Ruben",direccion:"Altaria",total:99,pelicula:"Harry Potter",Sala:10},
    {id:4,nombre:"Carolina",direccion:"Espacio",total:80,pelicula:"F&F10",Sala:5},
    {id:5,nombre:"Viridiana",direccion:"Aguascalientes",total:89,pelicula:"Maverick",Sala:6},
    {id:6,nombre:"Mauricio",direccion:"I MAX",total:60,pelicula:"CR7",Sala:1},
    {id:7,nombre:"Medrano",direccion:"Cinemex",total:50,pelicula:"Jojo´s",Sala:3},
    {id:8,nombre:"Lucas",direccion:"Cheadraui",total:67,pelicula:"The game",Sala:9},
    {id:9,nombre:"Kevin",direccion:"Colosio",total:77,pelicula:"Mario Bros",Sala:2},
    {id:10,nombre:"Uziel",direccion:"4D MAX",total:95,pelicula:"Alan y sus aventuras",Sala:7},
    {id:11,nombre:"Josue",direccion:"Independiente",total:20,pelicula:"Pepe el pollo",Sala:11}
  ];

  random:number=Math.floor(Math.random() * 13);
  elementType=NgxQrcodeElementTypes.URL;
  errorCorrectionLevel=NgxQrcodeErrorCorrectionLevels.HIGH;
  value="Id: "+this.ventas[this.random].id+"\n"+
  "Nombre: "+this.ventas[this.random].nombre+"\n"+
  "Direccion: "+this.ventas[this.random].direccion+"\n"+
  "Total: "+this.ventas[this.random].total+"\n"+
  "Pelicula: "+this.ventas[this.random].pelicula+"\n"+
  "Sala: "+this.ventas[this.random].Sala+"\n";
  cadenaAux="";

  cambiarQR(){
    this.cambiarValoresTexto();
    //this.url="";
    //this.profile=this.cadenaAux;
    this.elementType=NgxQrcodeElementTypes.URL;
    this.errorCorrectionLevel=NgxQrcodeErrorCorrectionLevels.HIGH;
    this.value=this.cadenaAux//this.url+this.profile;
  }

  cambiarValoresTexto(){
    let aleatorios=Math.floor(Math.random() * 13);
    // this.cadenaAux=JSON.stringify(this.ventas[Math.floor(Math.random() * 11)]);
    this.cadenaAux=
    "Id: "+this.ventas[aleatorios].id+"\n"+
    "Nombre: "+this.ventas[aleatorios].nombre+"\n"+
    "Direccion: "+this.ventas[aleatorios].direccion+"\n"+
    "Total: "+this.ventas[aleatorios].total+"\n"+
    "Pelicula: "+this.ventas[aleatorios].pelicula+"\n"+
    "Sala: "+this.ventas[aleatorios].Sala+"\n";
  }

  element = NgxQrcodeElementTypes.URL;
  correction = NgxQrcodeErrorCorrectionLevels.HIGH;
  
 
  

  ngOnInit(): void {
      
  }
}


class Venta{
  id:number=0;
  nombre:string="";
  direccion:string="";
  pelicula:string="";
  Sala:number=0;
  total:number=0; 
}


