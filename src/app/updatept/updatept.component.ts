import { Component } from '@angular/core';
import { Pt } from '../pt';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-updatept',
  templateUrl: './updatept.component.html',
  styleUrls: ['./updatept.component.css']
})
export class UpdateptComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  pt:Pt;
  id: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.pt=new Pt();
  this.authService.fetchPtById(this.id).subscribe(data=>{
    this.pt=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updatePt(this.id,this.pt).subscribe(data=>{
      this.router.navigate(['/ptlist']);
    },error=>console.log(error));
  }
}
