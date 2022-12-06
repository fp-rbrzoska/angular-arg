import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

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
  handlePassDataToParentOutput(data: string) {

    console.log(data)
  }
}
