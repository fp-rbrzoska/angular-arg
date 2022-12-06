import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { TestService } from '../core/test.service';

@Component({
  selector: 'fp-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTestComponent {

  data: string[] = ['one', 'two'];
  dataPassedToChild = "I am from parent component";

  constructor(private testService: TestService) {
    console.log(testService)
  }

  handlePassDataToParentOutput(data: string) {

    console.log(data)
  }
}
