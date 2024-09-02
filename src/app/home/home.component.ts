import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Organization } from '../organization';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
collapsed = false;
company: Organization;

toggleSidebar() {
  this.collapsed = !this.collapsed;
}
constructor(private route: ActivatedRoute, private router: Router, private service:AuthServiceService) {}

ngOnInit() {
  const id = +this.route.snapshot.paramMap.get('id')!;
  this.service.fetchOrganizationById(id).subscribe((data: Organization) => {
    this.company = data;
  });
}
}
