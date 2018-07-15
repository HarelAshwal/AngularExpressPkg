
import { ModServices } from "./ModServices";

const argv = process.execArgv.join();
const isDebug = argv.includes('inspect') || argv.includes('debug');

var defaultListeningAddress = "127.0.0.1";

if (isDebug) {
    console.log("Debug mode on, listening to localhost");
    defaultListeningAddress = "127.0.0.1";
}

var modServices = new ModServices(defaultListeningAddress);









