const Discord = require('discord.js');

const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')


var prefix = ayarlar.prefix;

client.on('ready', () => {

  console.log(`[BOT] ${client.user.tag} ismi ile giriş yaptı.!`);

});

client.on('message', message => {

  if (message.content === 'ping') {

    message.channel.send('Pingim ' + client.ping + 'ms');

  }

if (message.content === 'sa') {

    message.reply('as');

  }

if (message.content === prefix + 'avatarım') {

    message.channel.send(message.author.avatarURL);

  }
if (message.content === prefix + 'komutlar') {

    var embed = new Discord.RichEmbed()
		.setColor(0x00AE86)
    		.setTimestamp()
    		.addField('Eylem:', 'Sunucudan atma')
    		.addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    		.addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    		.addField('Sebep', reason);
	message.channel.sendEmbed(embed);

  }
if (message.content === prefix + 'restart') {
	  
	  if (message.author.id === "288003522648342530") {
		  message.channel.send('Yeniden başlatılıyor...').then(msg => {
			  console.log('yeniden başlatılıyor')
			  process.exit(0);
		  });
	  } else 
		  message.channel.send('Maalesef bu komutu kullanamazsın. Benim yapımcım değilsin!')
  }

});

client.login(process.env.BOT_TOKEN);
