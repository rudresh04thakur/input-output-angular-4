import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
	// model={
	// 	name:"Gopal",
	// 	email:"gopal04thakur@gmail.com",
	// 	username:"gopal04thakur",
	// 	password:"123456",
	// 	cpassword:"123456"	
	// }  
	
  constructor(private ar:ActivatedRoute) { 

  }

  ngOnInit() {
  // 	this.model={
	// 	email:this.ar.snapshot.params['username'],
	// 	password:this.ar.snapshot.params['password'],
	// 	cpassword:this.ar.snapshot.params['password']
	// }   
  }
  
  OnSave(data){
	console.log(data);  
  }

}
