import { Component, ViewChild } from '@angular/core';
import { Gst } from '../gst';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { DeletedataComponent } from '../deletedata/deletedata.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.css']
})
export class GstComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;
gstdetails: Gst[];
selectedGstId: number | null = null;
decryptedPassword: string | null = null;
// displayedColumns: string[] = ['gstNumber', 'userid', 'password', 'edit', 'delete', 'view'];
dataSource = new MatTableDataSource<Gst>();
@ViewChild(MatPaginator) paginator: MatPaginator;



constructor(private service:AuthServiceService,private router:Router, public dialog: MatDialog){}

ngOnInit(): void {
  this.gstList();
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
  gstList() {
    const companyId = localStorage.getItem('companyid');
    this.service.getAllGst(+companyId).subscribe(data=>{
      this.gstdetails=data;
      console.log(data);
    });
  }

  updateGst(id:number){
    this.router.navigate(['/updategst',id]);
  }
  
  deleteGst(id: number): void {
    const dialogRef = this.dialog.open(DeletedataComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteGst(id).subscribe(
          data => {
            console.log(data);
            this.gstList(); 
            this.router.navigate(['/gstlist']);
          },
          error => console.log(error)
        );
        console.log(`GST with ID ${id} deleted.`);
      }
    });
  }
  
  gstView(id:number){
    this.router.navigate(['/viewgst',id]);
  }
  getpassword(id:number) {
    this.service.decryptgst(id).subscribe(
      (data: string) => {
        this.selectedGstId = id;
        this.decryptedPassword = data;
      },
      error => {
        console.error('Error decrypting password:', error);
      }
    );
  }

  clearDecryptedPassword() {
    this.selectedGstId = null;
    this.decryptedPassword = null;
  }

}
