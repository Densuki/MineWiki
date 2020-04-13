const { RichEmbed, Attachment} = require("discord.js");
const { getMember, formatDate } = require("../../functions.js");
const { } = require("../../datas.js");
const { stripIndents } = require("common-tags");
const dateFormat = require('dateformat');

module.exports = {
    name: "botinfo",
    aliases: ["bot"],
    category: "info",
    description: "informações do BOT",
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));
{
        // Member variables
        //const joined = formatDate(client.joinedAt);

        // const roles = member.roles
        // const guildRoles = message.guild.roles

        //     .filter(r => r.id !== message.guild.id)
        //     .map(r => r).join(", ") || 'none';

        // User variables
       // const created = formatDate(client.user.createdAt);
        //const created = Data;        
}
        var logo = "https://imgur.com/pgQnTtD.png";
        const Data = new Date();
        const warians = new Attachment('./assets/warians.png', 'warians.png')
        const CriadoD = dateFormat(client.user.createdAt, "dd/mm/yyyy");
        const CriadoH = dateFormat(client.user.createdAt, "HH:MM:ss");

        const embed = new RichEmbed()
            .attachFile(warians)
            .setColor("#ab0dcf")
            .setAuthor(client.user.username, 'https://imgur.com/FuNGHNp.png')   
            .setThumbnail(client.user.displayAvatarURL)

            .addField('💻 Informações do BOT:',
            `
            **> 👑 Dono ** <@!336311215099740160>
            **> 💻 Sub-Criador ** <@!570276100681236480> 
            **> BOT se encontra em:** ${client.guilds.size} servidores!
            **> 📅 Criado em:** ${CriadoD} às ${CriadoH}
            `, true
            )
            //**> Estar no total de:** [] Servidores
        "Sou um BOT de uso **privado**.\nUm de meus usos é para jogos, sendo um deles exclusivamente para **Minecraft**.\nFui criado por **Densuki**, afim de ajudar algumas das comunidades deste jogo em questão. Algumas pessoas ajudaram e colaboraram para minha criação, logo os créditos não são apenas para meu criador - programador - Densuki, como também para o seu clã/grupo/associação (nome no rodapé).\nEspero ser útil a vocês!")
            .setImage('attachment://warians.png')
            //**> 📅 Criado em:** no dia ${dateFormat(Data, "dd/mm/yyyy")} às ${dateFormat(Data, "HH:MM:ss")}

            .setTimestamp() //Horário que o comando foi usado
            .setFooter('WariansForce! and Dollars • © Todos os direitos reservados.', logo) //notas de rodapé

        message.channel.send(embed);
    }
}
