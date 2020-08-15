import { Component } from '@angular/core';
import { ItemsService, Item } from 'src/app/services/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: 'add-item.page.html',
  styleUrls: ['add-item.page.scss'],
})
export class AddItemPage {
  constructor(private addItemService: ItemsService) {

  }

  public addItem$ = this.addItemService.allAlphatically$;
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
    this.addItemService.remove(id)
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
