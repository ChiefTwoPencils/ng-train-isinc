import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[colorizer]'
})
export class CustomDirectiveDirective implements OnInit {

  @Input('colorizer') color: string = "black";

  ngOnInit(): void {
      this.el.nativeElement.style.color = this.color;
  }

  constructor(private el: ElementRef) { }
}
