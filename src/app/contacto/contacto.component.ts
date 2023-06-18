import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AccService } from '../shared/acc.service';
import { RutaService } from '../services/ruta.service';
import Swal from 'sweetalert2';
import { SessionService } from '../services/session.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  private parrafo: SpeechSynthesisUtterance;
  leerElementosBoolean: boolean = false;

  forma!: FormGroup;

  usuario?: string;
  email?: string;
  descripcion?: string;
  dataUser!: any;

  constructor(
    public accService: AccService,
    private envio: RutaService,
    private formBuilder: FormBuilder,
    private session: SessionService,
    private afAuth: AngularFireAuth
  ) {
    this.forma = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      duda: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
    this.parrafo = new SpeechSynthesisUtterance();
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then((user) => {
      if (this.session.getUser()) {
        this.dataUser = user;
        this.usuario = this.dataUser.displayName;
        this.email = this.dataUser.email;
        console.log(user);
      }
    });
    console.log(this.dataUser);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    this.accService.leerContenido.subscribe(() => {
      this.leerElementosBoolean = true;
      console.log(
        'Leer Elementos Boolean Componente: ' + this.leerElementosBoolean
      );
    });

    this.accService.leerContenido2.subscribe(() => {
      this.leerElementosBoolean = false;
      console.log(
        'Leer Elementos Boolean Componente: ' + this.leerElementosBoolean
      );
    });

    this.accService.resumirContenido.subscribe(() => {
      this.reanudarVoz();
    });

    this.accService.pausarContenido.subscribe(() => {
      this.pausarVoz();
    });

    this.accService.cancelarContenido.subscribe(() => {
      this.cancelarVoz();
    });
  }

  leerTexto1(event: MouseEvent): void {
    if (this.leerElementosBoolean) {
      const contenido = (event.target as HTMLElement).textContent;
      if (contenido) {
        this.parrafo.text = contenido;
        speechSynthesis.speak(this.parrafo);
      }
    }
  }

  leerTexto2(event: MouseEvent): void {
    if (this.leerElementosBoolean) {
      const elemento = event.target as HTMLElement;
      const contenido = elemento.getAttribute('placeholder');
      if (contenido) {
        this.parrafo.text = contenido;
        speechSynthesis.speak(this.parrafo);
      }
    }
  }

  cancelarVoz(): any {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  }

  pausarVoz(): void {
    if ('speechSynthesis' in window) {
      speechSynthesis.pause();
    }
  }

  reanudarVoz(): void {
    if ('speechSynthesis' in window) {
      speechSynthesis.resume();
    }
  }

  enviar(): void {
    console.log(this.email);
    const urapi = `https://cinefactionmails.onrender.com/mailDuda/${this.email}/${this.usuario}/${this.descripcion}`;
    this.envio.getJSONurl(urapi).subscribe((res: any) => {
      console.log(res);
    });
    Swal.fire({
      icon: 'success',
      title: 'Su duda ha sido enviada, será resuelta lo más pronto posible',
      showConfirmButton: false,
      timer: 4000,
    });
    this.forma.get('duda')?.setValue('');
  }
}
