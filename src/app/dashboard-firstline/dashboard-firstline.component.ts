import { Component, OnInit } from '@angular/core';

import { RPA_PROCESSES } from '../mock-processes'

import { Pipe, PipeTransform } from '@angular/core';

import { GetCountbyLOB } from '../count-byLOB.pipe'

@Component({
  selector: 'app-dashboard-firstline',
  templateUrl: './dashboard-firstline.component.html',
  styleUrls: ['./dashboard-firstline.component.css']
})
export class DashboardFirstlineComponent implements OnInit {

  process = RPA_PROCESSES;

  countBRS: any;
  countBM: any;
  countSBM: any;
  countTotal: any;

  // getBRSCount(){
  //   this.countBRS = this.process.filter(h => h == 'BRS');

  // }

  constructor() { }

  ngOnInit(): void {

    this.countBRS = this.process.filter(h => h.lob == 'BRS').length;
    this.countBM = this.process.filter(h => h.lob == 'BM').length;
    this.countSBM = this.process.filter(h => h.lob == 'SBM').length;
    this.countTotal = this.process.length;
  }

}
