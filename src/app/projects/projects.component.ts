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
      title: 'familyApp',
      stack: 'React | JavaScript | SCSS | Firebase | Cloud Functions',
      description: {
        en: 'An organizer app with many features such as calendar, journal, shopping list and a trained AI assisstant. Connect with your family and share important data.',
        de: 'Eine Organizer-App mit vielen Funktionen wie Kalender, Haushaltsbuch, Einkaufsliste und einem trainierten KI-Assistenten. Verbinde dich mit Familienmitgliedern und teile wichtige Daten.',
      },
      image: 'familyapp.png',
      link_live: 'https://familyapp.mike-meyer.dev',
      link_git: 'https://github.com/mikemeyer186/familyApp',
    },
    {
      title: 'Slack Clone',
      stack: 'Angular | TypeScript | SCSS | Firebase',
      description: {
        en: 'A clone of the popular chat application Slack. Create channels, send messages, upload files and more.',
        de: 'Ein Clone der beliebten Chat-Anwendung Slack. Erstelle Channels, sende Nachrichten, lade Dateien hoch und vieles mehr.',
      },
      image: 'slackclone.png',
      link_live: 'https://slackclone.mike-meyer.dev',
      link_git: 'https://github.com/mikemeyer186/slackclone',
    },
    {
      title: 'Join',
      stack: 'JavaScript | HTML | CSS',
      description: {
        en: 'Task manager inspired by the Kanban system. Create and organize tasks by drag and drop, assign other users, set due dates and manage your contacts.',
        de: 'Ein Aufgabenmanager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag and Drop, weise Aufgaben Benutzern zu, setze Fälligkeitsdaten und verwalte deine Kontakte.',
      },
      image: 'join.png',
      link_live: 'https://join.mike-meyer.dev/index.html',
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
      link_live: 'https://sharkie.mike-meyer.dev/index.html',
      link_git: 'https://github.com/mikemeyer186/sharkie',
    }
  ];
}
