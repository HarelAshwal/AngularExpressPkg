import * as http from 'http';
import * as socketIo from 'socket.io';

export class Sockets {
    constructor(public server: http.Server, public port: number) {
        this.Init();
    }

    static io: SocketIO.Server;

    Init() {
        Sockets.io = socketIo(this.server);
        this.Listen();
    }

    Listen(): void {
        console.log("Websockets listens on " + this.port);
        Sockets.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);
            socket.on('message', (m) => {
                console.log('[server](message): %s', JSON.stringify(m));
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    // static SendMessageToClient(msg: Message) {
    //     Sockets.io.emit('message', msg);
    // }

    // static SendFrameToClient(frame: Frame) {
    //     Sockets.io.emit('frame', frame);
    // }
}