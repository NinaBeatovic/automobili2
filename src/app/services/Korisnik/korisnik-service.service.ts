import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Korisnik, korisnikConverter } from '../../models/Korisnik/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikServiceService {
  firestore: Firestore = inject(Firestore);
  auth: Auth = inject(Auth);

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

  async deleteKorisnik(korisnik: Korisnik) : Promise<void> {
    const korisnikDoc = doc(this.firestore, 'korisnici', korisnik.IDKorisnika as string).withConverter(korisnikConverter);

    await setDoc(korisnikDoc, korisnik);
  }

  async loginKorisnik(email: string, password: string) : Promise<boolean> {
    return signInWithEmailAndPassword(this.auth, email, password).then((res) => {
      console.log(res)
      return true;
    }).catch(() => {
      return false;
    });
  }

  async registerKorisnik(email: string, password: string, ime: string, prezime: string) : Promise<boolean> {
    console.log(email, password, ime, prezime)
    return createUserWithEmailAndPassword(this.auth, email, password).then(async () => {
      var korisnikID: string = this.auth.currentUser?.uid as string;

      console.log(korisnikID)
  
      const korisnikDoc = doc(this.firestore, 'korisnici', korisnikID).withConverter(korisnikConverter);
  
      var korisnik: Korisnik = {
        IDKorisnika: korisnikID,
        EMail: email,
        Ime: ime,
        Prezime: prezime,
        Rola: 'kupac'
      };
  
      await setDoc(korisnikDoc, korisnik);

      return true;
    }).catch(() => {
      return false;
    });
  }

  async logoutKorisnik() : Promise<void> {
    await this.auth.signOut();
  }

  async getTrenutniKorisnik() : Promise<Korisnik> {
    var korisnikID: string = this.auth.currentUser?.uid as string;
    const korisnikDoc = await getDoc(doc(this.firestore, 'korisnici', korisnikID).withConverter(korisnikConverter));

    return korisnikDoc.data() as Korisnik;
  }

  async updateTrenutniKorisnik(korisnik: Korisnik) : Promise<void> {
    const korisnikDoc = doc(this.firestore, 'korisnici', korisnik.IDKorisnika as string).withConverter(korisnikConverter);

    await updateDoc(korisnikDoc, korisnik);
  }

  // Get if user is logged in
  async getTrenutniKorisnikStatus() : Promise<boolean> {
    var korisnikID: string = this.auth.currentUser?.uid as string;

    if (korisnikID == null) {
      return false;
    }

    return true;
  }

  // Get if korisnik is radnik in database
  async getTrenutniKorisnikRadnikStatus() : Promise<boolean> {
    var korisnikID: string = this.auth.currentUser?.uid as string;
    if (korisnikID == null) {
      return false;
    }
    const korisnikDoc = await getDoc(doc(this.firestore, 'korisnici', korisnikID).withConverter(korisnikConverter));

    if (korisnikDoc.data()?.Rola == 'radnik') {
      return true;
    }

    return false;
  }

  // Get if korisnik is direktor in database
  async getTrenutniKorisnikDirektorStatus() : Promise<boolean> {
    var korisnikID: string = this.auth.currentUser?.uid as string;
    if (korisnikID == null) {
      return false;
    }
    const korisnikDoc = await getDoc(doc(this.firestore, 'korisnici', korisnikID).withConverter(korisnikConverter));

    if (korisnikDoc.data()?.Rola == 'direktor') {
      return true;
    }

    return false;
  }
}
