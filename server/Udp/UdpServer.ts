import dgram = require("dgram");
import { EventEmitter } from "events";
var Dequeue = require('dequeue');

export class UdpServer extends EventEmitter {

    //  packageHandler: PacketHandler;

    constructor(public Port: number, public IpAddress: string = "127.0.0.1") {
        super();
        // this.packageHandler = new PacketHandler(calibrationMap);
        // this.packageHandler.on('OnFrameCaptured', (frame) => {
        //     this.emit('OnFrameCaptured', frame);
        // })
    }

    IsServerListening: boolean = false;

    Start() {
        this.udpserver = dgram.createSocket("udp4");
        this.udpserver.bind(this.Port, this.IpAddress);

        this.FIFO = new Dequeue();
        var test = this.FIFO.length;
        this.fetcher();

        this.udpserver.on("message",
            (msg, rinfo) => {
                this.FIFO.push(msg);
            });

        console.log("UDP Server Listening on " + this.IpAddress + ":" + this.Port);
        this.IsServerListening = true;
    }

    Stop() {
        this.udpserver.close();
        this.IsServerListening = false;
        console.log("UDP Server Stopped on " + this.IpAddress + ":" + this.Port);
    }

    udpserver: dgram.Socket;
    FIFO = new Dequeue();

    fetcher() {
        while (this.FIFO.length > 0) {
            var data = this.FIFO.shift() as Buffer;
            //     console.log("recived packet");
            //            this.ProcessPacket([...data]);
        }
        setImmediate(() => { this.fetcher() }); //make this function continuously run
    }

    ProcessPacket(data: number[]) {
        //      var dataPacket = DataPacket.Parse(data);
        //    console.log(dataPacket.PacketHeader.FrameIndex);
        //    this.packageHandler.ProcessOpsysPacket(dataPacket);
    }
}