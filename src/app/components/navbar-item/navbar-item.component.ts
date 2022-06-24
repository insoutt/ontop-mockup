import {Component, Input, OnInit} from '@angular/core';
import {NavItem} from "../navbar/navbar.component";

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {

  @Input() item!: NavItem;

  constructor() { }

  ngOnInit(): void {
  }

}
