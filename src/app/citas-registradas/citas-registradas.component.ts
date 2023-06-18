import { Component, OnInit } from '@angular/core';
import { AccService } from '../shared/acc.service';
import { getDatabase, ref, push, set, onValue, remove } from 'firebase/database';
import { SessionService } from '../services/session.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-citas-registradas',
  templateUrl: './citas-registradas.component.html',
  styleUrls: ['./citas-registradas.component.css'],
})
export class CitasRegistradasComponent implements OnInit {
  private parrafo: SpeechSynthesisUtterance;
  leerElementosBoolean: boolean = false;
  columnas: String[] = [
    'Nombre',
    'Correo',
    'Sala',
    'Película',
    'Fecha',
    'Código QR',
    'Eliminar cita'
  ];
  citas!: any;
  mostrar = false;
  database = getDatabase();
  reservationsRef = ref(this.database, 'reservations');
  dataUser!: any;
  userID!: any;
  registrosRef = this.db.object<any>('reservations').valueChanges();

  constructor(public accService: AccService, private session: SessionService, private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase) {
    this.citas = [];
    console.log(this.dataUser);
    this.afAuth.currentUser.then((user) => {
      if(this.session.getUser()) {
        this.dataUser = user;
        this.userID = user?.uid;
        console.log(user?.uid);
        console.log(this.userID);
      }
      else {
        this.dataUser = null;
      }
    });
    var registroCitas = null;/*
    onValue(this.reservationsRef, (snapshot) => {
      registroCitas = snapshot.val();
      for (const key in registroCitas) {
        if(registroCitas.hasOwnProperty(key)) {
          console.log(registroCitas[key]['uid']);
          if( registroCitas[key]['uid'] === this.userID ) {
            console.log('si');
            console.log(key);
            console.log(registroCitas[key]);
            const citaR: { [identificador: string]: string } = {
              uid: registroCitas[key]['uid'],
              nombre: registroCitas[key]['nombre'],
              correo: registroCitas[key]['correo'],
              date: registroCitas[key]['date'],
              nombrePel: registroCitas[key]['nombrePel'],
              numAsientos: registroCitas[key]['numAsientos'],
              salaSel: registroCitas[key]['salaSel'],
              key: key,
            }
            //this.citas.push(citaR);
          }
        }
      }
    });*/
    /*const valores = localStorage.getItem('formData');
    if (valores) {
      this.citas = JSON.parse(valores);
      this.mostrar = true;
    } else {
    }*/
    console.log(this.citas);
    this.parrafo = new SpeechSynthesisUtterance();
  }

  ngOnInit(): void {
    this.citas = [];
    this.afAuth.currentUser.then((user) => {
      if(this.session.getUser()) {
        this.dataUser = user;
        console.log(user);
      }
      else {
        this.dataUser = null;
      }
    });
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.accService.leerContenido.subscribe(() => {
      this.leerElementosBoolean = true;
      console.log("Leer Elementos Boolean Componente: " + this.leerElementosBoolean);
    });

    this.accService.leerContenido2.subscribe(() => {
      this.leerElementosBoolean = false;
      console.log("Leer Elementos Boolean Componente: " + this.leerElementosBoolean);
    })

    this.accService.resumirContenido.subscribe(() => {
      this.reanudarVoz();
    });

    this.accService.pausarContenido.subscribe(() => {
      this.pausarVoz();
    });

    this.accService.cancelarContenido.subscribe(() => {
      this.cancelarVoz();
    });
    var registroCitas = null;
    this.registrosRef.subscribe((registroCitas) => {
    for (const key in registroCitas) {
      if (registroCitas.hasOwnProperty(key)) {
        console.log(registroCitas[key]['uid']);
        if (registroCitas[key]['uid'] === this.userID) {
          console.log('si');
          console.log(key);
          console.log(registroCitas[key]);
          const citaR: { [identificador: string]: string } = {
            uid: registroCitas[key]['uid'],
            nombre: registroCitas[key]['nombre'],
            correo: registroCitas[key]['correo'],
            date: registroCitas[key]['date'],
            nombrePel: registroCitas[key]['nombrePel'],
            numAsientos: registroCitas[key]['numAsientos'],
            salaSel: registroCitas[key]['salaSel'],
            key: key,
          }
          this.citas.push(citaR);
        }
      }
    }
  }, (error) => {
    console.error('Error al obtener los registros:', error);
  });
    console.log(this.citas);
  }


  eliminar2(key: string) {/*
    onValue(this.reservationsRef, (snapshot) => {
      const registroCitas = snapshot.val();
      const registroEncontrado = Object.keys(registroCitas).find((key) => {
        return (
          registroCitas[key]['date'] === cita.date
        );
      });
  
      if (registroEncontrado) {
        console.log(registroEncontrado)
        Swal.fire({
          title: '¿Seguro que quieres eliminar esta reservación?',
          text: 'No serás capaz de revertir esta acción',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí'
        }).then((result) => {
          if (result.isConfirmed) {
            const registroRef = ref(this.database, `reservations/${registroEncontrado}`);
            // Elimina el registro
            remove(registroRef)
              .then(() => {
                console.log('Registro eliminado correctamente');
                this.router.navigate(['/contenido', '0']);
                Swal.fire('Hecho', 'La reservación ha sido eliminada', 'success');
              })
              .catch((error) => {
                console.error('Error al eliminar el registro:', error);
                Swal.fire('Error', 'La reservación no ha sido eliminada', 'error');
              });
          }
        });
      }
    });*/
  const registroRef = ref(this.database, 'reservations/'+key);
  console.log(key);
  remove(registroRef)
    .then(() => {
      console.log('Registro eliminado correctamente');
      this.router.navigate(['/contenido', '0']);
      Swal.fire('Hecho', 'La reservación ha sido eliminada', 'success');
    })
    .catch((error) => {
      console.error('Error al eliminar el registro:', error);
      Swal.fire('Error', 'La reservación no ha sido eliminada', 'error');
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
  
}
