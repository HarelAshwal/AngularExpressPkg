import opn = require("opn");

import { WebServer } from "./WebServer";
import { Sockets } from "./Sockets";
import { IndexRouter } from "./IndexRouter";
import { UdpServer } from "./Udp/UdpServer";

export class AppServices {
    constructor(public ListeningIpAddress: string = "192.168.0.20") {
        this.Init();
    }

    static webServer: WebServer;
    static udpServer: UdpServer;
    static socketsServer: Sockets;

    Init() {
        AppServices.webServer = WebServer.bootstrap();
        AppServices.webServer.start();

        opn("http://localhost:3000");

        // Udp server 
        AppServices.udpServer = new UdpServer(161, this.ListeningIpAddress);

        // socket server
        AppServices.socketsServer = new Sockets(AppServices.webServer.server, AppServices.webServer.port);
    }



}