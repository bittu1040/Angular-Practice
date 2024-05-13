import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDesign]'
})
export class customStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  // custom hover effect by changing the background color

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log("mouse enter");
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log("mouse leave");
    this.el.nativeElement.style.backgroundColor = '#d156f0';
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#d156f0');
    //  this.el.nativeElement.innerHTML= this.el.nativeElement.innerHTML+ "bittu"
  }
}
