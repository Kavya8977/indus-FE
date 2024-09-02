import { Component } from '@angular/core';
import { Director } from '../director';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-updatedirectors',
  templateUrl: './updatedirectors.component.html',
  styleUrls: ['./updatedirectors.component.css']
})
export class UpdatedirectorsComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  directors:Director;
  id: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.directors=new Director();
  this.authService.fetchDirectorById(this.id).subscribe(data=>{
    this.directors=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updateDirector(this.id,this.directors).subscribe(data=>{
      this.router.navigate(['/directorlist']);
    },error=>console.log(error));
  }

}
