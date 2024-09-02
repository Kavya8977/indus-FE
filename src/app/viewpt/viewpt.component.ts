import { Component } from '@angular/core';
import { Pt } from '../pt';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-viewpt',
  templateUrl: './viewpt.component.html',
  styleUrls: ['./viewpt.component.css']
})
export class ViewptComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  pt:Pt;
  id: number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.authService.fetchPtById(this.id).subscribe(data=>{
      this.pt=data;
      console.log(data);
    },
    error=>console.log(error));
  }
}
