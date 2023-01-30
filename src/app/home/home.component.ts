import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClothesDialogComponent } from '../clothes-dialog/clothes-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  clothes=[
    {title: "Dresses", img_path: "../../assets/images/dresses.PNG", article: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur omnis magnam reprehenderit possimus minima officia vel beatae distinctio impedit doloremque."  },
    {title: "Suits", img_path: "../../assets/images/suits.JPG", article: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur omnis magnam reprehenderit possimus minima officia vel beatae distinctio impedit doloremque." },
    {title: "Bags", img_path: "../../assets/images/bags.PNG", article: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur omnis magnam reprehenderit possimus minima officia vel beatae distinctio impedit doloremque." },
    {title: "Coats", img_path: "../../assets/images/coats.PNG", article: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur omnis magnam reprehenderit possimus minima officia vel beatae distinctio impedit doloremque." },
    {title: "Shoes", img_path: "../../assets/images/shoes.PNG", article: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur omnis magnam reprehenderit possimus minima officia vel beatae distinctio impedit doloremque." },
    {title: "Accessories", img_path: "../../assets/images/accessories.JPG", article: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur omnis magnam reprehenderit possimus minima officia vel beatae distinctio impedit doloremque." },
    {title: "Hats", img_path: "../../assets/images/hats.PNG", article: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur omnis magnam reprehenderit possimus minima officia vel beatae distinctio impedit doloremque." },
    {title: "Sports", img_path: "../../assets/images/sports.JPG", article: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur omnis magnam reprehenderit possimus minima officia vel beatae distinctio impedit doloremque." },
  ]

  
  constructor(public dialog: MatDialog) {

  }

  
  openDialog(i: number){

  
    let dialogRef = this.dialog.open(ClothesDialogComponent, {
      height: '400px',
      width: '600px',
      data: this.clothes[i]
    });
  }
}
