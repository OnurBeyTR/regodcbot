const Discord = require('discord.js');


exports.run = function(client, message, args) {
	const sayi = args.slice(0).join(' ');
	
	
	if (sayi.length < 1) {
      return message.reply("Silinecek yazı miktarını söylemedin.")
	} else {
		if (sayi < 1){
			return message.reply("Silinecek yazı miktarı **1** den küçük olamaz.")
		} else {
			if (sayi > 100){
				return message.reply("Silinecek yazı miktarı **100** den büyük olamaz.")
			} else {
				message.channel.bulkDelete(sayi);
				message.channel.send("**" + sayi + "** adet mesaj sildim.").then(msg =>{
				  msg.delete(5000)
				});
			  }
		    }
		}
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};