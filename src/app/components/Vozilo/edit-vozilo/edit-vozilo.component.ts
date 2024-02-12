import { Component, OnInit } from '@angular/core';
import { VoziloServiceService } from '../../../services/Vozilo/vozilo-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Vozilo } from '../../../models/Vozilo/vozilo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-vozilo',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-vozilo.component.html',
  styleUrl: './edit-vozilo.component.css'
})
export class EditVoziloComponent implements OnInit {

  idVozila: string = '';
  vozilo: Vozilo = new Vozilo();
  izmenjeno: Boolean = false;

  constructor(private voziloService: VoziloServiceService, private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => this.idVozila = params['id']);

    this.vozilo = await this.voziloService.getVoziloById(this.idVozila);
  }

  async updateVozilo() {
    await this.voziloService.editVozilo(this.vozilo as Vozilo);
    this.izmenjeno = true;
  }
}
