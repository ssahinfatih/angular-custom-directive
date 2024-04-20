import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';




@Directive({
  selector: '[appExample]'// uygulama seviyesinde directive'i kullanmamızı sağlayan referanstır
  //selector özelliği köşeli parantez içerisinde yazılıyorsa bu attiribute
  //olarak kullanulacağı anlamına gelmektedir.
  // eğer .appExam yazılıyorsa buda class olarak ilgili directive kullanılacağı anlamına gelir.


})
export class ExampleDirective
implements OnInit {

  constructor( private element : ElementRef) {
   

   }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor=this.color;
  }
   @Input() color:string;

   @HostListener("click")
   onClick() {
    alert("Html nesnesi click edildi ... ")
   }
   
   @HostBinding("style.color")
   writingColor : string = "red";

}
