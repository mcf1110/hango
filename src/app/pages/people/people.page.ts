import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-people',
  templateUrl: 'people.page.html',
  styleUrls: ['people.page.scss'],
})
export class PeoplePage implements OnInit {

  public newPerson = {
    name: ''
  };
  public people = [];
  constructor(private alertController: AlertController) { }
  ngOnInit(): void {
    // this.people = People.all();
    console.log('ola');
  }
  addPerson() {
    // if (!this.newPerson.name) {
    //   return;
    // }
    // var p = People.add(this.newPerson.name);
    // if (p == false) {
    //   $ionicPopup.alert({
    //     title: 'Já existe alguém com esse nome!'
    //     , template: 'Considere colocar o sobrenome também.'
    //   });
    // }
    // else {
    //   this.people = p;
    //   this.newPerson.name = '';
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
