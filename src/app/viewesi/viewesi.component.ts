import { Component } from '@angular/core';
import { Esi } from '../esi';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-viewesi',
  templateUrl: './viewesi.component.html',
  styleUrls: ['./viewesi.component.css']
})
export class ViewesiComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  esi:Esi;
  id: number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.authService.fetchEsiById(this.id).subscribe(data=>{
      this.esi=data;
      console.log(data);
    },
    error=>console.log(error));
  }


}
