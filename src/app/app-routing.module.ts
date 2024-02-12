import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaySingleComponent } from './display-single/display-single.component';
import { UploadComponent } from './upload/upload.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'', component:UploadComponent},
  {path:'e/:id', component:EditComponent},
  {path:'d', component:DisplayAllComponent},  
  {path:'ds/:id', component: DisplaySingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
