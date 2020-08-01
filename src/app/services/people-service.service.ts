import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  constructor(private storage: Storage) { }

  async all() {
    return (await this.storage.get('People')) || [];
  }
  save(p) {
    this.storage.set('People', JSON.stringify(p));
  }
  add(n) {
    // if (this.findByName(n)) {
    //   return false;
    // }
    // else {
    //   var people = this.all();
    //   var person = {
    //     id: people.length > 0 ? people[people.length - 1].id + 1 : 1
    //     , name: n
    //   }
    //   people.push(person);
    //   this.save(people);
    //   return people;
    // }
  }
  getIndex(id) {
    // return this.all().binarySearch(id);
  }
  get(id) {
    // var index = this.getIndex(id);
    // return index >= 0 ? this.all()[index] : {};
  }
  update(id, newName) {
    // var people = this.all();
    // var index = this.getIndex(id);
    // people[index].name = newName;
    // this.save(people);
    // return people;
  }
  findByName(name) {
    // var people = this.all();
    // for (var i = 0; i < people.length; i++) {
    //   if (people[i].name == name) {
    //     return true;
    //   }
    // }
    // return false;
  }
  remove(id) {
    // var people = this.all();
    // if (Items.findPerson(id)) {
    //   return false;
    // }
    // var index = this.getIndex(id);
    // people.splice(index, 1);
    // this.save(people);
    // return people;
  }
}
