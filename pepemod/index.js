var PORT = process.env.PORT || 5000;

forbidenWords = ["fuck", "shit", "asshole", "ass", "bitch", "pussy", "Wanker", "Motherfucker", "Cunt", "Dickhead"]
badWords = ["butt", "poop", "poopy"]
banableWords = ["wanker", "motherfucker", "cunt", "dickhead"]
onehundredkick = ["pussy"]
unforgiveableWords = ["nigger"]
const token = require("./token.json")
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity("with depression", {
		type: "STREAMING",
		url: "https://www.twitch.tv/monstercat"
	  });
});



client.on('message', message => {
    if (message.content === '.pepe') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('is good.');
    }
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Why are you even looking at this.')
	.setURL('http://endless.horse/')
	.setAuthor('Pepeomod', 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Feels_good_man.jpg/200px-Feels_good_man.jpg', 'http://endless.horse/')
	.setDescription('Pepe is very good and stuff. We all love pepe, it is the best thing ever invented after microwave popcorn.')
	.setThumbnail('https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale')
	.addFields(
		{ name: 'Pepe is really good.', value: 'No, really.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Wanna support him?', value: 'Easy.', inline: true },
		{ name: 'Make your pfp a pepe image!!', value: 'And, maybe spam pepe memes to keep him alive?', inline: true },
	)
	.addField('And to be the ultimate supporter, DONATE!', 'Nah, jk no one does donate anyways.', true)
	.setImage('https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Feels_good_man.jpg/200px-Feels_good_man.jpg')
	.setTimestamp()
	.setFooter('Hey, my mom likes pepe.', 'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale');

    if (message.content === '.secret') [
        message.channel.send(exampleEmbed)
	]


	if (message.content === '.pingme') {
		message.reply('Get pinged.')
	}
	if (message.content === '.checkpermkick') {

		const {member, mentions} = message

		if (member.hasPermission('KICK_MEMBERS')) {
			message.channel.send('Yahoo!! You can kick these kids out!');

		} else {
			message.channel.send("Bruh, you can't kick but I bet you wish you could 😆")
		}
	}

	if (message.content === '.checkpermkickban') {
		const {member, mentions} = message
		if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
			message.channel.send('Yas! You can kick AND ban -- I bet you feel nice now...')

		} else {
			if (member.hasPermission('KICK_MEMBERS')) {
				message.channel.send("Yahoo!! You can kick, but you can't ban -- oof");
	
			} else {
				if (member.hasPermission('BAN_MEMBERS')) {
					message.channel.send("tf -- you can't kick members, but you can ban members...");
		
				} else {
					message.channel.send("🙄 you can't even bad OR kick -- what are you thinking...")
				}
			}
		}
	}

	client.on('message', message => {
		// Ignore messages that aren't from a guild
		if (!message.guild) return;
	  
		// If the message content starts with "!kick"
		if (message.content.startsWith('.kick')) {
		  // Assuming we mention someone in the message, this will return the user
		  // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
		  const user = message.mentions.users.first();
		  // If we have a user mentioned
		  if (user) {
			// Now we get the member from the user
			const member = message.guild.member(user);
			// If the member is in the guild
			if (member) {
			  /**
			   * Kick the member
			   * Make sure you run this on a member, not a user!
			   * There are big differences between a user and a member
			   */
			  member
				.kick('Optional reason that will display in the audit logs')
				.then(() => {
				  // We let the message author know we were able to kick the person
				  message.reply(`Successfully kicked ${user.tag}`);
				})
				.catch(err => {
				  // An error happened
				  // This is generally due to the bot not being able to kick the member,
				  // either due to missing permissions or role hierarchy
				  message.reply('I was unable to kick the member');
				  // Log the error
				  console.error(err);
				});
			} else {
			  // The mentioned user isn't in this guild
			  message.reply("That user isn't in this guild!");
			}
			// Otherwise, if no user was mentioned
		  } else {
			message.reply("You didn't mention the user to kick!");
		  }
		}
	  });

	  if (message.content.startsWith('.ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }

  if (message.content === '.reactcustom') {
	const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'pepeOK');
	message.react(reactionEmoji);
  }

  if (message.content === '.react') {
	  message.channel.send('Testing react...')
	  message.react('✅')
	  message.channel.send('Done 😅')
  }

  if (message.content === '@PepeoMods#3026') {
	  message.reply('Why are you pinging me...')
	  const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'pepeOK');
	  message.react(reactionEmoji);
  }

  if (message.content === '.collecter') {
	  // `m` is a message object that will be passed through the filter function
      const filter = m => m.content.includes('discord');
      const collector = message.channel.createMessageCollector(filter, { time: 15000 });
      
      collector.on('collect', m => {
      	console.log(`Collected ${m.content}`);
      });
      
      collector.on('end', collected => {
      	console.log(`Collected ${collected.size} items`);
      });
	}

   if (message.content === '.quiz') {
	const quiz = require('./quiz.json');
	const item = quiz[Math.floor(Math.random() * quiz.length)];
	const filter = response => {
		return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
	};
	
	message.channel.send(item.question).then(() => {
		message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
			.then(collected => {
				message.channel.send(`${collected.first().author} got the correct answer!`);
			})
			.catch(collected => {
				message.channel.send('Looks like nobody got the answer this time.');
			});
	});
   }

   for (var i = 0; i < forbidenWords.length; i++) {
	if (message.content.includes(forbidenWords[i])) {
		message.delete();
		const channel = client.channels.cache.get('766722251046387724');
		channel.send(`Removed ${message.author.username}'s Message as it had a forbidden word in it.`);
		message.author.send('test')
	  break;
	}
  }
  for (var i = 0; i < badWords.length; i++) {
	if (message.content.includes(forbidenWords[i])) {
		message.delete();
	  break;
	}
  }
  for (var i = 0; i < banableWords.length; i++) {
	if (message.content.includes(forbidenWords[i])) {
		message.delete();
		const channel = client.channels.cache.get('766722251046387724');
		channel.send(`Removed ${message.author.username}'s Message as it had a banable word in it.`);
	  break;
	}
  }
  if (message.content === '.profpic') {
	module.exports={
		name:"avatar",
		description:"Get their avatar",
		usage:"[user mention]",
		run:async(bot,messagemargs)=>{
			let Embed = new Discord.MessageEmbed()
			if(!message.mentions.users.first()){
				Embed.setTitle(`Your avatar!`)
				Embed.setThumbnail(message.author.displayAvatarURL())
				Embed.setColor(`RANDOM`)
				return message.channel.send(Embed)
			  
			} else {
				let User = message.mentions.users.first()
				Embed.setTitle(`${User.tag}'s avatar!`)
				Embed.setThumbnail(User.displayAvatarURL)
				Embed.setColor(`RANDOM`)
			}
		}
	}
	message.channel.send(Embed)
  }

  if (message.content === '.avatar') {
	  module.exports = {
		name: 'avatar',
		aliases: ['icon', 'pfp'],
		cooldown: 5  
	  }
	  const command = client.commands.get(commandName)
	  		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	  
	  	if (!command) return;
  }
  if (message.content === '.dm') {
	const user = client.cache.get('693301017365839952');
	user.send("Hello, this is discord's alt. We have taken nessacary precautions, and it is safe to determin that you are safe.");
	
  }

  if (message.content === '.boom') {

	message.channel.send('How did you find this command??')
	message.author.send('Here are some cool things.')
	message.channel.send(" BOOOOM.", { files: ["./explosion.gif"] });
  }

  if (message.content === '.pls') {
	  const goway = new Discord.MessageEmbed()
	  .setColor('#0099ff')
	  .setTitle('No way, Bozo...')
	  .setDescription("I won't give you no nothin', you filthy little begger!")
	  message.channel.send(goway)
  }


  
  

});

client.login(token.token);






