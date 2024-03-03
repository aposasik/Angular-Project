import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  persons = ['Max', 'Manu', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
  }
}
