import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentComponent} from './student/danh-sach-ve-xe/student.component';
import {CreateStudentComponent} from './student/them-moi-ve-xe/create-student.component';
import {EditStudentComponent} from './student/edit-student/edit-student.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  {path: 'home', component: StudentComponent},
  {path: 'themVe', component: CreateStudentComponent},
  {path: 'editVeXe/:id', component: EditStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
