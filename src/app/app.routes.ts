import { Routes } from '@angular/router';
import { EditVoziloComponent } from './components/Vozilo/edit-vozilo/edit-vozilo.component';
import { ListaVozilaComponent } from './components/Vozilo/lista-vozila/lista-vozila.component';

export const routes: Routes = [
    { path: 'vozila/listaVozila',component: ListaVozilaComponent },
    { path: 'vozila/editVozilo/:id', component: EditVoziloComponent }
];
