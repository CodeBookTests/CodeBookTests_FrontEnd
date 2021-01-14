import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../appmodel/register';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistration:Register = new Register();
  form1: FormGroup;
  constructor(private userService: UserService) { }

  // constructor(private customerService: CustomerService, private router: Router) { }
  registerUser() {
    this.userService.login(this.userRegistration).subscribe(response => {
      alert(JSON.stringify(response));
      // if(response.status == 'SUCCESS') {
      //   let customerId = response.customerId;
      //   let customerName = response.customerName;
      //   sessionStorage.setItem('customerId', String(customerId));
      //   sessionStorage.setItem('customerName', customerName);
      //   this.router.navigate(['dashboard']);
      // }
      // else
      //   this.message = response.message;
    })
  }

  ngOnInit() {
    this.form1 = new FormGroup ( 
    {
      email: new FormControl('', [Validators.required, 
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),

      password: new FormControl('', [Validators.required,
        Validators.pattern('/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/')]),

      fullName: new FormControl('', [Validators.required, 
        Validators.pattern('/^[a-zA-Z]+ [a-zA-Z]+$/')]),
      
      mobile: new FormControl('', [Validators.required,
        Validators.pattern('/^\d{10}$/')]),

      city: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')]),

      state: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')]),

      dob: new FormControl('', [Validators.required]),

      qualification: new FormControl('', [Validators.required,
       Validators.pattern('^[a-zA-Z ]*$') ]),

      yoc: new FormControl('', [Validators.required,
        Validators.pattern('/^\d{10}$/')])
    })
  }

}
