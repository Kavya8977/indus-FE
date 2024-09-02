import { Component } from '@angular/core';
import { Bank } from '../bank';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-updatebank',
  templateUrl: './updatebank.component.html',
  styleUrls: ['./updatebank.component.css']
})
export class UpdatebankComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  bank:Bank;
  id: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.bank=new Bank();
  this.authService.fetchBankById(this.id).subscribe(data=>{
    this.bank=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    console.log(this.bank);
    
    this.authService.updateBank(this.id,this.bank).subscribe(data=>{
      this.router.navigate(['/banklist']);
    },error=>console.log(error));
  }

}
