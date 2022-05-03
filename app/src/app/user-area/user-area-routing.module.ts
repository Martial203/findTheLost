import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemListForGuestComponent } from './items/components/item-list-for-guest/item-list-for-guest.component';
import { LoginComponent } from './my-account/components/login/login.component';
import { RegistrationComponent } from './my-account/components/registration/registration.component';
import { MainPageComponent } from './my-account/components/main-page/main-page.component';
import { ItemsListForTheUserComponent } from './my-account/components/items-list-for-the-user/items-list-for-the-user.component';
import { MyPostsListComponent } from './my-account/components/my-posts-list/my-posts-list.component';
import { NewArticleComponent } from './my-account/components/new-article/new-article.component';
import { MessagesListComponent } from './my-account/components/messages-list/messages-list.component';
import { SingleMessageComponent } from './my-account/components/single-message/single-message.component';

const routes: Routes = [
    // { path: '', component: MainPageComponent },
    // { path: '', loadChildren: () => import('./items/item-routing.module').then(m => m.ItemRoutingModule), outlet: "items" },
    // { path: '', loadChildren: () => import('./my-account/my-account-routing.module').then(m => m.MyAccountRoutingModule), outlet: "my-account" },
    { path: '', children: [
      { path: '', component: ItemListForGuestComponent }
    ], outlet: "items" },

    { path: '', children: [
      { path: '', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'my-account', component: MainPageComponent, children: [
        { path: 'items-list', component: ItemsListForTheUserComponent },
        { path: 'my-posts', component: MyPostsListComponent },
        { path: 'new-item', component: NewArticleComponent },
        { path: 'messages', component: MessagesListComponent },
        { path: 'messages/:id', component: SingleMessageComponent }
      ] }
    ], outlet: "myaccount" }
  ];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class UserAreaRoutingModule {}
