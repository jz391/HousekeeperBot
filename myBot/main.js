//imports
require('dotenv').config();
const fs = require('node:fs');
const filePathUtils = require('node:path');
const Discord = require('discord.js');
const permissionsModule = require(filePathUtils.join(__dirname, "permissionsModule.js"));

//filepaths
const commandsFolderPath = filePathUtils.join(__dirname, "commands");


//create bot
const GIB = Discord.GatewayIntentBits
const client = new Discord.Client({ intents: [
    GIB.Guilds,
    GIB.GuildMessages,
    GIB.MessageContent,
], });

const bot = client.user;

//bot variables
const cmds = [];
cmdModules = [];

//bot functions
function checkJoinLimit() {
	var joinLimit = 10;
	var numOfJoins;
	if (numOfJoins > joinLimit)
		{
			// kick user out
		}
}
client.login(process.env.token);

fs.readdir(commandsFolderPath, (err, files) => {
	console.log("attempted to read: " + files);
	if (err) { 
		console.log("issue reading files of ", commandsFolderPath) 
	} else {
		cmdModules = files
	}
})

client.on("ready", async () => {
	//load commands
	const guild = await client.guilds.cache.get(process.env.guild_id)

	for (const fileName of cmdModules) {
		const file = require(filePathUtils.join(commandsFolderPath, fileName));
		cmds.push(file);
		guild.commands.create({
			name: file.name,
			description: file.description,
			options: file.options,
		});
		
	}
    
	console.info("bot is ready");
});
n = 0
client.ws.on("INTERACTION_CREATE", (interaction) => {
	interactionName = interaction.data.name.toLowerCase();
	for (let i = 0; i < cmds.length; i++) {
		cmdName = cmds[i].name.toLowerCase()
		console.log(cmdName + " === " + interactionName);

		if (cmdName === interactionName ) {
			console.log(interactionName + " was the interaction name");
			value = cmds[i].execute(bot, join_limit_setter, interaction, interaction.data.options);
			
			output = client.channels.cache.get(process.env.channel_output_id);
			
			console.log("reading Value0 " + value[0]);
			Object.keys(value[0]).forEach((key) => {
				console.log(`Key: ${key}, Value: ${value[0]}`);
			});
			output.send(("your arguments are: " + value[0]));
		}
	}
});
