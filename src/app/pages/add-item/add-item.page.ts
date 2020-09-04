import { Component } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { PeopleService } from 'src/app/services/people.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap, debounceTime, first } from 'rxjs/operators';

@Component({
  selector: 'app-add-item',
  templateUrl: 'add-item.page.html',
  styleUrls: ['add-item.page.scss'],
})
export class AddItemPage {
  private search$ = new BehaviorSubject('');
  private debouncedSearch$ = this.search$.pipe(
    debounceTime(200),
    map(s => s.toLocaleLowerCase()),
  );
  public people$ = combineLatest([
    this.debouncedSearch$,
    this.peopleService.allAlphatically$
  ]).pipe(
    map(([s, ps]) => ps.filter(p => p.name.toLocaleLowerCase().includes(s)))
  );
  public isSearchEmpty$ = this.debouncedSearch$.pipe(
    map(s => s.length === 0)
  );

  public selectedPeople: Set<number> = new Set();
  public item = {
    name: '',
    value: 0
  }

  constructor(
    private itemService: ItemsService,
    private peopleService: PeopleService
  ) {

  }

  public searchChanged(search: string) {
    this.search$.next(search);
  }

  public async checkAll(checked: boolean) {
    if (!checked) {
      return this.selectedPeople.clear();
    }
    const people = await this.peopleService.allAlphatically$.pipe(first()).toPromise();
    people.forEach(p => this.selectedPeople.add(p.id));
  }

  public toggle(include: boolean, personId: number) {
    if (include) {
      return this.selectedPeople.add(personId);
    }
    this.selectedPeople.delete(personId);
  }

  public submit() {
    const people = [...this.selectedPeople]
    console.log({
      ...this.item,
      people
    });
  }
}
