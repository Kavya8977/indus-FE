import { Component } from '@angular/core';
import { Incometax } from '../incometax';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-viewincometax',
  templateUrl: './viewincometax.component.html',
  styleUrls: ['./viewincometax.component.css']
})
export class ViewincometaxComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  tax:Incometax;
  id: number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.authService.fetchIncometaxById(this.id).subscribe(data=>{
      this.tax=data;
      console.log(data);
    },
    error=>console.log(error));
  }


}
