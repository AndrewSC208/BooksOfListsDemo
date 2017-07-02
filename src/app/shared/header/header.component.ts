import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() journal: string = 'San Diego Business Journal'
  @Input() title: string = 'Book of Lists'

  constructor() { }

  ngOnInit() {
  }

}
