import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item {
  id: number;
  name: string;
  value: number;
  people: number[];
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private storage: Storage) {
    this.storage.get('Items').then(x => x ?? []).then(p => this.innerAll$.next(p));
  }

  private innerAll$ = new BehaviorSubject<Item[]>([]);
  public all$ = this.innerAll$.asObservable();
  public allAlphatically$ = this.all$.pipe(
    map(ps => ps.sort((a, b) => a.name.localeCompare(b.name)))
  );

  private all() {
    return this.innerAll$.getValue();
  }

  commit(p: Item[]) {
    this.innerAll$.next(p);
    this.storage.set('Items', p);
  }

  findByName(name: string) {
    const items = this.all();
    return items.find(p => p.name === name);
  }

  async add(data: Omit<Item, 'id'>) {
    const items = this.all();
    const item = {
      ...data,
      id: items.length > 0 ? Math.max(...items.map(p => p.id)) + 1 : 1,
    };
    const newItems = [item, ...items];
    this.commit(newItems);
    return true;
  }

  getIndex(id) {
    // return this.all().binarySearch(id);
  }

  find(id: number) {
    return this.innerAll$.pipe(
      map(all => ({ ...all.find(i => i.id === id) }))
    );
  }

  update(id: number, data: Omit<Item, 'id'>) {
    const items = this.all();
    const unchanged = items.filter(p => p.id !== id);
    this.commit([...unchanged, { ...data, id }]);
    return true;
  }

  remove(id: number) {
    const items = this.all();
    this.commit(items.filter(p => p.id !== id));
    return true;
  }
}
