import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ontop-frontend';

  client = {
    name: '[NAME]',
  };

  items = [
    {
      name: 'Contracts',
      icon: '/assets/svg/user.svg',
      active: true,
    },
    {
      name: 'Documents',
      icon: '/assets/svg/file.svg',
    },
    {
      name: 'Payout',
      icon: '/assets/svg/card.svg',
    },
    {
      name: 'Time',
      icon: '/assets/svg/calendar.svg',
    },
  ]
}
