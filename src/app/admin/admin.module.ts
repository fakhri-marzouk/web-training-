import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { FormsModule } from '@angular/forms';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { FakeSessionItemService } from './fake-session-item.service';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent },

  { path: 'add', component: SessionAddFormComponent },

  { path: 'edit/:id', component: SessionEditFormComponent },

  {path: 'list', component: SessionItemListComponent},

  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AdminComponent,
    SessionItemComponent,
    SessionItemListComponent,
    SessionAddFormComponent,
    SessionEditFormComponent,
  ],

  imports: [RouterModule.forRoot(adminRoutes), CommonModule, FormsModule],
  providers: [FakeSessionItemService],
  bootstrap: [AdminComponent],
})
export class AdminModule {}
