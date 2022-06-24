import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() type: 'text' | 'number' | 'email' | 'password' = 'text';
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
