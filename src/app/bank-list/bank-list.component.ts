import { Component, ViewChild } from '@angular/core';
import { Bank } from '../bank';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DeletedataComponent } from '../deletedata/deletedata.component';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent { 


  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;
bankdetails:Bank[];
selectedBanLPkId: number | null = null;
decryptedLPPassword: string | null = null;
selectedBankTRId:number | null = null;
decryptedTRPassword: string | null = null;


dataSource = new MatTableDataSource<Bank>();
@ViewChild(MatPaginator) paginator: MatPaginator;

constructor(private service:AuthServiceService,private router:Router, public dialog: MatDialog){}

ngOnInit(): void {
  this.bankList();
  // const data=JSON.parse(localStorage.getItem('adminData'));
  // if(data.role==='ADMIN'){
  //   this.isAdmin=true;
  // }else{
  //   this.isAdmin=false;
  // }
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  bankList() {
    const companyId = localStorage.getItem('companyid'); // Get the companyid from local storage
    
  if (companyId) {
    this.service.fetchBankByCompanyId(+companyId).subscribe(data => {
      this.bankdetails = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });
  } else {
    console.error('Company ID is not available in local storage.');
  }
  }

  updateBank(id:number){
    this.router.navigate(['/updatebank',id]);
  }
  
  deleteBank(id: number): void {
    const dialogRef = this.dialog.open(DeletedataComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
                  this.service.deleteBank(id).subscribe(
          data => {
            console.log(data);
            this.bankList();
            this.router.navigate(['/banklist']);
          },
          error => console.log(error)
        );
        console.log(`Bank with ID ${id} deleted.`);
      }
    });
  }
  
  bankView(id:number){
    this.router.navigate(['/viewbank',id]);
  }

  getpassword(id:number) {
    this.service.decrypt(id).subscribe(
      (data: string) => {
        this.selectedBanLPkId = id;
        this.decryptedLPPassword = data;
      },
      error => {
        console.error('Error decrypting password:', error);
      }
    );
  }

  clearDecryptedPassword() {
    this.selectedBanLPkId = null;
    this.decryptedLPPassword = null;
  }

  getTRpassword(id:number) {
    this.service.decryptTP(id).subscribe(
      (data: string) => {
        this.selectedBankTRId = id;
        this.decryptedTRPassword = data;
      },
      error => {
        console.error('Error decrypting password:', error);
      }
    );
  }

  clearDecryptedTRPassword() {
    this.selectedBankTRId = null;
    this.decryptedTRPassword = null;
  }

}

