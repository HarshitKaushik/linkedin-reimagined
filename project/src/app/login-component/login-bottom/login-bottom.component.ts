import { Component, OnInit } from '@angular/core';
import { footerLinks } from './../../utils/constants';

@Component({
  selector: 'app-login-bottom',
  templateUrl: './login-bottom.component.html',
  styleUrls: ['./login-bottom.component.css']
})
export class LoginBottomComponent implements OnInit {
  footer: any;

  constructor() { }

  ngOnInit() {
    this.footer = footerLinks;
  }

}
