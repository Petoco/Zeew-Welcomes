const { Client, MessageEmbed , Intents, MessageButton, MessageActionRow, ButtonInteraction, MessageAttachment } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS] });
const Zeew = require("zeew");
const token = "";
const img = new Zeew.img(token);

client.on("ready", () => {

    console.log("Bot ON, loged by " + client.user.username);

    client.user.setActivity({
        name: "",
        type: "PLAYING"
    })
});

client.on("guildMemberAdd", async (member) => {
    try {
      const card = new img.card.bienvenida()
      .token(token)
      .estilo("classic")
      .avatar(member.user.displayAvatarURL({ format: "png", size: 720}))
      .fondo("https://wallpaperaccess.com/full/269413.jpg")
      .colorTit("#EFEFEF")
      .titulo(`${member.user.username}`)
      .colorDesc("#EFEFEF")
      .descripcion("Bienvenido a ")
      const render = await img.card.render(card);
      const attachment = new MessageAttachment(render, "bienvenida.png");
      const canal = client.channels.cache.get("989128820558803031");
      canal.send({ files: [attachment]})
    } catch (err) {
      console.error(err);
    }
});

client.login();