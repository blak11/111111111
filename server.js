
////////==={fog , 16 💥16}===////////
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const fog = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "s/";
const cooldown = new Set();
const cdtime = 5;
////////==={fog , 16 💥16}===////////
const callicolor = "";
const calliImage = "";
const callitrue = "";
const callifalse = "";
const calliwarn = "";
///////////////////////////////////////////////////////////////////////////////
fog.login("ODEzNTgyNDQ0Mzg4ODEwNzUz.YDRZsg.Aw1xRoc9SbiVYXnuy_qJwUSBDww");
///////////////////////////////////////////////////////////////////////////////
fog.on("ready", () => {
  console.log(`${fog.user.tag}`);
  fog.user.setActivity(`${prefix}help Is Random`, {
    Type: "Playing"
  });
});
////////==={fog , 16 💥16}===////////
fog.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    let help = new Discord.MessageEmbed()
      .setColor("FFC900")
      .setImage(
        "https://cdn.discordapp.com/attachments/756396739086254113/783001805856047154/1_OF0xEMkWBv-69zvmNs6RDQ_1.gif"
      )
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`**━━━━━━⊱🔹⊰━━━━━━**
**🌍|Security**
${prefix}settings ban {number}
${prefix}settings kick {number}
${prefix}settings channelD {number}
${prefix}settings channelC {number}
${prefix}settings roleD {number}
${prefix}settings roleC {number}
${prefix}settings bot {on/off}
**━━━━━━⊱🔸⊰━━━━━━**
**🔄|Security**
${prefix}ban
${prefix}kick
${prefix}lock
${prefix}unlock
${prefix}ping
${prefix}botinfo
${prefix}userrinfo
${prefix}servarinfo
**━━━━━━⊱✿⊰━━━━━━**
__ [𝗜𝗡𝗩𝗜𝗧𝗘 𝘽𝙊𝙏](https://discord.com/api/oauth2/authorize?client_id=813582444388810753&permissions=0&scope=bot) ____    ____ [𝗦𝗨𝗣𝗣𝗢𝗥𝗧 𝙎𝙍](https://discord.gg/z89SWpzTWw) __
`);

    message.channel.send(help);
  }
});
////////==={fog , 16 💥16}===////////

