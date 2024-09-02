import { Component, ViewChild } from '@angular/core';
import { Kmp } from '../kmp';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletedataComponent } from '../deletedata/deletedata.component';


@Component({
  selector: 'app-kmp',
  templateUrl: './kmp.component.html',
  styleUrls: ['./kmp.component.css']
})
export class KmpComponent {
  collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  } 
  
  searchQuery: string='';
  isAdmin: boolean=false;
  kmpdetails: Kmp[];
  selectedkmpId: number | null = null;
  decryptedPassword: string | null = null;
  // displayedColumns: string[] = ['name', 'eamil', 'userid', 'password', 'edit', 'delete', 'view'];
    dataSource = new MatTableDataSource<Kmp>();
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  
  constructor(private service:AuthServiceService,private router:Router, public dialog: MatDialog){}
  
  ngOnInit(): void {
    this.kmpList();
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
    kmpList() {
      const companyId = localStorage.getItem('companyid');
      this.service.getAllKmp(+companyId).subscribe(data=>{
        this.kmpdetails=data;
        console.log(data);
      });
    }
  
    updateKmp(id:number){
      this.router.navigate(['/updatekmp',id]);
    }
    
    deleteKmp(id: number): void {
      const dialogRef = this.dialog.open(DeletedataComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.deleteKmp(id).subscribe(
            data => {
              console.log(data); 
              this.kmpList(); 
              this.router.navigate(['/kmplist']); 
            },
            error => console.log(error) 
          );
          console.log(`KMP with ID ${id} deleted.`);
        }
      });
    }
    kmpView(id:number){
      this.router.navigate(['/viewkmp',id]);
    }

    getpassword(id:number) {
      this.service.decryptkmp(id).subscribe(
        (data: string) => {
          this.selectedkmpId = id;
          this.decryptedPassword = data;
        },
        error => {
          console.error('Error decrypting password:', error);
        }
      );
    }
  
    clearDecryptedPassword() {
      this.selectedkmpId = null;
      this.decryptedPassword = null;
    }
  
}
