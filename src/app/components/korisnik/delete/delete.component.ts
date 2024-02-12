import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Korisnik } from '../../../models/Korisnik/korisnik';import { KorisnikServiceService } from '../../../services/Korisnik/korisnik-service.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteKorisnikComponent implements OnInit {
  IDKorisnika: string = '';
  korisnik: Korisnik = new Korisnik();
  izbrisano: Boolean = false;

  constructor(private korisnikService: KorisnikServiceService, private route: ActivatedRoute){}

  async  ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => this.IDKorisnika = params['id']);
    this.korisnik = await this.korisnikService.getKorisnikById(this.IDKorisnika);
  }

  async deleteKorisnik() {
    await this.korisnikService.deleteKorisnik(this.korisnik as Korisnik);
    this.izbrisano = true;
  }
}
