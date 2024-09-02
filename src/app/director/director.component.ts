import { Component, ViewChild } from '@angular/core';
import { Director } from '../director';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletedataComponent } from '../deletedata/deletedata.component';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent {

  collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  } 

  searchQuery: string = '';
  isAdmin: boolean = false;
  directordetails: Director[];
  displayedColumns: string[] = ['estid', 'panno', 'niccode', 'password', 'edit', 'delete', 'view'];
  dataSource = new MatTableDataSource<Director>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: AuthServiceService, private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.Director();
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

  Director() {
    const companyId = localStorage.getItem('companyid');
    this.service.getAllDirector(+companyId).subscribe(data => {
      this.directordetails = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  updateDirector(id: number) {
    this.router.navigate(['/updatedirectors', id]);
  }

  deleteDirector(id: number): void {
    const dialogRef = this.dialog.open(DeletedataComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteDirector(id).subscribe(
          data => {
            console.log(data); 
            this.Director(); 
            this.router.navigate(['/directorlist']); 
          },
          error => console.log(error)
        );
        console.log(`Director with ID ${id} deleted.`);
      }
    });
  }

  directorView(id: number) {
    this.router.navigate(['/viewdirectors', id]);
  }
}
