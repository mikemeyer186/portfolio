import { Component } from '@angular/core';
import * as AOS from 'aos';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(public service: ServiceService) {}

  ngOnInit() {
    AOS.init();
  }

  projects = [
    {
      title: 'Join',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: {
        en: 'Task manager inspired by the Kanban system. Create and organize tasks by drag and drop, assign other users, set due dates and manage your contacts.',
        de: 'Ein Aufgabenmanager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag and Drop, weise Aufgaben Benutzern zu, setze Fälligkeitsdaten und verwalte deine Kontakte.',
      },
      image: 'join.png',
      link_live: '',
      link_git: 'https://github.com/mikemeyer186/join',
    },
    {
      title: 'Sharkie',
      stack: 'JavaScript | HTML | CSS | OOP',
      description: {
        en: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
        de: 'Ein einfaches Jump-and-Run Spiel, dass auf einem objektorientierten Ansatz basiert. Hilf Sharkie dabei, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.',
      },
      image: 'sharkie.png',
      link_live: '',
      link_git: 'https://github.com/mikemeyer186/sharkie',
    },
    {
      title: 'Ring of Fire',
      stack: 'Angular | TypeScript | SCSS | Firebase',
      description: {
        en: 'Digital version of the popular card game. Play it with your friends on multiple devices at the same time.',
        de: 'Digitale Version des beliebten Kartenspiels. Spiele es mit deinen Freunden online auf mehreren Geräten gleichzeitig.',
      },
      image: 'ringoffire.png',
      link_live: '',
      link_git: 'https://github.com/mikemeyer186/ringoffire',
    },
  ];
}
