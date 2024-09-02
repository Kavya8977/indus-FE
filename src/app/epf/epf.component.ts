import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Epf } from '../epf';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DeletedataComponent } from '../deletedata/deletedata.component';

@Component({
  selector: 'app-epf',
  templateUrl: './epf.component.html',
  styleUrls: ['./epf.component.css']
})
export class EpfComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;
epfdetails: Epf[];
selectedEpfId: number | null = null;
decryptedPassword: string | null = null;
  dataSource = new MatTableDataSource<Epf>();

  @ViewChild(MatPaginator) paginator: MatPaginator;



constructor(private service:AuthServiceService,private router:Router, public dialog: MatDialog){}

ngOnInit(): void {
  this.epfList();
  const data=JSON.parse(localStorage.getItem('adminData'));
  if(data.role==='ADMIN'){
    this.isAdmin=true;
  }else{
    this.isAdmin=false;
  }
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  epfList() {
    const companyId = localStorage.getItem('companyid');
    this.service.getAllEpf(+companyId).subscribe(data=>{
      this.epfdetails=data;
      console.log(data);
    });
  }

  updateEpf(id:number){
    this.router.navigate(['/updateepf',id]);
  }
  
  deleteEpf(id: number): void {
    const dialogRef = this.dialog.open(DeletedataComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteEpf(id).subscribe(
          data => {
            console.log(data);
            this.epfList(); 
            this.router.navigate(['/epflist']); 
          },
          error => console.log(error)
        );
        console.log(`EPF with ID ${id} deleted.`);
      }
    });
  }
  
  epfView(id:number){
    this.router.navigate(['/viewepf',id]);
  }

  getpassword(id:number) {
    this.service.decryptgst(id).subscribe(
      (data: string) => {
        this.selectedEpfId = id;
        this.decryptedPassword = data;
      },
      error => {
        console.error('Error decrypting password:', error);
      }
    );
  }

  clearDecryptedPassword() {
    this.selectedEpfId = null;
    this.decryptedPassword = null;
  }

}