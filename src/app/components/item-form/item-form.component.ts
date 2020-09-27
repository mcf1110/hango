import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, first, map } from 'rxjs/operators';
import { Item, ItemsService } from 'src/app/services/items.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent {
  @Output() save = new EventEmitter<Item>();
  @Input() item: Item;

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

  constructor(private peopleService: PeopleService) { }

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
    this.save.emit({
      ...this.item,
      people: [...this.selectedPeople]
    });
  }

}
