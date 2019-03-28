import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tst',
  templateUrl: './my-tst.component.html',
  styleUrls: ['./my-tst.component.css']
})
export class MyTstComponent implements OnInit {
  url: string = 'https://www.google.fr';
  constructor() { }

  ngOnInit() {
  }

}
