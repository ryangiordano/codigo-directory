import { Directive, Input, Output, HostBinding, HostListener, EventEmitter} from '@angular/core';

@Directive({
  selector: '[collapse-on-click]',
  exportAs: 'collapsible'
})
export class CollapseOnClick {
@Input("collapsed")
isCollapsed = false;

@Output()
collapsedOutput= new EventEmitter();

get collapsed(){
  return this.isCollapsed
}


@HostListener('click')
toggle(){
  //toggle the property in the input
  this.isCollapsed = !this.isCollapsed;
  //We emit this just in case we want to add any functionality after the collapse is initiated
  this.collapsedOutput.emit(this.isCollapsed);
}
  constructor() { }

}
