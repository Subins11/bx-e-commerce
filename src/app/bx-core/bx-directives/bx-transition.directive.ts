import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBxTransition]'
})
export class BxTransitionDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(){
    this.imageTransform('scale(1.1)', '5', '0.5s');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.imageTransform('', '', '0.5s');
  }

  private imageTransform(transform: any, zIndex: any, transitionDuration: any){
    this.elementRef.nativeElement.style.transform = transform;
    this.elementRef.nativeElement.style.zIndex = zIndex;
    this.elementRef.nativeElement.style.transitionDuration = transitionDuration;
  }
}
