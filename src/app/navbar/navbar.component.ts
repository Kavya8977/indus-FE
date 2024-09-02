import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Organization } from '../organization';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() toggle = new EventEmitter<void>();
  collapsed: boolean = false;
  id=localStorage.getItem('companyid');
  constructor(private router:Router){}

  toggleHeader() {
    this.collapsed=!this.collapsed;
    this.toggle.emit();
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
