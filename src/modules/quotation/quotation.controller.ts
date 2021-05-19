import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { QuotationModel } from 'src/models/quotation.model';
import { QuotationService } from './quotation.service';

@Controller('quotation')
export class QuotationController {
  constructor(private readonly quotationService: QuotationService) {}

  // get all quotations
  @Get()
  getQuotations(): Observable<string> {
    return of(this.quotationService.getQuotations());
  }

  // get quotation by id
  @Get(':id')
  getQuotation(@Param('id') id: number): Observable<string> {
    return of(this.quotationService.getQuotation(id));
  }

  // create a new quotation
  @Post()
  addQuotation(@Body() quotation: QuotationModel): any {
    console.log({ quotation });

    return this.quotationService.addQuotation(quotation);
  }

  // delete quotation by id
  @Delete(':id')
  deleteQuotation(@Param('id') id: number): Observable<string> {
    return of(this.quotationService.deleteQuotation(id));
  }
}
