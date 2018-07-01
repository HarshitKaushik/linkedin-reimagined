import { Component, OnInit } from '@angular/core';
import { navbarLeftMenuList, navbarRightMenuList } from './../utils/constants';
import * as fas from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  defaultMenuChoice = 1;
  navbarLeftMenuListObj: any;
  navbarRightMenuListObj: any;
  fas: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.navbarLeftMenuListObj = navbarLeftMenuList;
    this.navbarRightMenuListObj = navbarRightMenuList;
    this.fas = fas;
    this.router.navigateByUrl('/home/feed');
  }

}
