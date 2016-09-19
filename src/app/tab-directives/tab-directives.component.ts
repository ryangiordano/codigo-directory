import { Component, OnInit, QueryList} from '@angular/core';
import { ShowOneTrigger } from '../show-one-trigger.directive';
import { ShowOne } from '../show-one.directive';
import { ShowOneContainer } from '../show-one-container.directive';

@Component({
  selector: 'tab-directives',
  templateUrl: './tab-directives.component.html',
  styleUrls: ['./tab-directives.component.css'],
})
export class TabDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //Testing for how the view is updated

}
