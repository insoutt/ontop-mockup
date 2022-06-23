import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnClass: string = '';
  @Input() text!: string;
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() icon!: 'add' | 'tune' | undefined;

  iconPath = ''

  constructor() { }

  ngOnInit(): void {
    if (typeof this.icon === 'string') {
      this.iconPath = `/assets/svg/${this.icon}.svg`;
    }
  }

}
