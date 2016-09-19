import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    alert("The view is being updated");
  }
  input:string;
}
