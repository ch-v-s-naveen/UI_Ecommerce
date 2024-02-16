import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UIeCommerce';
  visibleLogin: boolean = false;

  constructor(private router: Router) {}
  searchDummy() {
    alert('fff');
  }

  popover() {
    const d = document.querySelector('dropdown leftmovediv');
    console.log(d);
  }

  seleChange(event: any) {
    console.log(event.target.value);
    let value = event.target.value;
    this.router.navigate([value]);
  }
}
