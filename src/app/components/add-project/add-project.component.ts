import { Component, OnInit } from '@angular/core';
import {Button} from "primeng/button";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {Toast} from "primeng/toast";
import {FloatLabelModule} from "primeng/floatlabel";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-add-project',
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.scss'],
    imports: [
        Button,
        FormsModule,
        InputText,
        ReactiveFormsModule,
        Toast,
        FloatLabelModule
    ]
})
export class AddProjectComponent {
  public serverForm: FormGroup;
  public invalidForm: boolean = false;
  public host: any;

  constructor(
    private _fb: FormBuilder,
    private dialogRef: DynamicDialogRef,
    private messageService: MessageService,
    private config: DynamicDialogConfig,
    private dialogService: DialogService
  ) {
    this.host = this.config.data;
    this.serverForm = this._fb.group({
      name: this._fb.control(this.host?.name ?? null),
      ip1: this._fb.control(this.host?.ip1 ?? null),
      project: this._fb.control(this.host?.project ?? null),
      ssh_type: this._fb.control(this.host?.ssh_type ?? null),
      ssh_key: this._fb.control(this.host?.ssh_key ?? null),
      login: this._fb.control(this.host?.login ?? null),
      password: this._fb.control(this.host?.password ?? null),
    });
  }

  public onSubmit() {
    if (this.serverForm.invalid) {
      this.invalidForm = true;
      return;
    }

    const body = {
      id: this.host?.id ?? undefined,
      name: this.serverForm.get('name')?.value,
      ip1: this.serverForm.get('ip1')?.value,
      project: this.serverForm.get('project')?.value,
      ssh_type: this.serverForm.get('ssh_type')?.value,
      ssh_key: this.serverForm.get('ssh_key')?.value,
      login: this.serverForm.get('login')?.value,
      password: this.serverForm.get('password')?.value,
    };

  }

  public onDelete() {}

}
