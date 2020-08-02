import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PeopleService, Person } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: 'people.page.html',
  styleUrls: ['people.page.scss'],
})
export class PeoplePage {

  public newPerson = {
    name: ''
  };
  public people = this.peopleService.all$;
  constructor(private alertController: AlertController, private peopleService: PeopleService) { }

  async addPerson() {
    if (!this.newPerson.name) {
      return;
    }
    const p = await this.peopleService.add(this.newPerson.name);
    if (p === false) {
      const a = await this.alertController.create({
        header: 'Já existe alguém com esse nome!',
        message: 'Considere colocar o sobrenome também.',
        buttons: ['OK']
      });
      a.present()
    }
    else {
      this.newPerson.name = '';
    }
  }
  editPerson(id, name) {
    console.log(name);
    // $ionicPopup.prompt({
    //   title: 'Mudar nome de ' + name
    //   , template: 'Por favor, entre com o novo nome'
    //   , inputType: 'text'
    //   , inputPlaceholder: 'Novo nome'
    //   , defaultText: name
    // }).then(function (newName) {
    //   if (newName) {
    //     this.people = People.update(id, newName);
    //   }
    // });
  }
  removePerson(id) {
    // var p = People.remove(id);
    // if (p) {
    //   this.people = p;
    // }
    // else {
    //   $ionicPopup.alert({
    //     title: 'Ops!'
    //     , template: 'Parece que essa pessoa já tem pelo menos um item!'
    //   });
    // }
  }
  showSheet(id, name) {
    // var hideSheet = $ionicActionSheet.show({
    //   buttons: [
    //     {
    //       text: 'Editar'
    //     }
    //   ]
    //   , destructiveText: 'Remover'
    //   , titleText: 'Opções'
    //   , cancelText: 'Cancelar'
    //   , buttonClicked: function () {
    //     this.editPerson(id, name);
    //     return true;
    //   }
    //   , destructiveButtonClicked: function () {
    //     this.removePerson(id);
    //     return true;
    //   }
    // });
  }

}
