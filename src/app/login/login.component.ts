import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  passwords = "12345678";
  userName = "12345";


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
    if (login.username == this.userName && login.password == this.passwords) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'successfully logged in..!',
        showConfirmButton: true,
      })
      this.router.navigate(['/member']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: 'Invalid username or password',
        footer: '<a href>Home?</a>'
      })
    }
  }


}