////////==={fog , 16 💥16}===////////
fog.on("message", message => {
  var ms = require("ms");

  var moment = require("moment");

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  let messageArray = message.content.split(" ");

  let embed = new Discord.MessageEmbed()
    .setTitle("Examples:")
    .setColor(callicolor).setDescription(`${prefix}ban @metion 1h share
${prefix}ban @metion 1d selfbot
${prefix}ban @metion 1w swearing
`); ////////==={fog , 16 💥16}===////////
  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");

    if (!message.guild.member(fog.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");

    let user = message.mentions.users.first();

    let Reason = message.content
      .split(" ")
      .slice(3)
      .join(" ");

    let time = messageArray[2];

    if (message.mentions.users.size < 1) return message.channel.send(embed);

    if (!message.guild.member(user).bannable)
      return message.reply("**I Don't Have Permission For Ban This User**");

    if (!Reason) {
      message.guild.member(user).ban({ reason: Reason });
    }

    if (!Reason && time) {
      message.guild.member(user).ban(7, user);
    } ////////==={fog , 16 💥16}===////////

    if (!time) {
      message.guild.member(user).ban(7, user);
    }
    if (time === "0") {
      message.guild.member(user).ban(7, user);
    } ////////==={fog , 16 💥16}===////////
    if (time) {
      setTimeout(() => {
        message.guild.unban(user);
      }, ms(time));
    } ////////==={fog , 16 💥16}===////////

    if (time && Reason && user) {
      message.guild.member(user).ban({ reason: Reason });

      setTimeout(() => {
        message.guild.unban(user);
      }, ms(time));
    } ////////==={fog , 16 💥16}===////////

    message.channel.send(
      `:white_check_mark:  ${user.tag} banned from the server ! :airplane:`
    );
  }
}); ////////==={fog , 16 💥16}===////////
////////==={fog , 16 💥16}===////////
fog.on("message", message => {
  var prefix = "s/";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild) return;

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message
        .reply("You Don't Have KICK_MEMBERS Permission")
        .then(msg => msg.delete(5000));
    if (!message.guild.member(fog.user).hasPermission("KICK_MEMBERS"))
      return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    if (message.mentions.users.size < 1)
      return message.reply("Mention Someone");
    if (!reason) reason = "Null";
    if (!message.guild.member(user).bannable)
      return message.reply("I can not be higher than my rank");

    message.guild.member(user).kick(7, user);

    message.channel.send(
      `**:white_check_mark: ${user} has been kicked ! :airplane:**`
    );
    user.send(
      `**:airplane: You are has been kicked in ${message.guild.name} reason: **`
    );
    message.delete();
  }
});
////////==={fog , 16 💥16}===////////
fog.on("message", message => {
  if (message.content.startsWith(prefix + "userinfo")) {
    let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setTitle("Info User")
      .addField("Name", `**${message.author.tag}**`, true)
      .addField("ID", `**${message.author.id}**`, true)
      .addField(
        "Created At",
        `**${message.author.createdAt.toLocaleString()}**`,
        true
      )
      .setTimestamp();
    message.channel.send(embed);
  }
});
////////==={fog , 16 💥16}===////////
fog.on("message", msg => {
  if (msg.content === prefix + "serverinfo") {
    const embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setThumbnail(msg.guild.iconURL())
      .setTitle(`${msg.guild.name}`, true)
      .setTitle(`${msg.guild.name}`, true)
      .addField("Server ID", `${msg.guild.id}`, true)
      .addField("Created On", msg.guild.createdAt.toLocaleString())
      .addField("Owner Server", `${msg.guild.owner}`, true)
      .addField("Members", `**[${msg.guild.memberCount}]**`, true)
      .addField("Channels", `**[${msg.guild.channels.cache.size}]**`, true)
      .addField("Region", `**[${msg.guild.region}]**`, true)
      .addField("Roles", `**[ ${msg.guild.roles.cache.size} ]**`, true);
    msg.channel.send(embed);
  }
});
////////==={fog , 16 💥16}===////////
fog.on("message", msg => {
  if (msg.content === prefix + "botinfo") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(fog.user.username, fog.user.avatarURL())
      .setThumbnail(fog.user.avatarURL())
      .setColor(callicolor)
      .setTitle(` ${fog.user.username} `)
      .addField("servers", `**${fog.guilds.cache.size}**`, true)
      .addField("channels", `**${fog.channels.cache.size}**`, true)
      .addField("Users", `**${fog.users.cache.size}**`, true)
      .addField("My Name", `**${fog.user.tag}**`, true)
      .addField("My ID", `**${fog.user.id}**`, true)
      .addField("Owner Bot", `Mr°Fog`, true);

    msg.channel.send(embed);
  }
});
////////==={fog , 16 💥16}===/////////
fog.on("message", message => {
  if (message.content.startsWith(prefix + "invite"))
    message.channel.send(
      `<@${message.author.id}>, https://discord.com/api/oauth2/authorize?client_id=${fog.user.id}&permissions=8&scope=bot`
    ); ////////==={fog , 16 💥16}===////////
});
////////==={fog , 16 💥16}===////////
fog.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (!message.channel.guild)
      return message.channel.send("Sorry This Command Only For Servers.");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(fog.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    const lock = new Discord.MessageEmbed()
      .setTitle("" + "Click Here To Add : " + `${fog.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${fog.user.id}&permissions=8&scope=bot`
      )
      .setColor(callicolor)
      .setDescription(
        `🔒 | Locked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ${callifalse}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(lock);
  }
}); ////////==={fog , 16 💥16}===////////
////////==={fog , 16 💥16}===////////
fog.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (!message.channel.guild)
      return message.channel.send("Sorry This Command Only For Servers.");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(fog.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setTitle("" + "Click Here To Add : " + `${fog.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${fog.user.id}&permissions=8&scope=bot`
      )
      .setColor(callicolor)
      .setDescription(
        `🔓 | UnLocked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ${callitrue}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});
////////==={fog , 16 💥16}===////////
fog.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(fog.ping)}`;
      msg.channel.send(`**Time taken: ${PinG} ms.**`);
    });
  }
}); ////////==={fog , 16 💥16}===////////
////////==={fog , 16 💥16}===////////
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
fog.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1,
      time: 0.1
    };
  if (message.content.startsWith(prefix + "settings")) {
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**Just Can Online Ownership**");
    if (message.content.startsWith(prefix + "settings ban")) {
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `** <@${message.author.id}>,  Successfully changed the anti ban to ${config[message.guild.id].banLimit}** ${callitrue}`
      );
    }
    if (message.content.startsWith(prefix + "settings kick")) {
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**<@${message.author.id}>,  Successfully changed the anti kick to ${config[message.guild.id].kickLimits}** ${callitrue}`
      ); ////////==={fog , 16 💥16}===////////
    }
    if (message.content.startsWith(prefix + "settings roleC")) {
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**<@${message.author.id}>,  Successfully changed the anti roleC to ${config[message.guild.id].roleDelLimit}** ${callitrue}`
      );
    }
    if (message.content.startsWith(prefix + "settings roleD")) {
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**<@${message.author.id}>,  Successfully changed the anti roleD to ${config[message.guild.id].roleCrLimits}** ${callitrue}`
      ); ////////==={fog , 16 💥16}===////////
    }
    if (message.content.startsWith(prefix + "settings channelC")) {
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**<@${message.author.id}>,  Successfully changed the anti channelC to ${config[message.guild.id].chaDelLimit}** ${callitrue}`
      ); ////////==={fog , 16 💥16}===////////
    }
    if (message.content.startsWith(prefix + "settings channelD")) {
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**<@${message.author.id}>,  Successfully changed the anti channelD to ${config[message.guild.id].chaCrLimit}** ${callitrue}`
      ); ////////==={fog , 16 💥16}===////////
    }
    if (message.content.startsWith(prefix + "settings time")) {
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(
        `** <@${message.author.id}>,  Successfully changed the anti time to ${config[message.guild.id].time}** ${callitrue}`
      );
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    }); ////////==={fog , 16 💥16}===////////
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    }); ////////==={fog , 16 💥16}===////////
  }
});
fog.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Create\` Many \`Channels\` ${calliwarn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      }); ////////==={fog , 16 💥16}===////////
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
fog.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Delete\` Many \`Channels\` ${calliwarn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      }); ////////==={fog , 16 💥16}===////////
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
fog.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Delete\` Many \`Role\` ${calliwarn}**`
          )
        ); ////////==={fog , 16 💥16}===////////
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  } ////////==={fog , 16 💥16}===////////
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
}); ////////==={fog , 16 💥16}===////////
fog.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    }) ////////==={fog , 16 💥16}===////////
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    }; ////////==={fog , 16 💥16}===////////
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    ); ////////==={fog , 16 💥16}===////////
    console.log("role create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Create\` Many \`Roles\` ${calliwarn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  } ////////==={fog , 16 💥16}===////////
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
}); ////////==={fog , 16 💥16}===////////
fog.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("ban member");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Ban\` Many \`Members\` ${calliwarn}**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  } ////////==={fog , 16 💥16}===////////
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
fog.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("member kick");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Kick\` Many \`Members\` ${calliwarn}**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      }); ////////==={fog , 16 💥16}===////////
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
fog.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 1,
        chaDelLimit: 1,
        roleDelLimit: 1,
        kickLimits: 1,
        chaCrLimit: 1,
        roleCrLimits: 1
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      }; ////////==={fog , 16 💥16}===////////
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("kick member");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${calliwarn} ${entry.username} Tryed To \`Ban\` Many \`Members\` ${calliwarn}**`
            )
          ); ////////==={fog , 16 💥16}===////////
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    } ////////==={fog , 16 💥16}===////////
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
}); ////////==={fog , 16 💥16}===////////
////////==={fog , 16 💥16}===////////
fog.on("message", message => {
  if (message.content === prefix + "settings") {
    if (message.author.id !== message.guild.ownerID) return;
    if (!message.channel.guild)
      return message.channel.send("Sorry This Command Only For Servers.");
    let embed = new Discord.MessageEmbed()
      .setTitle("")

      .setURL("")

      .setDescription(
        `setings Ban
Enabled: ${callitrue}
🔴 Ban : ${config[message.guild.id].banLimit}
-
setings Kick
⚪ : ${callitrue}
🔴 Kick : ${config[message.guild.id].kickLimits}
-
setings Channel C - D
⚪ : ${callitrue}
🔴 Create : ${config[message.guild.id].chaCrLimit}
🔴 Delete : ${config[message.guild.id].chaDelLimit}
-
setings Role C - D
⚪ : ${callitrue}
🔴 Create : ${config[message.guild.id].roleCrLimits}
🔴 Delete : ${config[message.guild.id].roleDelLimit}
-
setings Time
⚪ : ${callitrue}
🔵 Time : ${config[message.guild.id].time}`
      )
      .setColor("FF0000")
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed });
  }
}); ////////==={fog , 16 💥16}===////////
////////==={fog , 16 💥16}===////////
fog.on("guildCreate", guild => {
  const rrrsembed = new Discord.MessageEmbed()
    .setColor("FF0000")
    .setThumbnail(guild.iconURL || guild.defaultİconURL)
    .setTitle(`${fog.user.username} Added Server <a:status:755471130315194399>`)
    .addField("`add Server:`", guild.name)
    .addField("`Server Owner:`", guild.owner)
    .addField("`Server ID:`", guild.id)
    .addField("`Location of the Server:`", guild.region)
    .addField("`Number of people of the Server:`", guild.memberCount)
    .setTimestamp();
  fog.channels.cache.get("821167267773284392").send(rrrsembed);
});
////////==={fog , 16 💥16}===////////
fog.on("guildDelete", guild => {
  const rrrsembed = new Discord.MessageEmbed()
    .setColor("FF0000")
    .setThumbnail(guild.iconURL || guild.defaultİconURL)
    .setTitle(`${fog.user.username} Added Server <a:status:755471130315194399>`)
    .addField("`band Server:`", guild.name)
    .addField("`Server Owner:`", guild.owner)
    .addField("`Server ID:`", guild.id)
    .addField("`Location of the Server:`", guild.region)
    .addField("`Number of people of the Server:`", guild.memberCount)
    .setTimestamp();
  fog.channels.cache.get("821167267773284392").send(rrrsembed);
});
////////==={fog , 16 💥16}===//////
