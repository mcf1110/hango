import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

export interface Person {
  name: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private storage: Storage) {
    this.storage.get('People').then(x => x ?? []).then(p => this.innerAll$.next(p));
  }

  private innerAll$ = new BehaviorSubject<Person[]>([]);
  public all$ = this.innerAll$.asObservable();

  save(p: Person[]) {
    this.innerAll$.next(p);
    this.storage.set('People', p);
  }
  findByName(name: string) {
    const people = this.innerAll$.getValue();
    return people.find(p => p.name === name);
  }
  async add(name: string) {
    if (this.findByName(name)) {
      return false;
    }
    const people = this.innerAll$.getValue();
    const person = {
      id: people.length > 0 ? people[people.length - 1].id + 1 : 1,
      name
    };
    const newPeople = [person, ...people]
    this.save(newPeople);
    return people;
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
