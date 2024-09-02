import { Component, ViewChild } from '@angular/core';
import { Tds } from '../tds';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletedataComponent } from '../deletedata/deletedata.component';

@Component({
  selector: 'app-tds',
  templateUrl: './tds.component.html',
  styleUrls: ['./tds.component.css']
})
export class TdsComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;
tdsdetails: Tds[];
selectedTdsId: number | null = null;
decryptedPassword: string | null = null;
// displayedColumns: string[] = ['gstNumber', 'userid', 'password', 'edit', 'delete', 'view'];
dataSource = new MatTableDataSource<Tds>();
@ViewChild(MatPaginator) paginator: MatPaginator;



constructor(private service:AuthServiceService,private router:Router, public dialog: MatDialog){}

ngOnInit(): void {
  this.tdsList();
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
  tdsList() {
    const companyId = localStorage.getItem('companyid');
    this.service.getAllTds(+companyId).subscribe(data=>{
      this.tdsdetails=data;
      console.log(data);
    });
  }

  updateTds(id:number){
    this.router.navigate(['/updatetds',id]);
  }
  
  deleteTds(id: number): void {
    const dialogRef = this.dialog.open(DeletedataComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteTds(id).subscribe(
          data => {
            console.log(data);
            this.tdsList(); 
            this.router.navigate(['/tdslist']); 
          },
          error => console.log(error)
        );
        console.log(`TDS with ID ${id} deleted.`);
      }
    });
  }
  
  tdsView(id:number){
    this.router.navigate(['/viewtds',id]);
  }
  getpassword(id:number) {
    this.service.decryptTds(id).subscribe(
      (data: string) => {
        this.selectedTdsId = id;
        this.decryptedPassword = data;
      },
      error => {
        console.error('Error decrypting password:', error);
      }
    );
  }

  clearDecryptedPassword() {
    this.selectedTdsId = null;
    this.decryptedPassword = null;
  }


}
