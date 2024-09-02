import { Component } from '@angular/core';
import { Gst } from '../gst';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-updategst',
  templateUrl: './updategst.component.html',
  styleUrls: ['./updategst.component.css']
})
export class UpdategstComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  gst:Gst;
  id: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.gst=new Gst();
  this.authService.fetchGstById(this.id).subscribe(data=>{
    this.gst=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updateGst(this.id,this.gst).subscribe(data=>{
      this.router.navigate(['/gstlist']);
    },error=>console.log(error));
  }

}
