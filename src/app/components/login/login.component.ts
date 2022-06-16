import { Component, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 email="";
 password:any;
 formdata:any
loged:any;
  constructor(private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }
  login(){
       this.loged= {email:this.email,password :this.password}
      console.log(this.loged);
      if(this.email=="omkar@gmail.com" && this.password=="123"){
        let logdata = [this.email, this.password];
        localStorage.setItem("login", JSON.stringify(logdata));
        sessionStorage.setItem("login" ,JSON.stringify(logdata));
        window.location.href="homepage"
        this.spinner.show();

      }
  else{
    setTimeout(()=>{
      this.spinner.show();

    },5000)


  }
  }
}
