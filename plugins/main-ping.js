const config = require('../config');
const { cmd, commands } = require('../command');

// Array of different fancy text styles for ᗰᗩᖴIᗩᗪᗴᗴᒪ
const botNameStyles = [
    "ᗪᗩᖇK-ᗰᗩᖴIᗩ-ᗰᗪ",
    "ᴅᴀʀᴋ-ᴍᴀғɪᴀ-ᴍᴅ",
    "𝐃𝐀𝐑𝐊-𝐌𝐀𝐅𝐈𝐀-𝐌𝐃",
    "𝐃ᴀʀᴋ-𝐌ᴀғɪᴀ-𝐌𝙳",
    "𝙳𝙰𝚁𝙺-𝙼𝙰𝙵𝙸𝙰-𝙼𝙳",
    "ᗪᗩᖇK-ᗰᗩᖴIᗩ-ᗰᗪ",
    "ᗪᗩᖇK-ᗰᗩᖴIᗩ-ᗰᗪ"
];

// Track current style index
let currentStyleIndex = 0;

cmd({
    pattern: "ping2",
    alias: ["speed","pong"],
    use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "🫀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
        const textEmojis = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        // Get current fancy bot name and rotate for next time
        const fancyBotName = botNameStyles[currentStyleIndex];
        currentStyleIndex = (currentStyleIndex + 1) % botNameStyles.length;

        const text = `> *${fancyBotName} SPEED: ${responseTime.toFixed(2)}ms ${reactionEmoji}*`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363407804667405@newsletter',
                    newsletterName: "ᗪᗩᖇK-ᗰᗩᖴIᗩ-ᗰᗪ",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 remains unchanged
cmd({
    pattern: "ping3",
    desc: "Check bot's response time.",
    category: "main",
    react: "🧠",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*PINGING...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*ᗪᗩᖇK ᗰᗩᖴIᗩ ᗰᗪ Տᑭᗴᗴᗪ : ${ping}ms*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
