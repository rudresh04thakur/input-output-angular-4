import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
  loginForm:FormGroup;
  
  constructor(f:FormBuilder,private router:Router) {
		this.loginForm=f.group({
			username:['',Validators.required],
			password:[]		
		});
  }

  ngOnInit() {
  		this.loginForm.patchValue({password: 'Mahesh'}); 
  }
  
  OnLogin(data){
		console.log(data);  
		this.router.navigate(["/register",data]);
  }
}
