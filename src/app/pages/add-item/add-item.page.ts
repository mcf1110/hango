import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Item, ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: 'add-item.page.html',
  styleUrls: ['add-item.page.scss'],
})
export class AddItemPage {

  constructor(private itemsService: ItemsService, private navCtrl: NavController) { }

  public initialItem = {
    name: '',
    value: 0,
    id: 0
  }

  public handleSave(newItem: Item) {
    this.itemsService.add(newItem);
    this.navCtrl.back();
  }
}
