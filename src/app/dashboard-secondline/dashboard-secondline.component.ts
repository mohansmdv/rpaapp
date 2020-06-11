import { Component, OnInit } from '@angular/core';
import { MemeberService } from '../services/memeber.service'

import { Membermodel } from '../model/membermodel';

@Component({
  selector: 'app-dashboard-secondline',
  templateUrl: './dashboard-secondline.component.html',
  styleUrls: ['./dashboard-secondline.component.css']
})
export class DashboardSecondlineComponent implements OnInit {

  membermodels: Array<Membermodel>;

  constructor(private memberserv: MemeberService) { }

  ngOnInit(){
    this.memberserv.getAll().subscribe(data => this.membermodels = data);
  }
}
  
