import { Component } from '@angular/core';
import { Kmp } from '../kmp';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-updatekmp',
  templateUrl: './updatekmp.component.html',
  styleUrls: ['./updatekmp.component.css']
})
export class UpdatekmpComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  kmp:Kmp;
  id: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.kmp=new Kmp();
  this.authService.fetchKmpById(this.id).subscribe(data=>{
    this.kmp=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updateKmp(this.id,this.kmp).subscribe(data=>{
      this.router.navigate(['/kmplist']);
    },error=>console.log(error));
  }
}
