import { Component } from '@angular/core';
import { Bank } from '../bank';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-viewbank',
  templateUrl: './viewbank.component.html',
  styleUrls: ['./viewbank.component.css']
})
export class ViewbankComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  bank:Bank;
  id: number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.authService.fetchBankById(this.id).subscribe(data=>{
      this.bank=data;
      console.log(data);
    },
    error=>console.log(error));
  }
}
