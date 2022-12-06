import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fpTest]'
})
export class TestDirective implements OnInit {

  @Input() fpTest!: string
  @Input() fpTestBackgroundColor!: string;
  constructor(private _el: ElementRef<HTMLElement>, private _renderer: Renderer2) {
  }

  ngOnInit(): void {
    this._renderer.setStyle(this._el.nativeElement, 'backgroundColor', this.fpTestBackgroundColor || 'green');
    this._renderer.setStyle(this._el.nativeElement, 'display', 'block')

  }

  @HostListener('click')
  clickHandler() {
    this._renderer.setStyle(this._el.nativeElement, 'backgroundColor', 'black');

  }

}
