import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, filter, fromEvent, map, Observable, of, Subject } from 'rxjs';
import { MyTestChildComponent } from '../my-test-child/my-test-child.component';
import { TestService } from '../test.service';

@Component({
  selector: 'fp-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTestComponent implements OnInit {

  @ViewChild('myInput', { static: true } ) myInput!: ElementRef<HTMLInputElement>
  obs$ = new Observable<string>(observer => {
    observer.next('one')
    observer.complete();
    observer.error('three')
    observer.next('four')
  });
  obs1$ =  of(1, 2, 3);
  hotEventObs$!: Observable<Event>;

  private mySubj = new Subject<number>();
  private myBSubj = new BehaviorSubject<string | null>(null);
  value$ = this.myBSubj.asObservable();

  value!: string | null;


  data: string[] = ['one', 'two'];
  dataPassedToChild = "I am from parent component";

  constructor(private testService: TestService) {
    //this.obs1$.subscribe(val => console.log(val));
    this.mySubj.next(1)
    this.mySubj.next(2)
    setTimeout(() => {

    this.myBSubj.next('start 2')
    }, 2000)

    this.mySubj.subscribe(val => console.log(val));
    this.myBSubj.subscribe(val => {
       this.value = val;
    });

    this.mySubj.next(4)

  }

  ngOnInit(): void {

    this.hotEventObs$ = fromEvent(this.myInput.nativeElement, 'input');
    this.hotEventObs$.pipe(
      map((v: any) => v.data.toUpperCase()),
      filter((v: any) => v === 'A'),
      ).subscribe(v => console.log(v))
  }

  handlePassDataToParentOutput(data: string) {

    console.log(data)
  }

  pushDataToSubj(data: string) {
    this.myBSubj.next(data)
  }
}
