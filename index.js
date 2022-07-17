const Discord = require("discord.js");
const Client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
//Prefix
const prefix = "!"
Client.on("ready", () => {
    console.log("bot opérationnel")
      Client.user.setPresence ({
          activities: [{
              name: 'CEM COMMUNITY',
              type: 'LISTENING'
          }],
      });
  });

Client.login("OTg1MjQ0OTk2NzcwODYxMTA2.G0yDDI.ERsd6RSHDtGDg3kzEjgMiSavMu4MMpjtkC5M6Q");