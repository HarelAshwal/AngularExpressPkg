import dgram = require('dgram');

export class UdpClient {
    constructor(public Port: number) { }

    client = dgram.createSocket('udp4');

    HOST = '127.0.0.1';

    async SendSync(message: Buffer) {
        return new Promise((resolve) => {
            this.client.send(message, 0, message.length, this.Port, this.HOST, (err, bytes) => {
                if (err) throw err;
                //  console.log('UDP message sent to ' + this.HOST + ':' + this.Port);
                resolve();
                // this.client.close();
            });
        });
    }

    SendAsync(message: Buffer) {
        this.client.send(message, 0, message.length, this.Port, this.HOST, (err, bytes) => {
            if (err) throw err;
            console.log('UDP message sent to ' + this.HOST + ':' + this.Port);
            // this.client.close();
        });
    }
}