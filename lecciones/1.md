# Guia Discord.js Bot
## Esta guia es para iniciantes o iniciar recuerda que necesitas node.js 
> Iniciar en el bot
```js
const Discord = require('discord.js'); // Requerimos discord.js (npm i --s discord.js)
const Client = new Discord.Client() // Creamos el cliente
const prefix = "TU-PREFIX" // Nos servira para despues
Client.login('Tu-Token') // Nos logeamos
//Abren node y hacen node archivo.js
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
## Explicacion de como funciona:
```js
client.on("message",/* Cuando detecta un mensaje */ (message) => { /*Ejecutamos codigo*/})
```
# Sobre message
> Sus propiedades basicas
> Para usar la propiedad usa message.<propiedad>
- channel // El canal donde se mando el mensaje
- author // Usuario que envio el mensaje
- guild // Servidor donde se envio el mensaje

# Usando usuario
```js
if(comando === 'avatar') { 
const usuario = message.mentions.users.first() || message.author // Tomamos al primer usuario mencionado o al autor
message.channel.send(usuario.displayAvatarURL()) // Enviamos el avatar
}
```
# Usando miembro
```js
if(comando === 'entrada') {
const miembro = message.mentions.members.first() || message.member // Tomamos al primer miembro mencionado o al autor
message.channel.send(miembro.joinedAt.toLocateString()) } // Enviamos cuando entro
```
# Diferencias entre Usuario y Miembro
> Usuario : El usuario es la cuenta de un usuario es decir tiene cosas como avatar o nombre
- Propiedades basicas:
- username // Nombre de usuario de un usuario ejemplo: ILuck
- avatar // Avatar un usuario (para conseguirlo usa displayAvatarURL)
- discriminathor // Son los 4 numeros de identificador ejemplo: 2060
- tag // Muestra el nombre completo ejemplo: ILuck#2060
- createdAt // Cuando se creo la cuenta
> Miembro : El miembro es el miembro de un servidor es decir que tiene fecha de entrada o se puede kickear
- Propiedades Basicas
- bannable // Muestra si es baneable por el bot
- kickeable // Muestra si es kickeable por el bot
- displayName // Muestra su nombre en el servidor
- displayHexColor // Muestra su color en hex
