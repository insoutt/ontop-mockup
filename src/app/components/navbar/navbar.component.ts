import {Component, Input, OnInit} from '@angular/core';

export interface NavItem {
  name: string;
  icon: string;
  active?: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() items!: NavItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
