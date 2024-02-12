import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { KorisnikServiceService } from '../../services/Korisnik/korisnik-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  loggedIn: boolean = false;
  isRadnik: boolean = false;
  isDirektor: boolean = false;

  constructor(private korisnikService: KorisnikServiceService, private router: Router) { }

  async ngAfterViewInit(): Promise<void> {
    this.router.events.subscribe(async (event) => {
      if (event.constructor.name === "NavigationEnd") {
        this.loggedIn = await this.korisnikService.getTrenutniKorisnikStatus();
        this.isRadnik = await this.korisnikService.getTrenutniKorisnikRadnikStatus();
        this.isDirektor = await this.korisnikService.getTrenutniKorisnikDirektorStatus();
      }
      // this.loggedIn = await this.korisnikService.getTrenutniKorisnikStatus();
      // this.isRadnik = await this.korisnikService.getTrenutniKorisnikRadnikStatus();
      // this.isDirektor = await this.korisnikService.getTrenutniKorisnikDirektorStatus();
    });
    // this.loggedIn = await this.korisnikService.getTrenutniKorisnikStatus();
    // this.isRadnik = await this.korisnikService.getTrenutniKorisnikRadnikStatus();
    // this.isDirektor = await this.korisnikService.getTrenutniKorisnikDirektorStatus();
  }


}
