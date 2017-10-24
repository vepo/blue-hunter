import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchByTitleComponent } from './search-by-title/search-by-title.component';
import { BookService } from './book.service';
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
    FormsModule,
    RouterModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
