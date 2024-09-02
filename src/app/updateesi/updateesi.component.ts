import { Component } from '@angular/core';
import { Esi } from '../esi';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-updateesi',
  templateUrl: './updateesi.component.html',
  styleUrls: ['./updateesi.component.css']
})
export class UpdateesiComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  esi:Esi;
  id: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.esi=new Esi();
  this.authService.fetchEsiById(this.id).subscribe(data=>{
    this.esi=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updateEsi(this.id,this.esi).subscribe(data=>{
      this.router.navigate(['/esilist']);
    },error=>console.log(error));
  }

}
