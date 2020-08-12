import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgbdTableFiltering } from './pages/table-bill-review/table-bill-review.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';


const routes: Routes = [
  {
    path: '',
    component: PageMainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'billReview', component: NgbdTableFiltering },
      { path: 'client-details', component: ClientDetailsComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
