import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {
  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor ="green"
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor =""
  }

  @Input() set appColors(v:string){
    this.element.nativeElement.style.backgroundColor =v;
  }

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor ="red";
   }

}
