import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent {
  constructor(private route:ActivatedRoute){}
  ngOnInit():void{
    console.warn("user id is",this.route.snapshot.paramMap.get('id'))
  }
}
