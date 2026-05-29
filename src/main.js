import { Session } from "./js/Session";

const mySession = new Session();
await mySession.start();

console.log(mySession);
