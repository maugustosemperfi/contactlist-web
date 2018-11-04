import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CardModule,
  ],
  exports: [
    CardModule,
  ],
})
export class PrimeModule {}

