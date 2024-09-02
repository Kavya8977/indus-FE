import { Component } from '@angular/core';
import { Gst } from '../gst';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-viewgst',
  templateUrl: './viewgst.component.html',
  styleUrls: ['./viewgst.component.css']
})
export class ViewgstComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  gst:Gst;
  id: number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.authService.fetchGstById(this.id).subscribe(data=>{
      this.gst=data;
      console.log(data);
    },
    error=>console.log(error));
  }


}
