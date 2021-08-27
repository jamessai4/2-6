import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.page.html',
  styleUrls: ['./show-list.page.scss'],
})
export class ShowListPage implements OnInit {

  names = [];
  contactname = "";



  constructor(
    public alertController: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  async addcontact() {

    if (this.contactname == "") {
      const alert = await this.alertController.create({
        header: 'แจ้งเตือน',
        message: 'กรุณากรอกข้อมูลให้ครบ',
        buttons: ['ตกลง']
      });

      await alert.present();
    } else

      this.names.push(this.contactname);
    this.contactname = "";
  }

  removecontact(names) {
    let index = this.names.indexOf(names)
    this.names.splice(index);
  }


}


