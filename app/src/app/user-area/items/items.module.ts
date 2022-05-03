import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemRoutingModule } from './item-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ItemListForGuestComponent } from './components/item-list-for-guest/item-list-for-guest.component';
import { ItemsListComponent } from './components/items-list/items-list.component';




@NgModule({
  declarations: [
    ItemListForGuestComponent,
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    MatButtonModule
  ],
  exports: [
    ItemsListComponent
  ]
})
export class ItemsModule { }
