const Discord = require('discord.js');


exports.run = function(client, message , args) {
	let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Kod yazmalısın.');
	message.delete();
	const embed = new Discord.RichEmbed()
		.setColor(0x00AE86)
		.addField("EVENT", `Hediye Kodu: **${mesaj}**
   
   
   Bu Kodu oyunda yazarak **hediyelere** sahip olabilirsin.`, true)
		.setThumbnail("http://www.startupvadisi.com/wp-content/uploads/2017/12/hediye.png")
   
	message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kp'],
  permLevel: 0
};

exports.help = {
  name: 'kodpaylaş',
  description: 'Kod paylaşmak için kullanılır.',
  usage: 'kodpaylaş [kod]'
};