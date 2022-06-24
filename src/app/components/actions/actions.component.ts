import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.show = !this.show;
  }

}
