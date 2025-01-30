import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText,
  IonItem,
  IonList,
  IonInput,
  IonTextarea
} from '@ionic/angular/standalone';
import { SshService } from 'src/services/ssh.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonText,
    FormsModule,
    ReactiveFormsModule,
    IonItem,
    IonList,
    IonInput,
    IonTextarea
  ],  
})
export class Tab1Page {
  sshStatus: string = 'Not Connected';
  form: FormGroup;
  constructor(private _sshService: SshService, private _fb: FormBuilder, private zone: NgZone) {
    this.form = this._fb.group({
      fileName: _fb.control(''),
      fileContent: _fb.control('')
    })
  }

  connectSSH(result: any) {
    this._sshService.connectToSSH(result);
    this.getSSHStatus();
    this.sshStatus = this.sshStatus + '!!';
  }

  disconnectSSH() {
    this._sshService.closeSSH();
    this.getSSHStatus();
  }

  getSSHStatus() {
    this._sshService.listenToSSHStatus((status: any) => {
      this.zone.run(() => {
        this.sshStatus = status.message;
      })
    });
  }
}
