import { DocumentSnapshot, SnapshotOptions } from "@angular/fire/firestore";

export class Vozilo {
    IDVozila?: string;
    Marka?: string;
    Model?: string;
    Godiste?: number;

    constructor (id?: string, marka?: string, model?: string, godiste?: number) {
        this.IDVozila = id;
        this.Marka = marka;
        this.Model = model;
        this.Godiste = godiste;
    }
}

export const voziloConverter = {
    toFirestore: (vozilo : Vozilo) => {
        return {
            Marka: vozilo.Marka,
            Model: vozilo.Model,
            Godiste: vozilo.Godiste
        }
    },
    fromFirestore: (snapshot: DocumentSnapshot, options:SnapshotOptions) => {
        const data : Vozilo = snapshot.data(options) as Vozilo;
        console.log(data)
        return new Vozilo(snapshot.id, data.Marka, data.Model, data.Godiste)
    }
}