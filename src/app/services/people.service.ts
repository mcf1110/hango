import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemsService } from './items.service';

export interface Person {
  name: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private storage: Storage, private items: ItemsService) {
    this.storage.get('People').then(x => x ?? []).then(p => this.innerAll$.next(p));
  }

  private innerAll$ = new BehaviorSubject<Person[]>([]);
  public all$ = this.innerAll$.asObservable();
  public allAlphatically$ = this.all$.pipe(
    map(ps => ps.sort((a, b) => a.name.localeCompare(b.name)))
  );

  private all() {
    return this.innerAll$.getValue();
  }

  commit(p: Person[]) {
    this.innerAll$.next(p);
    this.storage.set('People', p);
  }

  findByName(name: string) {
    const people = this.all();
    return people.find(p => p.name === name);
  }

  async add(name: string) {
    if (this.findByName(name)) {
      return false;
    }
    const people = this.all();
    const person = {
      id: people.length > 0 ? Math.max(...people.map(p => p.id)) + 1 : 1,
      name
    };
    const newPeople = [person, ...people]
    this.commit(newPeople);
    return true;
  }

  update(id: number, name: string) {
    const people = this.all();
    const newPeople = people.filter(p => p.id !== id);
    this.commit([...newPeople, { id, name }]);
    return true;
  }

  remove(id: number) {
    if (this.items.hasPerson(id)) {
      return false;
    }
    const people = this.all();
    this.commit(people.filter(p => p.id !== id));
    return true;
  }

  wipe() {
    this.commit([]);
  }
}
