import { Component } from '@angular/core';
import { ItemsService, Item } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss'],
})
export class ItemsPage {
  constructor(private itemsService: ItemsService) {

  }

  public items$ = this.itemsService.allAlphatically$;
  public addItem() {
    // $state.go('tab.add-item')
  }
  public editItem(i) {
    // $state.go('tab.edit-item/{id:int}', {
    //   id: i
    // });
  }
  public duplicateItem(i) {
    // $state.go('tab.add-item/{id:int}', {
    //   id: i
    // });
  }
  public removeItem(id: number) {
    this.itemsService.remove(id)
  }
  public showSheet(item: Item) {
    //   var hideSheet = $ionicActionSheet.show({
    //     buttons: [
    //       {
    //         text: 'Editar'
    //       }, {
    //         text: 'Duplicar'
    //       }
    //     ]
    //     , destructiveText: 'Remover'
    //     , titleText: 'Opções'
    //     , cancelText: 'Cancelar'
    //     , buttonClicked: function (index) {
    //       if (index == 0) {
    //                 public editItem(id);
    //   }
    //             if (index == 1) {
    //                 public duplicateItem(id);
    //   }
    //   return true;
    // }
    //         , destructiveButtonClicked: function () {
    //             public removeItem(id);
    //   return true;
    // }
    // });
  }
}
