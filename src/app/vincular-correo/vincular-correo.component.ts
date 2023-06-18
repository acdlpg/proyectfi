import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { EmailAuthProvider, getAuth, RecaptchaVerifier, signInWithPhoneNumber, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vincular-correo',
  templateUrl: './vincular-correo.component.html',
  styleUrls: ['./vincular-correo.component.css']
})
export class VincularCorreoComponent {
  dataUser!: any;
  vincularUsuario!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.vincularUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
      name: ['', Validators.required],
    });
    this.afAuth.currentUser.then((user) => {
      this.dataUser = user;
    });
  }

  ngOnInit(): void {}

  vincular() {
    const email = this.vincularUsuario.value.email;
    const password = this.vincularUsuario.value.password;
    const repetirPassowrd = this.vincularUsuario.value.repetirPassword;
    const name = this.vincularUsuario.value.name;
    if (password !== repetirPassowrd) {
      Swal.fire({
        icon: 'error',
        title: 'Las contraseñas ingresadas deben ser las mismas',
        showConfirmButton: true,
        timer: 4000,
      });
      return;
    }
    this.loading = true;
    console.log(this.dataUser);
    const auth = EmailAuthProvider;
    const credential = auth.credential(email, password);
    console.log(credential);
    this.dataUser.linkWithCredential(credential)
      .then((confirmationResult: any) => {
        console.log(confirmationResult.user);
        if(this.dataUser){
          console.log(this.dataUser);
          const displayName = name;
          updateProfile(this.dataUser, { displayName })
            .then(() => {
              console.log(this.dataUser);
              this.verificarCorreo();
            })
            .catch((error: any) => {
              this.loading = false;
              Swal.fire({
                icon: 'error',
                title: 'Error al actualizar el perfil',
                showConfirmButton: true,
                timer: 4000,
              });
            });
        } else {
          this.loading = false;
          console.error('El usuario es nulo');
        }
      })
      .catch((error: any) => {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          showConfirmButton: true,
          timer: 4000,
        });
      });
  }
  verificarCorreo() {
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        Swal.fire({
          icon: 'info',
          title: 'Le enviamos un correo electronico para su verificacion',
          showConfirmButton: true,
          timer: 4000,
        });
        this.router.navigate(['/dashboard']);
      });
  }
}
