import fs from 'fs';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let videoUrl = "https://files.catbox.moe/kg6guw.jpg";
    let caption = 'I AM ATOMIC⇘⥣⇙';

    let videoMessage = {
      video: { url: videoUrl },
      caption: caption,
      contextInfo: {
        externalAdReply: {
          title: "↺ |◁ II ▷| ♡",
          body: "𝚉𝙴𝚁𝙾-𝚇𝙼𝙳",
          thumbnailUrl: "https://files.catbox.moe/kg6guw.jpg",
          sourceUrl: "https://www.facebook.com/dasundularaka",
          mediaType: 2,
          mediaUrl: "https://www.facebook.com/dasundularaka",
          showAdAttribution: true
        }
      }
    };

    await conn.sendMessage(m.chat, videoMessage, { quoted: m });
  } catch (err) {
    console.error(err);
    throw '*Error!*';
  }
};

handler.customPrefix = /^(Atomic)$/i;
handler.command = new RegExp();

export default handler;
