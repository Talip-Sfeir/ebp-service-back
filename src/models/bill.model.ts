import { QuotationModel } from './quotation.model';

export interface BillModel {
  id: string;
  quotation: QuotationModel;
  createdAt: string;
}
