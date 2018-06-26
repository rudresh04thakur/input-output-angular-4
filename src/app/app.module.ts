import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule, FormBuilder,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputsAndOutputsChildComponent } from  './child-component';
import { InputsAndOutputsParentComponent } from './parent-component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DynamicComponent } from './dynamic.component';
import { Service } from './service';

const r:Routes=[
	{path:"home", component:HomeComponent},
	{path:"login", component:LoginComponent},
	{path:"register", component:RegisterComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DynamicComponent,
    InputsAndOutputsChildComponent,
    InputsAndOutputsParentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(r),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ Service ],
  entryComponents: [ DynamicComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
