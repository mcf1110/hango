import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Item, ItemsService } from './items.service';
import { PeopleService, Person } from './people.service';

// helpers
type KeysMatching<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];
const add = (a: number, b): number => a + b;
const sum = <A, P extends KeysMatching<A, number>>
  (list: A[], prop: P) => list.map(i => i[prop]).reduce(add, 0);

interface Summary {
  total: number;
  totalWithTip: number;
}

interface PersonWithIndividualValue extends Person {
  items: (Item & { individualValue: number })[]
}

export interface Report {
  summary: Summary;
  people: (PersonWithIndividualValue & Summary)[];
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private peopleService: PeopleService,
    private itemService: ItemsService
  ) { }

  public report$: Observable<Report> =
    combineLatest([this.peopleService.all$, this.itemService.all$]).pipe(
      map(
        ([ps, is]) => {
          const people = ps.map(p => {
            const items = is
              .filter(i => i.people.includes(p.id))
              .map(i => ({ ...i, individualValue: i.value / i.people.length }));
            const total = sum(items, 'individualValue');
            return ({ ...p, items, total, totalWithTip: total * 1.1 });
          });
          const summary = {
            total: sum(people, 'total'),
            totalWithTip: sum(people, 'totalWithTip'),
          };
          return { summary, people };
        }

      )
    );
}
