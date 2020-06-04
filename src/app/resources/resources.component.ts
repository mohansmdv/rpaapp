import { Component, OnInit } from '@angular/core';


import {BPAResources} from '../rpa-bparesources'
import {BparesourcesService} from '../bparesources.service'

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  bparesources: BPAResources[];

  constructor(private bpaResourceservice: BparesourcesService) { }

  ngOnInit(): void {
    this.getbpaResources();
  }

  getbpaResources(): void {
    this.bpaResourceservice.getResourceinfo()
        .subscribe(bparesources => this.bparesources = bparesources);
  }

}
