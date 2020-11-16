const smile = require('discord.js') // Requerimos discord.js
const happy = new smile.Client() // Creamos el cliente
const prefix = "Tu-prefix" //Definimos nuestro prefix
happy.login('Tu token'); // Iniciamos sesion en el bot
client.on("ready", () => { // Evento al iniciar el bot
  console.log('Estoy encendido') // Logeamos en la consola
}) //Cerramos
happy.on("message", (message) => { // Evento de message
  if(message.author.bot) // Si el mensaje es de un bot retornamos
  const args = message.content.slice(prefix.length).trim().split(/ +/g); // Definimos args
  const comando = args.shift().toLowerCase(); // Definimos comando
if(comando === 'hi') {  // Si el comando que usan es hi
message.channel.send('Hola!') } // Enviamos el mensaje al canal
if(comando === 'bye') {  // Si el comando es bye
message.channel.send('Adios ;(') } // Enviamos un mensaje al canal
// <----------------------------------USO DE USUARIOS-------------------------->
if(comando === 'coockie') {  // Si el comando es coockie
const user = message.mentions.users.first() // Tomamos al usuario que usamos primero!
message.channel.send(`${message.author.username} Le ha dado una galleta a ${user.username}`) }
// <---------------------------------USO DE MIEMBROS--------------------------->
if(comando === 'joinedat') {  // Si el comando es joinedat
  const miembro = message.mentions.members.first() || message.member; // Tomamos al miembro que menciono primer
  message.channel.send(miembro.joinedAt.toLocateString()) }// ENviamos cuando entro
// <---------------------------------USO DE PERMISOS--------------------------->
if(comando === 'kick') { // Si el comando es kick
const miembro = message.mentions.members.first() // Tomamos al miembro que menciono primero
if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('No tienes permisos') // Si no tiene permisos devuelve
try { miembro.kick() } catch(err) { message.reply('Ha ocurrido un error :( ') } } // Kickeamos
})

if(comando === 'avatar') {
const usuario = message.mentions.members.first() || message.author; // Decimos que usuario es igual a la primera mencion dentro del mensaje, si no se cumple retorna el autor del mensaje

message.channel.send(`Este es el Avatar URL ${usuario.displayAvatarURL()}`) // Entonces ya definido 'usuario' añadimos .displayAvatarURL() y nos retornara un String y lo enviamos
}
