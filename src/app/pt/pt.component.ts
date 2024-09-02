import { Component, OnInit, ViewChild } from '@angular/core';
import { Pt } from '../pt';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletedataComponent } from '../deletedata/deletedata.component';

@Component({
  selector: 'app-pt',
  templateUrl: './pt.component.html',
  styleUrls: ['./pt.component.css']
})
export class PtComponent implements OnInit {
  collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
  searchQuery: string = '';
  isAdmin: boolean = false;
  ptdetails: Pt[];
  selectedptId: number | null = null;
  decryptedPassword: string | null = null;
  // displayedColumns: string[] = ['companyid', 'companyname', 'email', 'password', 'edit', 'delete', 'view'];
  dataSource = new MatTableDataSource<Pt>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: AuthServiceService, private router: Router, public dialog: MatDialog) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.Ptax();
    // const data=JSON.parse(localStorage.getItem('adminData'));
    // if(data.role==='ADMIN'){
    //   this.isAdmin=true;
    // }else{
    //   this.isAdmin=false;
    // }
  }

  Ptax() {
    const companyId = localStorage.getItem('companyid');
      this.service.getAllPt(+companyId).subscribe(data=>{
        this.ptdetails=data;
        console.log(data);
      });
  }

  updatePt(id:number){
    this.router.navigate(['/updatept',id]);
  }
  deletePt(id: number): void {
    const dialogRef = this.dialog.open(DeletedataComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deletePt(id).subscribe(
          data => {
            console.log(data); 
            this.Ptax(); 
            this.router.navigate(['/ptlist']);
          },
          error => console.log(error) 
        );
        console.log(`PT with ID ${id} deleted.`);
      }
    });
  }
  ptView(id:number){
    this.router.navigate(['/viewpt',id]);
  }

  getpassword(id:number) {
    this.service.decryptPt(id).subscribe(
      (data: string) => {
        this.selectedptId = id;
        this.decryptedPassword = data;
      },
      error => {
        console.error('Error decrypting password:', error);
      }
    );
  }

  clearDecryptedPassword() {
    this.selectedptId = null;
    this.decryptedPassword = null;
  }
}