import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[] = [];
  isFetching = false;
  private personListSubs: Subscription = new Subscription();

  constructor(private prsService: PersonsService) {
    this.prsService = prsService;
  }

  ngOnInit() {
    this.prsService.fetchPersons();
    this.personListSubs = this.prsService.personsChanged.subscribe(
      (persons: string[]) => {
        this.personList = persons;
        this.isFetching = false;
      }
    );
    this.isFetching = true;
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
