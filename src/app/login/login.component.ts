import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup = this.fb.group({
    username: ['admin', Validators.required],
    password: ['admin', Validators.required],
  });

  constructor(private fb: UntypedFormBuilder,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  loginUser() {
    this.authService.login().subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/home');
    })
  }
}
