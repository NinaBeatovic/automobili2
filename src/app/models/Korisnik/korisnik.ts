import { DocumentSnapshot, SnapshotOptions } from "@angular/fire/firestore";

export class Korisnik {
    IDKorisnika?: string;
    Ime?: string;
    Prezime?: string;
    EMail?: string;
    Rola?: string;

    constructor (id?: string, ime?: string, prezime?: string, email?: string, rola?: string) {
        this.IDKorisnika = id;
        this.Ime = ime;
        this.Prezime = prezime;
        this.EMail = email;
        this.Rola = rola;
    }
}
export const korisnikConverter = {
    toFirestore: (korisnik : Korisnik) => {
        return {
          //  IDKorisnika : korisnik.IDKorisnika,
            Ime: korisnik.Ime,
            Prezime: korisnik.Prezime,
            EMail: korisnik.EMail,
            Rola : korisnik.Rola
        }
    },
    fromFirestore: (snapshot: DocumentSnapshot, options:SnapshotOptions) => {
        const data : Korisnik = snapshot.data(options) as Korisnik;
        console.log(data)
        return new Korisnik(snapshot.id, data.Ime, data.Prezime, data.EMail, data.Rola)
    }
}
