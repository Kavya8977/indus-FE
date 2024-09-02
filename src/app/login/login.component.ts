import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin: Signin = new Signin(); 
  error:string='';

  login: Login = new Login();
  constructor(private httpClient: HttpClient, private router: Router) {}
  regForm = new FormGroup({
    email : new FormControl("anil@gmail.com",[Validators.required,Validators.minLength(6)]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  
  ngOnInit(): void {
    localStorage.clear();
    console.log(this.signin);
      
  }

  onSubmit() {
    console.log(this.signin);
    // this.httpClient.post<any>(`http://localhost:9090/api/auth/signin`,this.signin)
    // .subscribe((Response:any)=>{
    //   if(Response!=null){
    //     console.log(Response);
    //     if(Response.body.email===this.signin.email){
    //       console.log("admin login success");
          
    //       localStorage.clear();
    //       localStorage.setItem('token', JSON.stringify(Response.body.token));
    //       this.router.navigate(['/companylist']);
    //     }else{
    //       this.error="Invalid Username or Password"        }
    //   }else{
    //     alert('Invaild Data');
    //   }
    // })
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    this.httpClient.post<any>(`http://localhost:9090/api/auth/signin`, this.signin, { headers })
      .subscribe({
        next: (response) => {
          console.log(response);
          if (response && response.body && response.body.email === this.signin.email) {
            // alert('Admin login success');
            localStorage.clear();
            localStorage.setItem('token', JSON.stringify(response.body.token));
            this.router.navigate(['/companylist']);
          } else {
            alert('Username and Password is not correct');
          }
        },
        error: (error: HttpErrorResponse) => {
          console.error('Login failed', error);
          alert('Invalid credentials or insufficient permissions.');
        }
      });
  }
}

export class Signin{
  email: String = '';
  password: String = '';
}
