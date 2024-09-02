import { Component } from '@angular/core';
import { Mca } from '../mca';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-viewmca',
  templateUrl: './viewmca.component.html',
  styleUrls: ['./viewmca.component.css']
})
export class ViewmcaComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  mca:Mca;
  id: number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.authService.fetchMcaById(this.id).subscribe(data=>{
      this.mca=data;
      console.log(data);
    },
    error=>console.log(error));
  }


}
