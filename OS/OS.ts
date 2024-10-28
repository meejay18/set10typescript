import OS from "node:os";

// OS ARCH
const myPcarch = OS.arch();
console.log(myPcarch);

// OS CPUS
const myPcCpu = OS.cpus();
console.log(myPcCpu);

// OS FREEMEMORY
const mypcMemory = OS.freemem();
console.log("My pc memory is", mypcMemory);

// OS HOMEDIR
const myPath = OS.homedir();
console.log("my directory is ", myPath);

// OS VERSION
const myPcVersion = OS.version();
console.log("my version is", myPcVersion);
// OS RELEASE
console.clear();
const myRelease = OS.release();
console.log(myRelease);

// OS PLATFORM
const myPlatform = OS.platform();
console.log(myPlatform);

// OS HOSTNAME
const hostName = OS.hostname();
console.log(hostName);

// OS NETWORK INTERFACE
const networkInterface = OS.networkInterfaces();
console.log("my pc network is ", networkInterface);

// OS MACHINE
const machine = OS.machine();
console.log(machine);

// OS TYPES
const types = OS.type();
console.log(types);

// OS UPTIME
const uptime = OS.uptime();
console.log(uptime);

// calculate space in PC
const checkMyspace = () => {
  let mem: number = (OS.freemem() / 1024) * 1024 * 1024;
  let totalMem: number = OS.totalmem() / (1024 * 1024 * 1024);

  console.log(`${parseFloat(totalMem.toFixed(2))} GB space remaining`);
};
checkMyspace();
