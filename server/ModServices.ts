import opn = require("opn");

import { WebServer } from "./WebServer";
import { Sockets } from "./Sockets";
import { IndexRouter } from "./IndexRouter";
import { UdpServer } from "./Udp/UdpServer";

export class ModServices {
    constructor(public ListeningIpAddress: string = "192.168.0.20") {
        this.Init();
    }

    static webServer: WebServer;
    static udpServer: UdpServer;
    static socketsServer: Sockets;

    Init() {
        ModServices.webServer = WebServer.bootstrap();
        ModServices.webServer.start();

        opn("http://localhost:3000");

        // Udp server 
        ModServices.udpServer = new UdpServer(161, this.ListeningIpAddress);
        // AdarServices.udpServer.on('OnFrameCaptured', (frame) => {
        //     Sockets.SendFrameToClient(frame);
        //     //  console.log('server new frame ' + frame);
        // });

        // default off
        //  AdarServices.udpServer.Start();

        // socket server
        ModServices.socketsServer = new Sockets(ModServices.webServer.server, ModServices.webServer.port);
    }



}