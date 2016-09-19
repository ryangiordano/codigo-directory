import {Directive, ContentChildren, QueryList} from "@angular/core";
import {ShowOne} from "./show-one.directive";
import {ShowOneTrigger} from "./show-one-trigger.directive";


@Directive({
    selector: '[showOneContainer]'
})
export class ShowOneContainer {

    triggers: ShowOneTrigger[] = [];

    @ContentChildren(ShowOne)
    items: QueryList<ShowOne>;

    add(trigger: ShowOneTrigger) {
        this.triggers.push(trigger);
    }

    show(id:string) {
        this.items.forEach(item => item.active = item.id == id);
        this.triggers.forEach(
            (trigger:ShowOneTrigger) =>  trigger.active = trigger.id == id);
    }
}
