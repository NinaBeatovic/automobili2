import { DocumentSnapshot, SnapshotOptions } from "@angular/fire/firestore";

export class Rezervacija {
    IDRezervacija?: string;
    IDKorisnika?: number;
    IDVozila?: number;

    constructor (id?: string, idKorisnika?: number, idVozila?: number) {
       this.IDRezervacija = id;
       this.IDKorisnika = idKorisnika;
       this.IDVozila = idVozila;
    }
}
export const rezervacijaConverter = {
    toFirestore: (rezervacija : Rezervacija) => {
        return {
          //  IDRezervacija: rezervacija.IDRezervacija,
            IDKorisnika: rezervacija.IDKorisnika,
            IDVozila: rezervacija.IDVozila
        }
    },
    fromFirestore: (snapshot: DocumentSnapshot, options:SnapshotOptions) => {
        const data : Rezervacija = snapshot.data(options) as Rezervacija;
        console.log(data)
        return new Rezervacija(snapshot.id, data.IDKorisnika, data.IDVozila)
    }
}