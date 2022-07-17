import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { PostXMLComponent } from './post-xml/post-xml.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:"xml-parser",component:PostXMLComponent},
  {path:"posts",component:ListComponent},
  {path:"edit/:id",component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
