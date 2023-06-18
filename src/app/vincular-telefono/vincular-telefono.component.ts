import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { ConfirmationResult, getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { ConfirmationResultService } from 'src/app/services/confirmation-result.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-vincular-telefono',
  templateUrl: './vincular-telefono.component.html',
  styleUrls: ['./vincular-telefono.component.css']
})
export class VincularTelefonoComponent implements OnInit, AfterViewInit {
  dataUser!: any;
  numTelefonoR: FormGroup;
  loading: boolean = false;
  recaptchaVerifier!: RecaptchaVerifier;
  confirmationResult!: ConfirmationResult;
  OTPCode: FormGroup;
  OTPbool!: boolean;
  @ViewChild('recaptchaContainer') recaptchaContainer!: ElementRef;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private session: SessionService) {
      this.numTelefonoR = this.fb.group({
        numTelefono: ['', Validators.required],
      });
      this.OTPCode = this.fb.group({
        otpCode: ['', Validators.required],
      });
      this.OTPbool = false;
      this.afAuth.currentUser.then((user) => {
        this.dataUser = user;
      });
      
  }
  ngAfterViewInit() {
    const auth = getAuth();
    this.recaptchaVerifier = new RecaptchaVerifier(this.recaptchaContainer.nativeElement, {
      'size': 'normal',
      'callback': (response: any) =>{ 
        //this.onSignInSubmit();
      }
    }, auth);
    this.recaptchaVerifier.render();
  }

  ngOnInit(): void {
    /*this.afAuth.currentUser.then((user) => {
      this.dataUser = user;
    });
    const auth = getAuth();
    this.recaptchaVerifier = new RecaptchaVerifier(this.recaptchaContainer.nativeElement, {
      'size': 'normal',
      'callback': (response: any) =>{ 
        //this.onSignInSubmit();
      }
    }, auth);
    this.recaptchaVerifier.render();*/
  }
  onTelefoneSubmit(){
    const auth = getAuth();
    const appVerifier = this.recaptchaVerifier;
    const phoneNumber = "+52" + this.numTelefonoR.value.numTelefono;

    /*signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        this.confirmationResult = confirmationResult;
        this.OTPbool = true;
      })
      .catch((error) => {
        console.log(error);
      });*/
    this.dataUser.linkWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult: any) => {
        console.log(this.dataUser, confirmationResult);
        this.confirmationResult = confirmationResult;
      })
      .catch((error: any) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
      });
  }
  onVerifyCode() {
    const code = this.OTPCode.value.otpCode;
    const confirmationResult = this.confirmationResult;
    this.loading = true;
    confirmationResult.confirm(code)
      .then((result) => {
        // User signed in successfully.
        //const user = result.user;
        this.loading = false;
        this.session.setUser(result.user);
        this.router.navigate(['/inicio']);
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }

}
