module.exports = {
	name: "toggle_join_limiter",
	description: "Enables or disables the joinLimitSetter method.",
	options: [
		{
			name: "join_limit_toggle",
			description: "You can print something on the bot.",
			type: 5,
			required: true,
		},
	],
	async execute(bot, say, interaction, args) {
		return args[0];
		/*
		joinLimitSetter.disabled = !joinLimitSetter.disabled
		if(joinLimitSetter.disabled == false)
		{
			joinLimitSetter.disabled = true;
			message.channel.send("joinLimitSetter enabled!");
		}
		else
		{
			joinLimitSetter.disabled = false;
			message.channel.send("joinLimitSetter disabled!");
		}
		*/
	},
};