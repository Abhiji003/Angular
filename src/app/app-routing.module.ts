import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoPageComponent } from './no-page/no-page.component';


const routes: Routes = [

  { path: 'dashboard/5', component: DashboardComponent },
  { path: 'add-contact/10', component: AddContactComponent },
  { path: 'address-book/15', component: AddressBookComponent },
  { path: '**', component: NoPageComponent } // Wildcard route for handling unknown paths

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  goToAddressBook() {
    this.router.navigate(['/address-book']);
  }
  goToAddContact() {
      this.router.navigate(['/add-contact']);
  }
  goTodashboard() {
        this.router.navigate(['/dashboard']);
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddressBookComponent,AddContactComponent,DashboardComponent]
