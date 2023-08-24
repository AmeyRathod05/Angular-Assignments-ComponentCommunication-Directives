import { Directive, ElementRef, HostListener, OnInit, Renderer2,HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor : string; 
  

  constructor(private elRef : ElementRef, private renderer : Renderer2) {

   }

   ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'violet');
   }  

    @HostListener('mouseenter') mouseover(eventData : Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'violet');
      this.backgroundColor = this.highlightColor; 
      
       } 
    @HostListener('mouseleave') mouseleave(eventData : Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white');
      this.backgroundColor = this.defaultColor; 
      
      
    } 

}
