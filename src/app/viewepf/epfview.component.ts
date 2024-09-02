import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Epf } from '../epf';

@Component({
  selector: 'app-epfview',
  templateUrl: './epfview.component.html',
  styleUrls: ['./epfview.component.css']
})
export class EpfviewComponent implements OnInit{
  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  epf:Epf;
  id: number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.authService.fetchEpfById(this.id).subscribe(data=>{
      this.epf=data;
      console.log(data);
    },
    error=>console.log(error));
  }

}
