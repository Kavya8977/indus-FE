import { Component } from '@angular/core';
import { Incometax } from '../incometax';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-updateincometax',
  templateUrl: './updateincometax.component.html',
  styleUrls: ['./updateincometax.component.css']
})
export class UpdateincometaxComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  tax:Incometax;
  id: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.tax=new Incometax();
  this.authService.fetchIncometaxById(this.id).subscribe(data=>{
    this.tax=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updateIncometax(this.id,this.tax).subscribe(data=>{
      this.router.navigate(['/incometaxlist']);
    },error=>console.log(error));
  }

}
