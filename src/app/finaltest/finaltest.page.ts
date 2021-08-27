import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finaltest',
  templateUrl: './finaltest.page.html',
  styleUrls: ['./finaltest.page.scss'],
})
export class FinaltestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click_me(){
    console.log('Success!')
  }

}
