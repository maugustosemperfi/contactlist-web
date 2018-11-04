import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CardModule,
    TableModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    CardModule,
    TableModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class PrimeModule {}

