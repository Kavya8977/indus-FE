import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletedata',
  templateUrl: './deletedata.component.html',
  styleUrls: ['./deletedata.component.css']
})
export class DeletedataComponent {
constructor(public dialogRef: MatDialogRef<DeletedataComponent>) { }

  onDelete(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
