import { Component, OnInit } from '@angular/core';
import { MakeCrudService } from '../services/make-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private makeService: MakeCrudService, private router: Router) { }

  ngOnInit() {
  }

  login(form) {
    this.makeService.login(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }

}
