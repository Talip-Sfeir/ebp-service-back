import { Injectable } from '@nestjs/common';
import { BillModel } from 'src/models/bill.model';

@Injectable()
export class BillService {
  getBills(): string {
    return '[Bill] getBills';
  }

  getBill(id: number): string {
    return '[Bill] getBill' + id;
  }

  addBill(bill: BillModel): string {
    return '[Bill] addBill' + bill;
  }

  deleteBill(id: number): string {
    return '[Bill] deleteBill' + id;
  }
}
