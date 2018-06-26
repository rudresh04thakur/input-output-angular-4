import { Component , Input , Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'dynamic-component',
  template: `
    <input name="fname" (ngModelChange)="onChange($event)" placeholder="First Name" [ngModel]="name"/>
    <div>{{fname}}</div>
  `
})

export class DynamicComponent {
  @Output() nameChange:EventEmitter<String> = new EventEmitter<String>();
  @Input() name:string;

  onChange(newName) {
    this.name = newName;
    this.nameChange.emit(this.name);
  }
 }
