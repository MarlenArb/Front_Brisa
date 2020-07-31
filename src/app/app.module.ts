//Angular-module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Angular-Components
import { AppComponent } from './app.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './shared/header/header.component';


//ng-Bootstrap
import { NgbModule, NgbHighlight} from '@ng-bootstrap/ng-bootstrap';
import {NgbdTableFilteringModule} from './pages/table-bill-review/table-bill-review.module';



@NgModule({
  declarations: [
    AppComponent,
    PageMainComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgbdTableFilteringModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
