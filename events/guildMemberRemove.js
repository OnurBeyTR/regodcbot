module.exports = member => {
    let guild = member.guild;
    member.send('Sunucudan Ayrıldın.');
    guild.defaultChannel.sendMessage(`${member.user.username} sunucudan ayrıldı.`);
  };