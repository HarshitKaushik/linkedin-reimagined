import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MSG } from './../../utils/messages';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  adminName = 'admin@linkedin.com';
  adminPassword = 'password';
  emailOrUserName: string;
  password: string;

  constructor(private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    // todo Remove this later
    this.emailOrUserName = this.adminName;
    this.password = this.adminPassword;
  }

  submitLogin(): void {
    if (this.emailOrUserName !== this.adminName || this.password !== this.adminPassword) {
      this.toastr.error(MSG.error.WRONG_CREDENTIALS);
    } else {
      this.router.navigateByUrl('/home');
    }
  }

}
