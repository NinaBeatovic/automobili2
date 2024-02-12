import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KorisnikServiceService } from '../../../services/Korisnik/korisnik-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  ime: string = '';
  prezime: string = '';
  errorMsg: string = '';

  constructor(private korisnikServis: KorisnikServiceService) {}

  async register() {
    await this.korisnikServis.registerKorisnik(this.email, this.password, this.ime, this.prezime).then((res) => {
      console.log(res);
      if (res) {
        this.errorMsg = '';
      } else {
        this.errorMsg = 'Greška prilikom registracije';
      }
    });
  }
}
