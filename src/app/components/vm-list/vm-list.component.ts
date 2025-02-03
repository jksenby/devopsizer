import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { finalize } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddServerDialogComponent } from '../add-server-dialog/add-server-dialog.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-vm-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CardModule,
    ToastModule,
    MessageModule,
  ],
  templateUrl: './vm-list.component.html',
  styleUrl: './vm-list.component.scss',
  providers: [DialogService, MessageService],
})
export class VmListComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  public isLoading: boolean = true;

  constructor(
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
  }

  public openAddHost(value?: any) {
    this.ref = this.dialogService.open(AddServerDialogComponent, {
      header: 'Add Server',
      focusOnShow: false,
      closeOnEscape: true,
      data: value,
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
          summary: 'Host added',
        });

      }
    });
  }

  public hosts = [];
}
