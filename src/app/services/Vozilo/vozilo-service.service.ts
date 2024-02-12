import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
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

    await setDoc(voziloDoc, vozilo);
    
   }
}
