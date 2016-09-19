import { Component, OnInit } from '@angular/core';
import { CollapsibleComponent } from '../collapsible/collapsible.component';
import { TabDirectivesComponent } from '../tab-directives/tab-directives.component';
import { TwoWayComponent } from '../two-way/two-way.component';
import { PipesComponent } from '../pipes/pipes.component'
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
