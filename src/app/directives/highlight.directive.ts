import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input() highlightDirective = 'yellow';
  @Input() leaveElement = 'transparent';

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.highlightDirective;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = this.leaveElement;
  }

}
