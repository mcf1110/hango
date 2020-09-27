import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { Item, ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: 'edit-item.page.html',
  styleUrls: ['edit-item.page.scss'],
})
export class EditItemPage {

  constructor(private itemsService: ItemsService, private navCtrl: NavController, private route: ActivatedRoute) { }

  public currentItem$ = this.route.paramMap.pipe(
    map(pm => +(pm.get('id') ?? 0)),
    distinctUntilChanged(),
    filter(id => id > 0),
    switchMap(id => this.itemsService.find(id)),
  )

  public handleSave(newItem: Item) {
    this.itemsService.update(Number(this.route.snapshot.paramMap.get('id')), newItem);
    this.navCtrl.back();
  }
}
