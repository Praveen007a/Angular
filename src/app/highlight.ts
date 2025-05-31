import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

 @Input() appHighlight: string = '';
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  // This directive can be used to apply a highlight effect to an element.
  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
