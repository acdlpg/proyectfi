import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassowrd = this.registrarUsuario.value.repetirPassword;
    const name = this.registrarUsuario.value.name;

    console.log(this.registrarUsuario);
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
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const displayName = name;
        if (user) {
          console.log(user);
          updateProfile(user, { displayName })
            .then(() => {
              this.verificarCorreo();
            })
            .catch((error) => {
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
      .catch((error) => {
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
        this.router.navigate(['/login']);
      });
  }
}
