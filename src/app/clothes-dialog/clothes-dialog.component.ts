import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-clothes-dialog',
  templateUrl: './clothes-dialog.component.html',
  styleUrls: ['./clothes-dialog.component.scss']
})
export class ClothesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ClothesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    data.img_path = "assets/images/" + data.img_path;
   }

}

