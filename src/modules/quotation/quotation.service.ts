import { Injectable } from '@nestjs/common';
import { QuotationModel } from 'src/models/quotation.model';

@Injectable()
export class QuotationService {
  getQuotations(): string {
    return '[Quotation] getQuotations';
  }

  getQuotation(id: number): string {
    return '[Quotation] getQuotation' + id;
  }

  addQuotation(quotation: QuotationModel): string {
    return '[Quotation] addQuotation' + quotation;
  }

  deleteQuotation(id: number): string {
    return '[Quotation] deleteQuotation' + id;
  }
}
