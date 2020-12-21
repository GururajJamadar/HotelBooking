import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;


  constructor( private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });


  }

  get f() { return this.loginForm.controls; }

  onSubmit(login:any) {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    console.log("adasdadsadada", login)
    if (login.username == "12345" && login.password == "12345678") {
      this.router.navigate(['/member']);
    } else {
   alert("invalid username and password..!!");
    }
  }


}
