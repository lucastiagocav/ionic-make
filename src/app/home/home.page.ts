import { Component } from '@angular/core';
import { MakeCrudService } from '../services/make-crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  students: any;
  constructor(private makeService: MakeCrudService) { }
  ngOnInit() {
    this.makeService.read_Students().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      });
    });
  }
  RemoveRecord(rowID: any) {
    this.makeService.delete_Student(rowID);
  }
}
