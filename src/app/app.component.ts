import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div appExample color="blue">
    merhaba
  </div>
  <div class="appExample">
    merhaba 2 
  </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
 //  ## Directive Oluşturma
     // ng generate directive ... ya da ng g d ... test ts oluşturmaması için --skip-tests
     // Bir directive oluşturuduğu zaman ana modüle declare edilmelidir.
     // Bir directive sınıf adının sonunda directive olması bir kültürdür.
     // Bir directibenin directive olabilmesi için @directive decoratorü ile işaretlenmiş olması gerekir.
  // ## Selector'ı attiribute olarak kullanma 
     //selector özelliği köşeli parantez içerisinde yazılıyorsa bu attiribute
     //olarak kullanulacağı anlamına gelmektedir.
  // ## Selector'ı class olarak kullanma 
     //.appExam yazılıyorsa buda class olarak ilgili directive kullanılacağı anlamına gelir.
  
  // ## Directibe ile işaretlenmiş HTML nesnesini elde etme 
  // ## Directive'e parametre tanımlama
     // directive üzerinde parametre tanımlayabilmek için input field tanımlamak yeterlidir.

  // ## HostListener
     // oluşturulan directivin hangi event ile görevlendirileceğini belirlemmizi sağlayan decoratordür
  // ## HostBinding 
     // Directive in işarlediği DOM nesnesinin bir özelliğine bind olarak işlemler gerçekleştirebiliriz
     
}
