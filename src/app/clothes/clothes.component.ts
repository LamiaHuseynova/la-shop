import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClothesDialogComponent } from '../clothes-dialog/clothes-dialog.component';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent {
  clothes=[
    {title: "Dresses", article: "Lorem Ipsum", img_path: "../../assets/images/dresses.PNG" },
    {title: "Suits", article: "Lorem Ipsum", img_path: "../../assets/images/suits.JPG" },
    {title: "Bags", article: "Lorem Ipsum", img_path: "../../assets/images/bags.PNG" },
    {title: "Coats", article: "Lorem Ipsum", img_path: "../../assets/images/coats.PNG" },
    {title: "Shoes", article: "Lorem Ipsum", img_path: "../../assets/images/shoes.PNG" },
    {title: "Accessories", article: "Lorem Ipsum", img_path: "../../assets/images/accessories.JPG" },
    {title: "Hats", article: "Lorem Ipsum", img_path: "../../assets/images/hats.PNG" },
    {title: "Sports", article: "Lorem Ipsum", img_path: "../../assets/images/sports.JPG" },
  ]
  constructor(public dialog: MatDialog) {

  }

openDialog(i: number){
  console.log(this.clothes[i]);

  let dialogRef = this.dialog.open(ClothesDialogComponent, {
    height: '400px',
    width: '600px',
    data: this.clothes[i]
  });
}
}