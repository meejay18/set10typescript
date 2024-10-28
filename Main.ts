import EventEmitter from "node:events";

class MyEmitter extends EventEmitter {}

let myEvent = new MyEmitter();
