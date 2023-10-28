import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: AngularFirestore) {}

  createDoc(data: any, path: string, id: string) {

    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);

  }
  getCollection() {
    console.log('Quiero ver los instructores');
    this.firestore.collection('/Empresa (Aeroclub)/eTlKHnZSjVbaAsvlluJu/Instructores').get().subscribe((res) => {});
  }

  getId() {
    return this.firestore.createId();
  }


}
