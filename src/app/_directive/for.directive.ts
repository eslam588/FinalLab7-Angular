import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective {
  @Input() set appFor(v:number){
    for (let i = 0; i < v; i++){
      this.vref.createEmbeddedView(this.tref,{index:i});
    }

  }

  constructor(private tref:TemplateRef<any>, private vref:ViewContainerRef) {

   }

   ngOnInit():void {
    

   }



}
