import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  constructor(private route:ActivatedRoute){}
  ngOnInit():void{
    console.warn("user id is",this.route.snapshot.paramMap.get('id'))
  }

}
