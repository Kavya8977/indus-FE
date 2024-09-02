import { Component, ViewChild } from '@angular/core';
import { Incometax } from '../incometax';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { DeletedataComponent } from '../deletedata/deletedata.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-incometax',
  templateUrl: './incometax.component.html',
  styleUrls: ['./incometax.component.css']
})
export class IncometaxComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;
incometaxdetails: Incometax[];
selectedincometaxId: number | null = null;
decryptedPassword: string | null = null;
// displayedColumns: string[] = ['gstNumber', 'userid', 'password', 'edit', 'delete', 'view'];
  dataSource = new MatTableDataSource<Incometax>();

  @ViewChild(MatPaginator) paginator: MatPaginator;



constructor(private service:AuthServiceService,private router:Router, public dialog:MatDialog){}

ngOnInit(): void {
  this.incometaxList();
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
  incometaxList() {
    const companyId = localStorage.getItem('companyid');
    this.service.getAllIncometax(+companyId).subscribe(data=>{
      this.incometaxdetails=data;
      console.log(data);
    });
  }

  updateIncometax(id:number){
    this.router.navigate(['/updateincometax',id]);
  }
  
  deleteIncometax(id: number): void {
    const dialogRef = this.dialog.open(DeletedataComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteIncometax(id).subscribe(
          data => {
            console.log(data);
            this.incometaxList();  
            this.router.navigate(['/incometaxlist']); 
          },
          error => console.log(error)
        );
        console.log(`Income Tax with ID ${id} deleted.`);
      }
    });
  }
  
  incometaxView(id:number){
    this.router.navigate(['/viewincometax',id]);
  }
  getpassword(id:number) {
    this.service.decryptincometax(id).subscribe(
      (data: string) => {
        this.selectedincometaxId = id;
        this.decryptedPassword = data;
      },
      error => {
        console.error('Error decrypting password:', error);
      }
    );
  }

  clearDecryptedPassword() {
    this.selectedincometaxId = null;
    this.decryptedPassword = null;
  }

}
