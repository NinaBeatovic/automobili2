import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Vozilo } from '../../../models/Vozilo/vozilo';
import { VoziloServiceService } from '../../../services/Vozilo/vozilo-service.service';

@Component({
  selector: 'app-lista-vozila-radnik',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-vozila-radnik.component.html',
  styleUrl: './lista-vozila-radnik.component.css'
})
export class ListaVozilaRadnikComponent implements OnInit {
  vozila: Vozilo[] = [];

  constructor(private voziloServis: VoziloServiceService) {}

  async ngOnInit(): Promise<void> {
    this.vozila = await this.voziloServis.getVozila();
  }

  async deleteVozilo(id: string | undefined): Promise<void> {
    await this.voziloServis.deleteVozilo(id as string);
    this.vozila = await this.voziloServis.getVozila();
  }
}
