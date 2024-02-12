import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Korisnik } from '../../../models/Korisnik/korisnik';
import { KorisnikServiceService } from '../../../services/Korisnik/korisnik-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private korisnikService: KorisnikServiceService, private router: Router) {}

  login() {
    this.korisnikService.loginKorisnik(this.email, this.password).then((result: boolean) => {
      if (result) {
        this.router.navigate(['/']);
      }else{
        this.errorMsg = 'Pogrešan email ili lozinka';
      }
    });
  }
}
