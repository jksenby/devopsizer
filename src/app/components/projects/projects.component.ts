import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardModule, PanelModule, ButtonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'happy.test.app',
    },
    {
      name: 'apple.test.app',
    },
    {
      name: 'node.test.app',
    },
    {
      name: 'panel.test.app',
    },
  ];
}
