import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ToastModule
  ],
  exports: [ButtonModule, CardModule, InputTextModule, ToastModule],
  providers: [MessageService]
})
export class UIModule {}
