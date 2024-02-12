import { Component, OnInit } from '@angular/core';
import { VoziloServiceService } from '../../../services/Vozilo/vozilo-service.service';
import { Vozilo } from '../../../models/Vozilo/vozilo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-vozila',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-vozila.component.html',
  styleUrl: './lista-vozila.component.css'
})
export class ListaVozilaComponent implements OnInit {
  vozila: Vozilo[] = [];

  constructor(private VoziloService: VoziloServiceService) {

  }

  async ngOnInit(): Promise<void> {
    this.vozila = await this.VoziloService.getVozila();
  }
}
