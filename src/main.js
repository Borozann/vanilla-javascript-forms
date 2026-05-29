import { Session } from "./js/Session";

const mySession = new Session();
await mySession.start();

console.log('sessão');
console.log(mySession);

//Pegamos o IP
console.log(mySession.user.getIp());


//Pegar Localização, tenta aí
console.log(mySession.user.getLocation());
// foi

console.log(mySession.weather.getTemperature());
