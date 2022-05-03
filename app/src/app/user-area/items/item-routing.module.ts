import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemListForGuestComponent } from './components/item-list-for-guest/item-list-for-guest.component';

const routes: Routes = [
  { path: 'items-list', component: ItemListForGuestComponent }
  ];

@NgModule({
    imports:[
        // RouterModule.forChild(routes)
    ],
    exports:[
        // RouterModule
    ]
})

export class ItemRoutingModule {}
