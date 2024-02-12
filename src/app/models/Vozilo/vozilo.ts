import { DocumentSnapshot, SnapshotOptions } from "@angular/fire/firestore";

export class Vozilo {
    IDVozila?: string;
    Marka?: string;
    Model?: string;
    Godiste?: number;
    korisnikRezervisao?: string;

    constructor (id?: string, marka?: string, model?: string, godiste?: number, korisnikRezervisao?: string) {
        this.IDVozila = id;
        this.Marka = marka;
        this.Model = model;
        this.Godiste = godiste;
        this.korisnikRezervisao = korisnikRezervisao;
    }
}

export const voziloConverter = {
    toFirestore: (vozilo : Vozilo) => {
        return {
            Marka: vozilo.Marka,
            Model: vozilo.Model,
            Godiste: vozilo.Godiste,
            korisnikRezervisao: vozilo.korisnikRezervisao
        }
    },
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const data : Vozilo = snapshot.data(options) as Vozilo;
        console.log(data)
        return new Vozilo(snapshot.id, data.Marka, data.Model, data.Godiste, data.korisnikRezervisao)
    }
}