import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { BillModel } from 'src/models/bill.model';
import { BillService } from './bill.service';

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  // get all bills
  @Get()
  getBills(): Observable<string> {
    return of(this.billService.getBills());
  }

  // get bill by id
  @Get(':id')
  getBill(@Param('id') id: number): Observable<string> {
    return of(this.billService.getBill(id));
  }

  // create a new bill
  @Post()
  addBill(@Body() bill: BillModel): any {
    console.log({ bill });

    return this.billService.addBill(bill);
  }

  // delete bill by id
  @Delete(':id')
  deleteBill(@Param('id') id: number): Observable<string> {
    return of(this.billService.deleteBill(id));
  }
}
