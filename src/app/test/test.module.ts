import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { MyTestChildComponent } from './my-test-child/my-test-child.component';
import { MyTestComponent } from './my-test/my-test.component';
import { TestService } from './test.service';

@NgModule({
  declarations: [MyTestChildComponent, MyTestComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  providers: [TestService]
})
export default class TestModule { }
