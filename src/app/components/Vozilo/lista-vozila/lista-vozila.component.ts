import { Component, OnInit } from '@angular/core';
import { VoziloServiceService } from '../../../services/Vozilo/vozilo-service.service';
import { Vozilo } from '../../../models/Vozilo/vozilo';
import { RouterLink } from '@angular/router';
import { KorisnikServiceService } from '../../../services/Korisnik/korisnik-service.service';

@Component({
  selector: 'app-lista-vozila',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-vozila.component.html',
  styleUrl: './lista-vozila.component.css'
})
export class ListaVozilaComponent implements OnInit {
  vozila: Vozilo[] = [];
  loggedIn: boolean = false;
  errorMsg: string = '';
  currentUser: string = '';


  constructor(private VoziloService: VoziloServiceService, private korisnikService: KorisnikServiceService) {
  }

  async ngOnInit(): Promise<void> {
    this.vozila = await this.VoziloService.getVozila();
    this.loggedIn = await this.korisnikService.getTrenutniKorisnikStatus();
    this.currentUser = this.korisnikService.auth.currentUser?.uid as string;

  }

  async rezervisiVozilo(vozilo: Vozilo) : Promise<void> {
    if (!this.loggedIn) {
      this.errorMsg = 'Morate biti prijavljeni da biste rezervisali vozilo.';
      return;
    }

    await this.VoziloService.rezervisiVozilo(vozilo, this.korisnikService.auth.currentUser?.uid as string);
  }

  // Removes reservation
  async otkaziRezervaciju(vozilo: Vozilo) : Promise<void> {
    if (!this.loggedIn) {
      this.errorMsg = 'Morate biti prijavljeni da biste otkazali rezervaciju.';
      return;
    }

    await this.VoziloService.otkaziRezervaciju(vozilo);
  }

}
