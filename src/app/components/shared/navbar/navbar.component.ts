import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public auth: AuthService) {
  }

  ngOnInit() {
  }

  buscarHeroe( termino: string){
    console.log(termino);
    this.router.navigate(['/buscar', termino]);
  }

  ingresar(){
    this.auth.login();
  }

  salir(){
    this.auth.logout();
  }

}
