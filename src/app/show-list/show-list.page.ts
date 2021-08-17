import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.page.html',
  styleUrls: ['./show-list.page.scss'],
})
export class ShowListPage implements OnInit {

  names = [];
  contactname = "";
  item: any;

  constructor(public alertController: AlertController) { }

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

  async removecontact(item) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ตกลง',
          handler: () => {
            let index = this.names.indexOf(item);
            this.names.splice(index);
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

}


