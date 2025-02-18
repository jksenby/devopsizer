import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { RouterModule } from '@angular/router';
import { ProjectsService } from 'src/services/projects.service';
import { finalize } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { AddProjectComponent } from '../add-project/add-project.component';


@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardModule, PanelModule, ButtonModule, RouterModule, ChipModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: [ProjectsService, DialogService, MessageService]
})
export class ProjectsComponent implements OnInit {
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;

  constructor(private _projectsService: ProjectsService,private dialogService: DialogService,
      private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.isLoading = true;
    // this._projectsService.getAllProjects().pipe(finalize(() => this.isLoading = false)).subscribe({
    //   next: (projects: any) => {
    //     this.projects = projects;
    //   }
    // })
  }

  public onAddProject() {
    this.ref = this.dialogService.open(AddProjectComponent, {
      header: 'Add Project',
      focusOnShow: false,
      closeOnEscape: true,
      modal: true,
      width: '50vw',
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });

    this.ref.onClose.subscribe((result) => {
      if (result) {
        this.messageService.add({
          severity: 'success',
          summary: 'Project added',
        });
      }
    });
  }

  projects: any[] = [
    {
      name: 'default_project',
      user: 'Kanat',
      servers: 34
    },
    {
      name: 'happycake',
      user: 'Didar, Kanat',
      servers: 12
    },
  ];
}
