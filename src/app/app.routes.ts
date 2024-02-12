import { Routes } from '@angular/router';
import { EditVoziloComponent } from './components/Vozilo/edit-vozilo/edit-vozilo.component';
import { ListaVozilaComponent } from './components/Vozilo/lista-vozila/lista-vozila.component';
import { EditComponent } from './components/korisnik/edit/edit.component';
import { RegisterComponent } from './components/korisnik/register/register.component';
import { LoginComponent } from './components/korisnik/login/login.component';
import { ListaVozilaRadnikComponent } from './components/Vozilo/lista-vozila-radnik/lista-vozila-radnik.component';
import { ListaKorisnikaComponent } from './components/korisnik/lista-korisnika/lista-korisnika.component';

export const routes: Routes = [
    { path: 'vozila/listaVozila',component: ListaVozilaComponent },
    { path: 'vozila/listaVozilaRadnika',component: ListaVozilaRadnikComponent },
    { path: 'vozila/editVozilo/:id', component: EditVoziloComponent },
    { path: 'korisnik/editKorisnik', component: EditComponent },
    { path: 'korisnik/login', component: LoginComponent },
    { path: 'korisnik/register', component: RegisterComponent },
    { path: 'korisnik/listaKorisnika', component: ListaKorisnikaComponent },
    { path: '', redirectTo: 'vozila/listaVozila', pathMatch: 'full'}
];
