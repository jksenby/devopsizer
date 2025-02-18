import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TabsModule } from 'primeng/tabs'
import { DividerModule } from 'primeng/divider'
import { PanelModule } from 'primeng/panel'
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Terminal } from '@xterm/xterm';
import { ClipboardAddon } from '@xterm/addon-clipboard';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
  imports: [TabsModule, DividerModule, PanelModule, ButtonModule, AvatarModule],
  encapsulation: ViewEncapsulation.None
})
export class ServerComponent  implements OnInit, AfterViewInit {
  @ViewChild('terminal') terminalElement: ElementRef | null = null;
  @ViewChild('logs') logsElement: ElementRef | null = null;
  terminal: Terminal;
  logs: Terminal;
  currentLine: string = "";
  entries: string[] = [];

  constructor() { 
    this.terminal = new Terminal();
    this.logs = new Terminal();
    const clipboardAddon = new ClipboardAddon();
   this.terminal.loadAddon(clipboardAddon);
  }
  ngAfterViewInit(): void {
    this.terminal.open(this.terminalElement?.nativeElement);
    this.logs.open(this.logsElement?.nativeElement);
    this.terminal.write('\x1B[1;3;31mxterm.js\x1B[0m $ ')
    this.terminal.onKey(({key, domEvent}) => {
      if(domEvent.key === 'Enter' || domEvent.key === 'NumpadEnter') {
        this.entries.push(this.currentLine);
        this.terminal.writeln('');
        this.terminal.write('\x1B[1;3;31mxterm.js\x1B[0m $ ')
        this.promptLine();
      } else if(domEvent.key === 'Backspace') {
        if(this.currentLine) {
          this.currentLine = this.currentLine.slice(0, this.currentLine.length - 1);
          this.terminal.write('\b \b');
        }
      } else {
      this.currentLine += key;
      this.terminal.write(key)
  }
    });

  }

  promptLine() {
    if(this.currentLine) {
      var data = {method: 'command', command: this.currentLine};
      // send some data to the server
    }
  }

  ngOnInit() {
}

}
