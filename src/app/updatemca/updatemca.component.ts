import { Component } from '@angular/core';
import { Mca } from '../mca';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-updatemca',
  templateUrl: './updatemca.component.html',
  styleUrls: ['./updatemca.component.css']
})
export class UpdatemcaComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  mca:Mca;
  id: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.mca=new Mca();
  this.authService.fetchMcaById(this.id).subscribe(data=>{
    this.mca=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updateMca(this.id,this.mca).subscribe(data=>{
      this.router.navigate(['/mcalist']);
    },error=>console.log(error));
  }

}
