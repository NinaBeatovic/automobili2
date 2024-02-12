import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Korisnik, korisnikConverter } from '../../models/Korisnik/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikServiceService {
  firestore: Firestore = inject(Firestore);

  constructor() {

   }

   async getKorisnici(): Promise<Korisnik[]> {
      const korisniciCollection = await getDocs(collection(this.firestore, 'korisnici').withConverter(korisnikConverter));
      var korisnici: Korisnik[] = [];

      korisniciCollection.forEach((korisnik) => {
        korisnici.push(korisnik.data());
      });

      return korisnici;
   }

   async getKorisnikById(IDKorisnika: string) : Promise<Korisnik> {
    const korisnikDoc = await getDoc(doc(this.firestore, 'korisnici', IDKorisnika).withConverter(korisnikConverter));

    return korisnikDoc.data() as Korisnik;
   }

   async editKorisnik(korisnik: Korisnik) : Promise<void> {
    const korisnikDoc = doc(this.firestore, 'korisnici', korisnik.IDKorisnika as string).withConverter(korisnikConverter);

    await setDoc(korisnikDoc, korisnik);
    
   }
}
