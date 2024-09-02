import { Component, OnInit, ViewChild } from '@angular/core';
import { Organization } from '../organization';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletedataComponent } from '../deletedata/deletedata.component';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  } 

  searchQuery: string = '';
  isAdmin: boolean = false;
  organizationdetails: Organization[];
  // displayedColumns: string[] = ['companyid', 'companyname', 'email', 'password', 'edit', 'delete', 'view'];
  dataSource = new MatTableDataSource<Organization>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: AuthServiceService, private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.Organization();
    // const data = JSON.parse(localStorage.getItem('adminData'));
    // if (data.role === 'ADMIN') {
    //   this.isAdmin = true;
    // } else {
    //   this.isAdmin = false;
    // }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  Organization() {
    this.service.getAllOrganization().subscribe(data => {
      console.log(data);
      
      this.organizationdetails = data;
      // this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  updateOrganization(companyid: number) {
    this.router.navigate(['/updateorg', companyid]);
  }

  deleteOrganization(companyid: number): void {
    const dialogRef = this.dialog.open(DeletedataComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteOrganization(companyid).subscribe(data => {
             console.log(data);
             this.Organization();
             this.router.navigate(['/orglist']);
            },
            error => console.log(error));
            console.log(`Company with ID ${companyid} deleted.`);
      }
    });
     
  }

  organizationView(companyid: number) {
    this.router.navigate(['/vieworg', companyid]);
  }
}
