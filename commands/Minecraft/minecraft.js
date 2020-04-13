const { RichEmbed, Attachment } = require("discord.js");

module.exports = {
    name: "minecraft",
    category: "games",
    aliases: ["mine"],
    usage: "[basta executar o comando]",
    description: "enviar um embed mostrando as opções",

    run: async (client, message, args) => {
        
        if (!message.member.roles.some(r => ["Linked"].includes(r.name)))
          return message
            .reply(
              "Você não tem as permissões necessárias para usar este comando."
            )
            .then(m => m.delete(5000));


    }
}
