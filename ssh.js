const { readFileSync } = require('fs');

const {Client} = require('ssh2');

const conn = new Client();
conn.on('ready', () => {
    console.log('Client :: ready');
    conn.forwardIn('localhost', 4200, (err) => {
        if (err) throw err;
        console.log('Listening for connections on server on port 4200!');
      });
  })
  .on('tcp connection', (info, accept, reject) => {
    console.log('TCP :: INCOMING CONNECTION:');
    console.dir(info);
    accept().on('close', () => {
      console.log('TCP :: CLOSED');
    }).on('data', (data) => {
      console.log('TCP :: DATA: ' + data);
    }).end([
      'HTTP/1.1 404 Not Found',
      'Date: Thu, 15 Nov 2012 02:07:58 GMT',
      'Server: ForwardedConnection',
      'Content-Length: 0',
      'Connection: close',
      '',
      ''
    ].join('\r\n'));
  })
  .connect({
    host: '37.27.81.10',
    port: 22,
    username: 'root',
    privateKey: readFileSync('/Users/jksenby/.ssh/id_ed25519'),
    passphrase: 'jksenby'
  });