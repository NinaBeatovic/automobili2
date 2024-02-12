import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore'
import { RouterOutlet } from '@angular/router';
import { ListaVozilaComponent } from "./components/Vozilo/lista-vozila/lista-vozila.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListaVozilaComponent]
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);

  title = 'automobili';
}
