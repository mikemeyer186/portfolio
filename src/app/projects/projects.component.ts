import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Join',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban system. Create and organize tasks by drag and drop, assign other users and set due dates.',
      image: 'join.png',
      link_live: '',
      link_git: 'https://github.com/mikemeyer186/join',
    },
    {
      title: 'Sharkie',
      stack: 'JavaScript | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      image: 'sharkie.png',
      link_live: '',
      link_git: 'https://github.com/mikemeyer186/sharkie',
    },
    {
      title: 'Ring of Fire',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Digital version of the popular card game. Play it with your friends on multiple devices at the same time.',
      image: 'ringoffire.png',
      link_live: '',
      link_git: 'https://github.com/mikemeyer186/ringoffire',
    },
  ];
}
