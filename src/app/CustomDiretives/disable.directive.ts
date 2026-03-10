import { Element } from '@angular/compiler';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisable]',
})
export class DisableDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}
  @Input() set appDisable(disable: boolean) {
    if (disable) {
      this.render.addClass(
        this.element.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }
}
