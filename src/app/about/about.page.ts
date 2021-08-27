import { NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  name1:string;
  subject1:string;
  conpanymame1:string;

  constructor(
    private route:ActivatedRoute,
    private navCtrl : NavController,
    ) {
      this.name1 = this.route.snapshot.paramMap.get('name');
      this.subject1 = this.route.snapshot.paramMap.get('subject');
      this.conpanymame1 = this.route.snapshot.paramMap.get('companyname');
    }

  ngOnInit() {
    console.log('Always work first' );
  }

  goback(){
    this.navCtrl.navigateBack('home');
  }
  

}
