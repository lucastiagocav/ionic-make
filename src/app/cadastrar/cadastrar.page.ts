import { Component, OnInit } from '@angular/core';
import { MakeCrudService } from '../services/make-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  constructor(private makeService: MakeCrudService, private router: Router) { }

  ngOnInit() {
  }

  register(form) {
    this.makeService.cadastrar(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }

}
