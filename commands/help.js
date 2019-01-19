const { MessageEmbed } = require('discord.js');

exports.run = (client, msg, args) => {
  const embed = new MessageEmbed()
     .setTitle('Commands:')
     .addField('help','This message.')
     .addField('ping','Pong!')
     .addField('stats','Get the status of this bot.')
     .addField('haste','Upload text to Hastebin!')
     .setTimestamp()
     .setFooter('Hastebin Bot | Made by ohlookitsderpy');
   msg.channel.send(embed);
};
