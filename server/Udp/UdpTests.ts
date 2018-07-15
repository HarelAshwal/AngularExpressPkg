import { UdpServer } from "./UdpServer";
import { UdpClient } from "./UdpClient";
import { IndexRouter } from "../IndexRouter";




// var server = new UdpServer(2020, "127.0.0.1", IndexRouter.GetAdarConfig().mapConfig.calibrationMap);
// server.Start();
// server.on('OnFrameCaptured', (frame: Frame) => {
//     console.log(frame);
//     console.log('server new frame');
// })

var client = new UdpClient(2020);
//LoadPcap("C:/Users/harel.ashwal/Downloads/test1.pcap");
//LoadPcap("C:/Users/harel.ashwal/Desktop/new_pcap_test.pcap");


