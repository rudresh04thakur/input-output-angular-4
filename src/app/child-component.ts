import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inputs-and-outputs-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class InputsAndOutputsChildComponent implements OnInit {
  @Input('parentData')
  public parentData: string;

  @Output('childEventEmitter')
  childEventEmitter = new EventEmitter<string>();

  onChange(value:string){
    this.childEventEmitter.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
