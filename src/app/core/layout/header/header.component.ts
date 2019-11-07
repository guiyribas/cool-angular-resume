import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  preserveWhitespaces: true
})
export class HeaderComponent implements OnInit {

  @Input() sidebar;

  searchBar: boolean;

  constructor() { }

  ngOnInit() {
  }

  logout() {
    console.log('LOGOUT');
  }

}
