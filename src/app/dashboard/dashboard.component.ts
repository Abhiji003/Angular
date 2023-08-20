import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private route:ActivatedRoute){}
  ngOnInit():void{
    console.warn("user id is",this.route.snapshot.paramMap.get('id'))
  }

}
