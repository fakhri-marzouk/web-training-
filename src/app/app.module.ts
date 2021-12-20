import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import {RouterModule, Routes} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FakeSessionItemService } from './admin/fake-session-item.service';
import { AdminComponent } from './admin/admin/admin.component';
const appRoutes: Routes = [
{
path: 'list',
component: SessionItemListComponent},
{
path: 'admin',
component:AdminComponent
},
{ path: '', redirectTo: '/list', pathMatch: 'full' },
{ path: '**', component: PagenotfoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    PagenotfoundComponent,
  ],

  imports: [RouterModule.forRoot(
appRoutes,
    { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [FakeSessionItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
