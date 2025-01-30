export {};

declare global {
  interface Window {
    electronAPI: {
      connectSSH: (sshConfig: any, formValue: any) => void;
      closeSSH: () => void;
      onSSHStatus: (callback: (status: string) => void) => void;
    };
  }
}
