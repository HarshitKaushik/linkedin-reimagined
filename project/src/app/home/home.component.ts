import { Component, OnInit } from '@angular/core';
import { navbarLeftMenuList, navbarRightMenuList } from './../utils/constants';
import * as fas from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit() {
    this.navbarLeftMenuListObj = navbarLeftMenuList;
    this.navbarRightMenuListObj = navbarRightMenuList;
    this.fas = fas;
  }

}
