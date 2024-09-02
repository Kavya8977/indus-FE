import { Component } from '@angular/core';
import { Tds } from '../tds';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-viewtds',
  templateUrl: './viewtds.component.html',
  styleUrls: ['./viewtds.component.css']
})
export class ViewtdsComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  tds:Tds;
  id: number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.authService.fetchTdsById(this.id).subscribe(data=>{
      this.tds=data;
      console.log(data);
    },
    error=>console.log(error));
  }

}
