import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { ItemsService } from 'src/app/services/items.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertController: AlertController,
    private people: PeopleService,
    private item: ItemsService
  ) { }

  async wipe() {
    const alert = await this.alertController.create({
      header: 'Tem certeza?',
      message: 'Isso apagará todos os dados de itens e pessoas',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Apagar',
          handler: () => (this.people.wipe(), this.item.wipe())
        }
      ]
    });

    await alert.present();
  }

}
