import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  form1  : FormGroup;
  login : Login = new Login();
  message: String;
  constructor(private userService: UserService, private router: Router) {​​​​ }​​​​

  
  loginCheck() {​​​​
  console.log(this.login);

  this.userService.login(this.login).subscribe(response => {​​​​

    alert(JSON.stringify(response));

    console.log(response);

    if(response.status == 'SUCCESS') {​​​​

      //let fullName = response.fullName;

      let email = response.email;

      //sessionStorage.setItem('fullName', fullName);

      sessionStorage.setItem('email',email );

      this.router.navigate(['']);

    }​​​​

    else

      this.message = response.message;

  }​​​​)

}​​​​


  ngOnInit() {
    this.form1 = new FormGroup (  
      {
        email: new FormControl('', [Validators.required, 
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        password: new FormControl('', [Validators.required, 
          Validators.pattern('/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/')])
      }
    )
  }

}
