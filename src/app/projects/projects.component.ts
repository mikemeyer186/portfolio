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
      title: 'Goslar App Widget',
      stack: 'Fullstack | React | Node | Docker',
      description: {
        en: 'A widget within the mobile Goslar app that displays the current fuel prices at gas stations in the Goslar district. The prices are continuously updated and provided to the app via an API endpoint. The Goslar app will be available in app stores at the end of 2025.',
        de: 'Ein Widget innerhalb der mobilen Goslar App, dass die aktuellen Preise an den Tankstellen im Landkreis Goslar anzeigt. Die Preise werden kontinuierlich aktualisiert und über einen API-Endpunkt für die Appp bereitgestellt. Die Goslar App wird Ende 2025 in den App-Stores verfügbar sein.',
      },
      image: 'goslar-app-widget.png',
      link_live: 'https://tanken-in-goslar.de',
      link_git: 'https://github.com/mikemeyer186/goslar-app',
      link_info: 'https://machmit.goslar.de/wasapp',
    },
    {
      title: 'Butterhanne App',
      stack: 'Angular | PWA | Firebase | Messaging',
      description: {
        en: 'An employee app for a restaurant business featuring a shift schedule, vacation requests, news, and chat functionality. The app is used by around 80 employees and additional features are planned.',
        de: 'Eine Mitarbeiter-App für einen Gastronomie-Betrieb mit Schichtplan, Urlaubsanträgen, News und Chatfunktion. Die App wird von ca. 80 Mitarbeitern genutzt und weitere Funktionen sind in Planung.',
      },
      image: 'butterhanne.png',
    },
    {
      title: 'familyApp',
      stack: 'React | JavaScript | SCSS | Firebase | Cloud Functions',
      description: {
        en: 'An organizer app (PWA) with many features such as calendar, journal, shopping list and a trained AI assisstant. Connect with your family and share important data.',
        de: 'Eine Organizer-App (PWA) mit vielen Funktionen wie Kalender, Haushaltsbuch, Einkaufsliste und einem trainierten KI-Assistenten. Verbinde dich mit Familienmitgliedern und teile wichtige Daten.',
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
  ];
}
