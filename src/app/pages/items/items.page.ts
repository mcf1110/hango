import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

import { Item, ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss'],
})
export class ItemsPage {
  constructor(
    private itemsService: ItemsService,
    private actionSheetController: ActionSheetController,
    private router: Router
  ) {

  }

  public items$ = this.itemsService.allAlphatically$;

  public editItem(i: Item) {
    this.router.navigate(['/home/items/edit', i.id]);
  }

  public duplicateItem(i: Item) {
    this.itemsService.add(i);
  }
  public removeItem(id: number) {
    this.itemsService.remove(id);
  }
  public async showSheet(item: Item) {
    const actionSheet = await this.actionSheetController.create({
      header: item.name,
      buttons: [{
        text: 'Remover',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.removeItem(item.id);
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          this.editItem(item);
        }
      }, {
        text: 'Duplicar',
        icon: 'duplicate',
        handler: () => {
          this.duplicateItem(item);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }]
    });

    await actionSheet.present();
  }
}
