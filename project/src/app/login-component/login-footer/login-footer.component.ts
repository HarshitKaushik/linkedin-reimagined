import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-footer',
  templateUrl: './login-footer.component.html',
  styleUrls: ['./login-footer.component.css']
})
export class LoginFooterComponent implements OnInit {
  @Input() loginFooter: any;

  constructor() { }

  ngOnInit() {
  }

}
