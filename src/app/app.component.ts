import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MiniGina2Angular';

  

  mostrar: boolean = false;
  lorem1: string =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam possimus, odio consectetur, doloribus itaque consequatur eum minima natus provident molestiae, aut cupiditate cum deleniti mollitia alias quibusdam facilis quos obcaecati';
  text!: any;
  tamanoGrande: boolean = false;
  linkGrande: boolean = false;
  textoAlineado: boolean = false;
  
  sobrenosotros: string = 'En nuestro cine, nos apasiona brindar una experiencia única y emocionante a todos nuestros espectadores. Desde nuestra apertura, nos hemos comprometido a ser el destino preferido para los amantes del cine en nuestra comunidad y más allá. Nos enorgullece ofrecer una amplia selección de películas de alta calidad, junto con comodidades modernas y un servicio excepcional. ¡Bienvenidos a nuestro mundo del cine!';
  vision: string = 'Nuestra visión es convertirnos en el principal destino cinematográfico de nuestra región, reconocidos por nuestra excelencia en la selección de películas y la calidad de nuestras instalaciones. Buscamos ser el lugar al que la comunidad acuda no solo para disfrutar de películas, sino también para experimentar eventos especiales, estrenos exclusivos y actividades culturales relacionadas con el cine. Además, nos esforzamos por fomentar una atmósfera acogedora y amigable, donde los espectadores se sientan parte de nuestra familia cinematográfica.';
  mision: string = 'Nuestra misión es ofrecer entretenimiento de primer nivel y momentos inolvidables a través de la magia del cine. Nos esforzamos por seleccionar cuidadosamente una variedad de películas de diferentes géneros y estilos, para satisfacer los gustos de todos nuestros espectadores. Además, nos comprometemos a proporcionar una experiencia excepcional en cada visita, asegurándonos de que cada detalle, desde la calidad de proyección hasta la comodidad de nuestros asientos, esté diseñado pensando en el disfrute de nuestros invitados.';
  todoTexto: string = 'Sobre Nosotros' + '' +  this.sobrenosotros + this.vision + this.mision;
 

  textoGrandeEnvio!: boolean;



  alternar(): void {
    this.mostrar = !this.mostrar;
    console.log("Mostrar Barra: " + this.mostrar)
  }

  lectorTexto2(text: any): void {
    const parrafo = new SpeechSynthesisUtterance();
    parrafo.text = text;
    speechSynthesis.speak(parrafo);
  }

  agrandarTexto2(): void {
    this.tamanoGrande = !this.tamanoGrande;

    /*const elementosTexto = document.getElementsByClassName('card-body')[0].getElementsByTagName('*');
    for( let i=0; i<elementosTexto.length; i++){
      elementosTexto[i].className.add*/
  }

  resaltarEnlaces2(): void {
    this.linkGrande = !this.linkGrande;

    //Funcion que selecciona todos los elementos <a> y les agrega ngClass
    const elementos = document.querySelectorAll('a: not([class])');
    elementos.forEach((elemento1) => {
      elemento1.setAttribute('[ngClass]', "{'link-grande': linkGrande}");
    });
  }

  alinearTexto2(): void {
    this.textoAlineado = !this.textoAlineado;
  }

  enviarCatalogo(): void{
    
  }






}
