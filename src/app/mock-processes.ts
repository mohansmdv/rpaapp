import { Rpa_processes } from './rpa-processes';

export const RPA_PROCESSES: Rpa_processes[] = [
    { processid: 1, processname: 'Modify SS Bell.ca', lob: 'BRS', successrate: 90 },
    { processid: 2, processname: 'Cancel SS Bell.ca', lob: 'BRS', successrate: 95 },
    { processid: 3, processname: 'Field Work', lob: 'BRS', successrate: 75 },
    { processid: 4, processname: 'Hot Spot', lob: 'BM', successrate: 90 },
    { processid: 5, processname: 'SB Echo', lob: 'SBM', successrate: 75 },
    { processid: 6, processname: 'ASOS', lob: 'SBM', successrate: 60 },
    { processid: 7, processname: 'Seasonal Suspend', lob: 'BM', successrate: 60 },
    { processid: 8, processname: 'Transfer of Responsibility', lob: 'BM', successrate: 45 },
    { processid: 9, processname: 'Disonnections', lob: 'BM', successrate: 65 },
    { processid: 10, processname: 'OM Billing', lob: 'SBM', successrate: 55 },
    { processid: 11, processname: 'ODS Disconnect', lob: 'SBM', successrate: 63 },
    { processid: 12, processname: 'ODS Kickouts', lob: 'BM', successrate: 63 },
    { processid: 13, processname: 'MTS Hot Spot', lob: 'BM', successrate: 83 }
];
