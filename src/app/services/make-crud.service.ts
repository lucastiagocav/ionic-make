import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MakeCrudService {
  constructor(private firestone: AngularFirestore) { }

  read_Students() {
    return this.firestone.collection('Students').snapshotChanges();
  }

  delete_Student(id: any) {
    this.firestone.doc('Students/' + id).delete();
  }

  login(form): Observable<any>{
    return form;
  }

  cadastrar(form): Observable<any>{
    return form;
  }
}