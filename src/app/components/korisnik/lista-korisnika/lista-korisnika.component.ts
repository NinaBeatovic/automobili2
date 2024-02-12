import { Component } from '@angular/core';
import { KorisnikServiceService } from '../../../services/Korisnik/korisnik-service.service';
import { Korisnik } from '../../../models/Korisnik/korisnik';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-lista-korisnika',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-korisnika.component.html',
  styleUrl: './lista-korisnika.component.css'
})
export class ListaKorisnikaComponent {
  korisnici: Korisnik[] = [];

  constructor(private KorisnikService: KorisnikServiceService){

  }

  async ngOnInit(): Promise<void>{
    this.korisnici = await this.KorisnikService.getKorisnici();
  }
}
