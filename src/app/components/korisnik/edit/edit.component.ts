import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Korisnik } from '../../../models/Korisnik/korisnik';
import { KorisnikServiceService } from '../../../services/Korisnik/korisnik-service.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  IDKorisnika: string = '';
  korisnik : Korisnik = new Korisnik();
  izmenjeno: Boolean = false;
  // Samo napred 😉

constructor(private korisnikService: KorisnikServiceService, private route:ActivatedRoute){}

async ngOnInit(): Promise<void> {
  this.route.params.subscribe(params => this.IDKorisnika = params["id"]);
  this.korisnik = await this.korisnikService.getKorisnikById(this.IDKorisnika);
}

async updateKorisnik(){
  await this.korisnikService.editKorisnik(this.korisnik);
  this.izmenjeno = true;
}
}
