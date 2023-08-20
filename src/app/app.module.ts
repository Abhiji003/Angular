import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: 'add-contact',component:AddContactComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'address-book',component:AddressBookComponent}
];


@NgModule({
  declarations: [
    
    routingComponents,
    AddContactComponent,
    AddressBookComponent,
    DashboardComponent // Make sure this is an array
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    [FormsModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
