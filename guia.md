## Guia Discord.js Bot
# Esta guia es para iniciantes o iniciar
> Iniciar en el bot
```js
const Discord = require('discord.js'); // Requerimos discord.js (npm i --s discord.js)
const Client = new Discord.Client() // Creamos el cliente
Client.login('Tu-Token') // Nos logeamos
```
# Eventos
## Eventos basicos para un bot
> Ready
```js
client.on("ready", () => { 
console.log('Lo que quieres que diga cuando se encidenda')
})
```
