import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotationService {
  getQuotations(): string {
    return '[Quotation] getQuotations';
  }

  getQuotation(id: number): string {
    return '[Quotation] getQuotation' + id;
  }

  addQuotation(quotation: any): string {
    return '[Quotation] addQuotation' + quotation;
  }

  deleteQuotation(id: number): string {
    return '[Quotation] deleteQuotation' + id;
  }
}
