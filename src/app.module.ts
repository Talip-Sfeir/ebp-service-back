import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotationModule } from './modules/quotation/quotation.module';
import { BillModule } from './modules/bill/bill.module';

@Module({
  imports: [QuotationModule, BillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
