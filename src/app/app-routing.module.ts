import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { CitasRegistradasComponent } from './citas-registradas/citas-registradas.component';
import { APIComponent } from './api/api.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { VerificarComponent } from './verificar/verificar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VincularTelefonoComponent } from './vincular-telefono/vincular-telefono.component';
import { VincularCorreoComponent } from './vincular-correo/vincular-correo.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'contenido', component: ContenidoComponent },
  { path: 'nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'proximamente', component: APIComponent },
  { path: 'reservaciones', component: CitasRegistradasComponent },
  { path: 'contenido/:movie', component: ContenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'verificacion', component: VerificarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vincular-telefono', component: VincularTelefonoComponent },
  { path: 'vincular-correo', component: VincularCorreoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Cuando es la raíz
  { path: '**', redirectTo: '/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
