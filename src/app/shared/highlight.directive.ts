import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fpHighlight]'
})
export class HighlightDirective {

  @Input() fpHighlight!: string;

  constructor(private _el: ElementRef<HTMLElement>, private _renderer: Renderer2) {
  }

  @HostListener('mouseover')
  mouseOverHandler() {
    this._renderer.addClass(this._el.nativeElement, this.fpHighlight || 'highlight')
  }

  @HostListener('mouseout')
  mouseOutHandler() {
    this._renderer.removeClass(this._el.nativeElement, this.fpHighlight || 'highlight')
  }
}
