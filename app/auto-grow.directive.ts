import {Directive, ElementRef , Renderer, HostListener } from 'angular2/core'

@Directive({
    selector:"[my-autoGrow]",
    host:{
        '(focus)' : 'onFocus()',
        '(blur)' : 'onBlur()'
    }
})

export class AutoGrowDirective {
   // _el: ElementRef;
    constructor(private el: ElementRef ,private renderer: Renderer){
       // this._el
    }
    @HostListener('focus')
    onfocus() {
        this.renderer.setElementStyle(this.el.nativeElement,'width','200px');
    }
@HostListener('blur')
    onblur() {
    this.renderer.setElementStyle(this.el.nativeElement,'width','120px');
    }
}