import {Component, Input, OnInit} from '@angular/core';

interface SelectOption {
  value: string;
  text: string;
}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() id!: string;
  @Input() items: SelectOption[] = [];
  @Input() default: string = 'Option';


  constructor() { }

  ngOnInit(): void {
  }

}
