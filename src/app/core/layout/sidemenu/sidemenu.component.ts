import { Component, OnInit } from '@angular/core';
import { menus } from './menu-element';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  public menus = menus;

  constructor() {}

  ngOnInit() {}
}
