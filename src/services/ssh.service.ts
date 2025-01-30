import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SshService {
  constructor() {}

  connectToSSH(formValue: any) {
    if (window.electronAPI) {
      const sshConfig = environment.sshConfig;

      window.electronAPI.connectSSH(sshConfig, formValue);
    }
  }

  listenToSSHStatus(callback: (status: string) => void) {
    if (window.electronAPI) {
      window.electronAPI.onSSHStatus(callback);
    }
  }

  closeSSH() {
    if (window.electronAPI) {
      window.electronAPI.closeSSH();
    }
  }
}
