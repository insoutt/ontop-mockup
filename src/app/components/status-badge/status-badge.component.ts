import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.css']
})
export class StatusBadgeComponent implements OnInit {

  @Input() variant!: string;

  constructor() { }

  ngOnInit(): void {
  }

  getName(): string {
    switch (this.variant) {
      case 'active': return 'Active';
      case 'pending': return 'Signature pending';
      default: return 'Desconocido';
    }
  }

  getColor(variant: 'bg' | 'text', opacity: number = 0, intensity: 500 | 800 = 500): string {
    let classname = `${variant}-`;
    switch (this.variant) {
      case 'active':
        classname += `green-${intensity}`;
        break;
      case 'pending':
        classname += `amber-${intensity}`;
        break;
      default:
        classname += `gray-${intensity}`;
    }

    if (opacity !== 0) {
      classname += `/${opacity}`;
    }
    return classname;
  }

}
