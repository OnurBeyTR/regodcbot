const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .addField("Yardım", `Bu bot ile Dağıtılan kodları oyunda yazarak , Hediyeler kazanabilirsin.
   `, true)
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yardım', 
  description: 'Yardım almak için kullanılır.',
  usage: 'yardım'
};