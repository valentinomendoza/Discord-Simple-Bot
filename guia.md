## Guia Discord.js Bot
# Esta guia es para iniciantes o iniciar
> Iniciar en el bot
```js
const Discord = require('discord.js'); // Requerimos discord.js (npm i --s discord.js)
const Client = new Discord.Client() // Creamos el cliente
const prefix = "TU-PREFIX" // Nos servira para despues
Client.login('Tu-Token') // Nos logeamos
```
# Eventos
## Eventos basicos para un bot
> Ready
```js
client.on("ready", () => { // Cuando este listo (encendidio)
console.log('Lo que quieres que diga cuando se encidenda') // Logea eso en la consola
})
```
> message
```js
client.on("message", (message) => { // Cuando envian un mensaje
if(message.author.bot) return; // Si el autor es un bot retornamos nada
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const comando = args.shift().toLowerCase();
})
```
> Como hacer comandos (dentro del evento de message)
```js
if(comando === 'hola') { 
message.channel.send('hola!')}
```
> Asi deberia quedar 
```js
client.on("message", (message) => { // Cuando envian un mensaje
if(message.author.bot) return; // Si el autor es un bot retornamos nada
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const comando = args.shift().toLowerCase();
if(comando === 'hola'){ 
message.channel.send('hola') }
})
```
