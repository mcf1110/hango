import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
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
  constructor
    (
      private alertController: AlertController,
      private peopleService: PeopleService,
      private actionSheetController: ActionSheetController,
  ) { }

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
      a.present();
    }
    else {
      this.newPerson.name = '';
    }
  }
  async editPerson(person: Person) {
    const alert = await this.alertController.create({
      header: 'Mudar nome de ' + person.name,
      buttons: ['OK'],
      inputs: [
        {
          name: 'name',
          label: 'Novo nome',
          placeholder: 'Novo nome',
          value: person.name
        }
      ]
    });

    await alert.present();
    const { data } = await alert.onDidDismiss();
    this.peopleService.update(person.id, data.values.name)
  }
  async removePerson(id: number) {
    const p = this.peopleService.remove(id);
    if (!p) {
      const alert = await this.alertController.create({
        header: 'Ops!',
        message: 'Parece que essa pessoa já tem pelo menos um item!',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
  async showSheet(person: Person) {
    console.log(person);
    const actionSheet = await this.actionSheetController.create({
      header: person.name,
      buttons: [{
        text: 'Remover',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.removePerson(person.id);
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          this.editPerson(person);
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
