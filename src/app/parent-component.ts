import {Component, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-inputs-and-outputs-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class InputsAndOutputsParentComponent implements OnInit {

  @Output('parentData')
  public parentText;

  @Input()
  public childData;

  constructor() { }

  ngOnInit() {
  }

}
