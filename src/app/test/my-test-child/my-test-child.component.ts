import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fp-my-test-child',
  templateUrl: './my-test-child.component.html',
  styleUrls: ['./my-test-child.component.scss']
})
export class MyTestChildComponent {

  @Input() myInputChildData!: string;

  @Output() passDataToParentOutput = new EventEmitter<string>()

  myStyle = 'background-color: blue; color: white';
  childData = 'I am child'
  showElement = false;

  clickHandler(event?: Event) {
    this.showElement = !this.showElement;
    console.log(event)


    if(this.myInputChildData) {
      this.passDataToParentOutput.emit(this.myInputChildData.toUpperCase())
    }
  }
}
