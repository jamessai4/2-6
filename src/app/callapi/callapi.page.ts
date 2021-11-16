import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-callapi',
  templateUrl: './callapi.page.html',
  styleUrls: ['./callapi.page.scss'],
})
export class CallapiPage implements OnInit {

  constructor(private http: HttpClient) { }

  x: any;
  url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"

  ngOnInit() {
    this.http.get(this.url).subscribe(
      (data: any) => {
        this.x = data
      }
    )
  }

}
