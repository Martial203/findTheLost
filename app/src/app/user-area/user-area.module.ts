import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ItemsModule } from './items/items.module';
import { MyAccountModule } from './my-account/my-account.module';
import { UserAreaRoutingModule } from './user-area-routing.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    ItemsModule,
    MyAccountModule,
    UserAreaRoutingModule
  ],
  exports: [
    MainPageComponent,
  ]
})
export class UserAreaModule { }
