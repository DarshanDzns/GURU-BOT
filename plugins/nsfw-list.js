let handler = async (m, { conn, usedPrefix }) => {
    if (!global.db.data.chats[m.chat].nsfw) throw `🚫 group doesnt supprt nsfw \n\n enable it by \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ uneed to be atleast 18 years`) 
   
m.react(rwait)
    let nsfwCommands = ['sunglasses', 'glasses', 'weapon', 'shirtlift', 'headphone', 'catgirl'];
  
    let message = `
  *NSFW Commands Menu* 
  
  Here is the list of available commands for NSFW content. Use the prefix "${usedPrefix}" followed by the command name:
  
  ${nsfwCommands.map(command => `${usedPrefix}${command}`).join('\n')}
  
  Note: These commands are only for those who are 18+.
  `;
  
    console.log("Sending message...");
    await conn.reply(m.chat, message, m);
    console.log("Message sent.");
  };
  
  handler.help = ['nsfw'];
  handler.tags = ['nsfw'];
  handler.command = ['nsfw'];
  handler.group = true
  handler.register = true;

  export default handler;
  
