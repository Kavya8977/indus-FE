import { Component, OnInit } from '@angular/core';
import { Epf } from '../epf';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-update-epf',
  templateUrl: './update-epf.component.html',
  styleUrls: ['./update-epf.component.css']
})
export class UpdateEpfComponent implements OnInit {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  epf:Epf;
  id: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.epf=new Epf();
  this.authService.fetchEpfById(this.id).subscribe(data=>{
    this.epf=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updateEpf(this.id,this.epf).subscribe(data=>{
      this.router.navigate(['/epflist']);
    },error=>console.log(error));
  }


}
