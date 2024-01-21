
module.exports = {
	name: "join_limit_setter",
	description: "Set the rate limit of joins",
	options: [
		{
			name: "limit_num",
			description: "how much people can join at a time",
			type: 4, //integer data type
			required: true,
		},
		{
			name: "limit_time",
			description: "how much time (seconds) before the join counter resets",
			type: 4, //integer data type
			required: true,
		}
	],

	/*
	bot is null
 	stuff is async function join_limit_setter(interaction, content) {
        return bot.api
                .interactions(interaction.id, interaction.token)
                .callback.post({
                        data: {
                                type: 4,
                                data: await createAPIMessage(interaction, content),
                        },
                });
}
	interaction is [object Object]
	args are[object Object],[object Object]
 	*/

	execute(bot, func, interaction, args) {

		var joinLimit = 10;
		/*if (numOfJoins > joinLimit)
		{
			//const user = interaction.options.getUser('target');
			//guild.members.ban(user);
			
		}*/
		return args
	},
};