import { Component } from '@angular/core';
import { Kmp } from '../kmp';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-viewkmp',
  templateUrl: './viewkmp.component.html',
  styleUrls: ['./viewkmp.component.css']
})
export class ViewkmpComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  kmp:Kmp;
  id: number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.authService.fetchKmpById(this.id).subscribe(data=>{
      this.kmp=data;
      console.log(data);
    },
    error=>console.log(error));
  }


}
