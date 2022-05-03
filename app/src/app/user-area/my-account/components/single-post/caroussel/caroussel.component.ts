import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent implements OnInit {

  @Input() images!: number[];
  constructor() { }

  ngOnInit(): void {
  }

}
