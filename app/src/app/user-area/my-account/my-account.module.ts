import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './components/aside/aside.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { MatButtonModule } from '@angular/material/button';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { SingleMessageComponent } from './components/single-message/single-message.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ItemsListForTheUserComponent } from './components/items-list-for-the-user/items-list-for-the-user.component';
import { MyPostsListComponent } from './components/my-posts-list/my-posts-list.component';
import { ItemsModule } from '../items/items.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { CarousselComponent } from './components/single-post/caroussel/caroussel.component';







@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AsideComponent,
    MainPageComponent,
    NewArticleComponent,
    MessagesListComponent,
    SingleMessageComponent,
    ItemsListForTheUserComponent,
    MyPostsListComponent,
    SinglePostComponent,
    CarousselComponent,
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    RouterModule,
    MatBadgeModule,
    ItemsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule
  ]
})
export class MyAccountModule { }
