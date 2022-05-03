import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SinglePostComponent } from '../../../my-account/components/single-post/single-post.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  @Input() mine: boolean = false;
  tab: number[] = [1, 2, 3, 4, 5];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onItemClick(): void{
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SinglePostComponent, {
      width: '65%',
      data: { value: this.tab },
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}

