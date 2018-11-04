import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CardModule,
    TableModule,
  ],
  exports: [
    CardModule,
    TableModule
  ],
})
export class PrimeModule {}

