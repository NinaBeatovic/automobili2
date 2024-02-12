import { Injectable, inject } from '@angular/core';
import { Firestore, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Vozilo, voziloConverter } from '../../models/Vozilo/vozilo';

@Injectable({
  providedIn: 'root'
})
export class VoziloServiceService {
  firestore: Firestore = inject(Firestore);

  constructor() {

  }

  async getVozila(): Promise<Vozilo[]> {
    const vozilaCollection = await getDocs(collection(this.firestore, 'vozila').withConverter(voziloConverter));
    var vozila: Vozilo[] = [];

    vozilaCollection.forEach((vozilo) => {
      vozila.push(vozilo.data());
    });

    return vozila;
  }

  async getVoziloById(voziloID: string) : Promise<Vozilo> {
    const voziloDoc = await getDoc(doc(this.firestore, 'vozila', voziloID).withConverter(voziloConverter));

    return voziloDoc.data() as Vozilo;
  }

  async editVozilo(vozilo: Vozilo) : Promise<void> {
    const voziloDoc = doc(this.firestore, 'vozila', vozilo.IDVozila as string).withConverter(voziloConverter);

    if (vozilo.korisnikRezervisao == undefined) {
      vozilo.korisnikRezervisao = "";
    }

    await setDoc(voziloDoc, vozilo);
    
  }

  async deleteVozilo(idVozila: string) : Promise<void> {
    const voziloDoc = doc(this.firestore, 'vozila', idVozila).withConverter(voziloConverter);

    await deleteDoc(voziloDoc);
  }

  async createVozilo(vozilo: Vozilo) : Promise<void> {
    const voziloDoc = doc(this.firestore, 'vozila', vozilo.IDVozila as string).withConverter(voziloConverter);

    await setDoc(voziloDoc, vozilo);
    
  }

  // Set korisnikRezervisao to user id
  async rezervisiVozilo(vozilo: Vozilo, userID: string) : Promise<void> {
    const voziloDoc = doc(this.firestore, 'vozila', vozilo.IDVozila as string).withConverter(voziloConverter);

    vozilo.korisnikRezervisao = userID;

    console.log(vozilo);

    await setDoc(voziloDoc, vozilo);
  }

  // Removes korisnikRezervisao from vozilo
  async otkaziRezervaciju(vozilo: Vozilo) : Promise<void> {
    const voziloDoc = doc(this.firestore, 'vozila', vozilo.IDVozila as string).withConverter(voziloConverter);

    vozilo.korisnikRezervisao = "";

    await setDoc(voziloDoc, vozilo);
  }
}
