import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToAddContact() {
    this.router.navigate(['/add-contact']);
  }

  navigateToAddressBook() {
    this.router.navigate(['/address-book']);
  }
}
