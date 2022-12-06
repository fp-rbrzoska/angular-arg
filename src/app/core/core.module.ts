import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from './test.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{ provide: TestService, useClass: TestService}]
})
export class CoreModule { }
