import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  menuIsOpen: boolean = false;

  constructor() {}
}
