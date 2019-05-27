import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from '';
import { RegisterPageComponent } from '';
import { TournamentsPageComponent } from '';
import { TraningsPageComponent } from '';
import { ActivityPageComponent } from '';
import { GalleryPageComponent } from '';
import { EquipmentPageComponent } from '';
import { TeamPageComponent } from '';
import { ContactsPageComponent } from '';
import { NewsPageComponent } from '';
import { Error404Component } from '';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {path: '', redirectTo: '/news', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent},
      {path: 'tournaments', component: TournamentsPageComponent},
      {path: 'trainings', component: TraningsPageComponent},
      {path: 'activity', component: ActivityPageComponent},
      {path: 'gallery', component: GalleryPageComponent, children: [
        {path: ':id', component: GalleryPageComponent},
        {path: 'new', component: GalleryPageComponent}
      ]},
      {path: 'equipment', component: EquipmentPageComponent},
      {path: 'team', component: TeamPageComponent},
      {path: 'contacts', component: ContactsPageComponent},
      {path: 'news', component: NewsPageComponent, children: [
        {path: ':id', component: NewsPageComponent},
        {path: 'new', component: NewsPageComponent}
      ]},
      {path: '**', component: Error404Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
