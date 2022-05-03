import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SinglePostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { value: string },
  ) {}

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
