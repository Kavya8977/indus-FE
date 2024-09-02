import { Component } from '@angular/core';
import { Tds } from '../tds';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-updatetds',
  templateUrl: './updatetds.component.html',
  styleUrls: ['./updatetds.component.css']
})
export class UpdatetdsComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  tds:Tds;
  id: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.tds=new Tds();
  this.authService.fetchTdsById(this.id).subscribe(data=>{
    this.tds=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updateTds(this.id,this.tds).subscribe(data=>{
      this.router.navigate(['/tdslist']);
    },error=>console.log(error));
  }

}
