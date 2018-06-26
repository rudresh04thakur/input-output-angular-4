//our root app component
import {  Component, OnInit, ViewChild,  ViewContainerRef } from '@angular/core'
import { Service } from './service'
import { DynamicComponent } from './dynamic.component'

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
})
export class AppComponent implements OnInit {
  
  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef

  constructor(private service: Service, viewContainerRef: ViewContainerRef) {
  //constructor(private service: Service) {
    this.service = service
  }
  
  ngOnInit() {
   
  }
  addElement(){
	this.service.setRootViewContainerRef(this.viewContainerRef)
	this.service.addDynamicComponent()
  }

}
