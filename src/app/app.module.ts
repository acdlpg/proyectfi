import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CompraComponent } from './compra/compra.component';
import { DomseguroPipe } from './domseguro.pipe';
import { ContenidoComponent } from './contenido/contenido.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservaComponent } from './reserva/reserva.component';
import { CalendarModule } from 'primeng/calendar';
import { FooterComponent } from './footer/footer.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { CitasRegistradasComponent } from './citas-registradas/citas-registradas.component';
import { APIComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ContactoComponent } from './contacto/contacto.component';
import { AccesibilidadComponent } from './accesibilidad/accesibilidad.component';
import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { VerificarComponent } from './verificar/verificar.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { environment } from 'src/app/environments/environment';
import { ConfirmationResultService } from './services/confirmation-result.service';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import * as firebase from 'firebase/app';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VincularCorreoComponent } from './vincular-correo/vincular-correo.component';
import { VincularTelefonoComponent } from './vincular-telefono/vincular-telefono.component';
import { SessionService } from './services/session.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ChartComponent } from './chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HijoComponent } from './hijo/hijo.component';



export const firebaseConfig = {
  apiKey: 'AIzaSyC47AMfhjCTbBdH7X2-u3S6YdPursldDuE',
  authDomain: 'proyecto-gina-a9700.firebaseapp.com',
  projectId: 'proyecto-gina-a9700',
  storageBucket: 'proyecto-gina-a9700.appspot.com',
  messagingSenderId: '204542506942',
  appId: '1:204542506942:web:8810a04d7d27bfd57c6bef',
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogoComponent,
    CompraComponent,
    DomseguroPipe,
    ContenidoComponent,
    InicioComponent,
    ReservaComponent,
    FooterComponent,
    SobreNosotrosComponent,
    CitasRegistradasComponent,
    APIComponent,
    ContactoComponent,
    AccesibilidadComponent,
    LoginComponent,
    RecuperarPasswordComponent,
    RegistrarUsuarioComponent,
    VerificarComponent,
    VerificarCorreoComponent,
    SpinnerComponent,
    DashboardComponent,
    VincularCorreoComponent,
    VincularTelefonoComponent,
    ChartComponent,
    HijoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CardModule,
    HttpClientModule,
    TableModule,
    DividerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
}),
  ],
  providers: [ConfirmationResultService,
    SessionService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
