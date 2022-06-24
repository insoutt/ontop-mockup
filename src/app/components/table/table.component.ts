import {Component, Input, OnInit} from '@angular/core';

interface Head {
  text:string;
  class?: 'text-right' | 'text-left' | 'text-center';
}

interface Item {
  text:string;
  icon?: string;
  badge?: boolean;
  class?: 'text-right' | 'text-left' | 'text-center';
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() head: Head[] = [
    {text: 'Contractor name'},
    {text: 'Type'},
    {text: 'Start date'},
    {text: 'Amount'},
    {text: 'Status'},
  ];

  @Input() items: Item[][] = [
    [
      {text: 'Contractor name', icon: '/assets/images/user-profile-1.png'},
      {text: 'Type'},
      {text: 'Start date'},
      {text: 'Amount'},
      {text: 'active', badge: true},
    ],
    [
      {text: 'Contractor name2', icon: '/assets/images/user-profile-1.png'},
      {text: 'Type2'},
      {text: 'Start date2'},
      {text: 'Amount2'},
      {text: 'pending', badge: true},
    ],
  ]


    constructor() { }

  ngOnInit(): void {
  }

}
