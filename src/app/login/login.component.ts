import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm : FormGroup;
  constructor( private formBuilder: FormBuilder ) {
    this.loginForm = formBuilder.group({
      emailAddress: ['',[ Validators.required,
                              Validators.email,
                              Validators.minLength(5),
                              Validators.minLength(10)

                          ]],
      Password : ['', Validators.required]
      
    });
   }

  ngOnInit() {
  }

  postData(){
    console.log(this.loginForm);
    
  }

  
loginUser(loginForm: NgForm){
  console.log(loginForm);
  
}


}
