import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'UIeCommerce';
  visibleLogin: boolean = false;
  l: String = '';

  constructor(private router: Router) {}
  searchDummy() {
    alert('fff');
  }

  ngOnInit(): void {
    alert('app component ts file loaded');
  }

  popover() {
    const d = document.querySelector('dropdown leftmovediv');
    console.log(d);
  }

  seleChange(event: any) {
    console.log(event.target.value);
    let value = event.target.value;
    this.l = this.router.url;
    if (this.l.match('admin')) {
      alert('FFFFF');
      this.router.navigate(['admin' + '/' + value]);
    } else if (this.l.match('seller')) {
    } else {
      this.router.navigate(['buyer' + '/' + value]);
    }
  }
}
