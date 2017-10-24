import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchByTitleComponent } from './search-by-title/search-by-title.component';

const appRoutes: Routes = [
  { path: '', component: SearchByNameComponent },
  { path: 'name', component: SearchByNameComponent },
  { path: 'title', component: SearchByTitleComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    SearchByNameComponent,
    SearchByTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
