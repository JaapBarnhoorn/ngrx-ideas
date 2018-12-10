import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

import { IdeaComponent } from '@app/components/idea/idea.component';

@NgModule({
  declarations: [IdeaComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    IdeaComponent,
    InputTextModule,
    MenubarModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class UIModule {}
