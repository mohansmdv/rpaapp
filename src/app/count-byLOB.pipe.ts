
import { Pipe, PipeTransform } from '@angular/core';

import { ProcessLOB } from './rpa-processes'

import { RPA_PROCESSES } from './mock-processes'

@Pipe({name: 'getdatabyLOB'})
export class GetCountbyLOB implements PipeTransform {
  transform(allProcesses: ProcessLOB[], lob: any): any {
    
    allProcesses = allProcesses.filter(proc => proc.lob == lob);
    
    return allProcesses.length;
  }
}
