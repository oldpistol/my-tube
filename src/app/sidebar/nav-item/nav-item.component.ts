import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  constructor() { }

  @Input() title = '';
  @Input() icon = '';

  ngOnInit(): void {
  }

}
