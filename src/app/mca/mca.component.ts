import { Component, ViewChild } from '@angular/core';
import { Mca } from '../mca';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletedataComponent } from '../deletedata/deletedata.component';

@Component({
  selector: 'app-mca',
  templateUrl: './mca.component.html',
  styleUrls: ['./mca.component.css']
})
export class McaComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;
mcadetails: Mca[];
selectedv2McaId: number | null = null;
selectedv3McaId: number | null = null;
decryptedv2Password: string | null = null;
decryptedv3Password: string | null = null;
// displayedColumns: string[] = ['gstNumber', 'userid', 'password', 'edit', 'delete', 'view'];
dataSource = new MatTableDataSource<Mca>();
@ViewChild(MatPaginator) paginator: MatPaginator;



constructor(private service:AuthServiceService,private router:Router, public dialog: MatDialog){}

ngOnInit(): void {
  this.mcaList();
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
  mcaList() {
    const companyId = localStorage.getItem('companyid');
    this.service.getAllMca(+companyId).subscribe(data=>{
      this.mcadetails=data;
      console.log(data);
    });
  }

  updateMca(id:number){
    this.router.navigate(['/updatemca',id]);
  }
  
  deleteMca(id: number): void {
    const dialogRef = this.dialog.open(DeletedataComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
         
        this.service.deleteMca(id).subscribe(
          data => {
            console.log(data);
            this.mcaList();  
            this.router.navigate(['/mcalist']);  
          },
          error => console.log(error)
        );
        console.log(`MCA with ID ${id} deleted.`);
      }
    });
  }
  
  mcaView(id:number){
    this.router.navigate(['/viewmca',id]);
  }
  getv2password(id:number) {
    this.service.decryptMcV2(id).subscribe(
      (data: string) => {
        this.selectedv2McaId = id;
        this.decryptedv2Password = data;
      },
      error => {
        console.error('Error decrypting password:', error);
      }
    );
  }

  getv3password(id:number) {
    this.service.decryptMcV3(id).subscribe(
      (data: string) => {
        this.selectedv3McaId = id;
        this.decryptedv3Password = data;
      },
      error => {
        console.error('Error decrypting password:', error);
      }
    );
  }

  clearDecryptedv2Password() {
    this.selectedv2McaId = null;
    this.decryptedv2Password = null;
  }
  clearDecryptedv3Password() {
    this.selectedv3McaId = null;
    this.decryptedv3Password = null;
  }

}
