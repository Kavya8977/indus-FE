import { Component } from '@angular/core';
import { Director } from '../director';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-viewdirectors',
  templateUrl: './viewdirectors.component.html',
  styleUrls: ['./viewdirectors.component.css']
})
export class ViewdirectorsComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  directors:Director;
  id: number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.authService.fetchDirectorById(this.id).subscribe(data=>{
      this.directors=data;
      console.log(data);
    },
    error=>console.log(error));
  }


}
