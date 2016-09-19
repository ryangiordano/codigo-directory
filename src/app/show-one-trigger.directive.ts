import { Directive, Input, HostListener, HostBinding} from '@angular/core';
import { ShowOneContainer } from './show-one-container.directive';

@Directive({
  selector: '[showOneTrigger]'
})
export class ShowOneTrigger {
@Input("showOneTrigger")
id: string;

@Input()
active = false;

//hosts refer to the element that that directive is listed on.
@HostListener('click')
click(){
  this.showOneContainer.show(this.id);
}
@HostBinding('class.selected')
get selected(){
  return this.active;
}
  constructor(private showOneContainer: ShowOneContainer) {
    //Needs to register itself with the directive
    showOneContainer.add(this);
   }

}
