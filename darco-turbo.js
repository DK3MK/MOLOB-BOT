require('./config')
const { modul } = require('./module')
const { axios, chalk, cheerio, process, moment, speed, util } = modul
const { color } = require('./lib/color')
const { msgFilter } = require('./lib/antispam')
const owner = ["989172087867"]
const xeonverifieduser = []

module.exports = Darco = async (Darco, m, chatUpdate, store) => {
try {
  const { type, quotedMsg, mentioned, now, fromMe } = m
  const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
  const budy = (typeof m.text == 'string' ? m.text : '')
  const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
  const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
  const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
  const messagesC = pes.slice(0).trim()
  const content = JSON.stringify(m.message)
  const isCmd = body.startsWith(prefix)
  const from = m.key.remoteJid
  const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
  const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const pushname = m.pushName || "بلا اسم"
  const botNumber = await Darco.decodeJid(Darco.user.id)
  const DarcoTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
  const DarcoTheDeveloper = m.sender == botNumber ? true : false
  const text = q = args.join(" ")
  const quoted = m.quoted ? m.quoted : m
  const mime = (quoted.msg || quoted).mimetype || ''
  const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
  const senderNumber = sender.split('@')[0]
  const groupMetadata = m.isGroup ? await Darco.groupMetadata(m.chat).catch(e => {}) : ''
  const groupName = m.isGroup ? groupMetadata.subject : ''
  const participants = m.isGroup ? await groupMetadata.participants : ''
  const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
  const groupOwner = m.isGroup ? groupMetadata.owner : ''
  const groupMembers = m.isGroup ? groupMetadata.participants : ''
  const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
  const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
  const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
  const isUser = xeonverifieduser.includes(sender)
  const banUser = await Darco.fetchBlocklist()
  const isBanned = banUser ? banUser.includes(m.sender) : false

//group chat msg by darco
const replydarco = (teks) => {
Darco.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": false,
"containsAutoReply": true,
"title": `aboud coding`,
"body": `dark man`,
"previewType": "PHOTO",
"thumbnailUrl": `https://telegra.ph/file/3694d5edde3846459647b.jpg`,
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}

  //  Replay Messages ! //
let smallinput = budy.toLowerCase()

if (smallinput.includes('صباح الخير')) {
  replydarco(`*صباح النور*`);
}

if (smallinput.includes('السلام عليكم') || smallinput.includes('سلام عليكم')) {
  replydarco(`*وعليكم السلام*`);
}


if (!Darco.public) {
if (!m.key.fromMe) return
}

//chat counter (console log)
if (m.message && m.isGroup) {
  Darco.readMessages([m.key])
  console.log(color(`Group Chat:`, 'green'))
  console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat)+'\n')
} else {
  Darco.readMessages([m.key])
  console.log(color(`Private Chat:`, 'green'))
  console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender)+'\n')
}


Darco.sendPresenceUpdate('unavailable', from)




//antispam kick
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {

console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))

return await Darco.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

}


const banRep = () => {
Darco.sendMessage(m.chat, {
text:`Sorry you've been banned, please chat @${creator.split("@")[0]} to unban`,
mentions: [creator],
},
{
quoted:m
})
}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	displayName: await Darco.getName(i),
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Darco.getName(i)}\nFN:${await Darco.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
  })
}

if (global.autoTyping) {
if (command) {
Darco.sendPresenceUpdate('composing', from)
}
}
if (global.autoRecord) {
if (command) {
Darco.sendPresenceUpdate('recording', from)
}
}



//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp


switch (command) {
/*
              Ⓒ 𝙳𝚊𝚛𝚔 𝙼𝚊𝚗 𝙸𝚗𝚌.
    # = = = = C O M M A N D S :) = = = = #
              Ⓒ 𝙳𝚊𝚛𝚔 𝙼𝚊𝚗 𝙸𝚗𝚌.
*/

case 'ping': {
  replydarco(`🟢 *S P E E D* : ${latensi.toFixed(4)} _ms_`)
}
break



case 'زخرف': case 'زخرفه': case 'زخرفة': case 'خط': case 'style': case 'styletext': {
if (!q) return replydarco(`*[❗]  لاستخدام امر "خط" اکتب نص باللغة إنجليزیة*\n*مـثــال : ${prefix + command} good*`)
    try {
        const response = await fetch(`https://botz-openai-prod-botz-chatgpt-s78su6.mo1.mogenius.io/decor?text=${encodeURIComponent(q)}`);
        const data = await response.json();
        const results = data.results;  // تعديل هنا للحصول على مصفوفة النتائج

        // تحويل مصفوفة النتائج إلى سلسلة نصية
        const formattedResults = results.join('\n');

        const fullResult = `${formattedResults}\n\nCreator: *dark man*`;
        replydarco(fullResult);
    } catch (error) {
        console.error('Error:', error);
        throw `*ERROR*`;
    }
}
  break



case 'أكتب': case 'اكتب': case 'qc': case'text': {
  if (!args[0] && !m.quoted) {
    return replydarco(`*[❗]  لاستخدام امر "${command}" اکتب نص باللغة إنجليزیة واذا كان بالعربي اكتب الكلامات عكس*\n\n*مـثــال : ${prefix + command} السلام وعليكم*`)
  }
  let userPfp
  if (m.quoted) {
    try {
      userPfp = await Darco.profilePictureUrl(m.quoted.sender, "image")
} catch (e) {
  userPfp = defaultpp
}
} else {
  try {
    userPfp = await Darco.profilePictureUrl(m.sender, "image")
} catch (e) {
  userPfp = defaultpp
}
  }
  const waUserName = pushname
  const quoteText = m.quoted ? m.quoted.body : args.join(" ")
  const quoteJson = {
    type: "quote",
    format: "png",
    backgroundColor: "#000000",
    width: 700,
    height: 580,
    scale: 2,
    messages: [{
      entities: [],
      avatar: true,
      from: {
        id: 1,
        name: waUserName,
        photo: {
        url: userPfp,
        },
      },
      text: quoteText,
      replyMessage: {},
      },
    ],
  }
  try {
    const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
      headers: { "Content-Type": "application/json" },
    })
    const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
    Darco.sendImageAsSticker(m.chat, buffer, m, {packname: packname, author: author})
} catch (error) {
  console.error(error)
  replydarco('خطأ')
}
}
  break



case 'منشن': case 'tagall': {
  if (!m.isGroup) return replydarco('*[❗]  هذا الامر فقط مخصص للمجموعات!*')
  if (!isAdmins && !DarcoTheCreator) return replydarco('*[❗]  هذا الامر فقط مخصص لـ‌ مشرفي المجموعة!*')
  if (!isBotAdmins) return replydarco('*[❗]  انا لا يمكنني تشغيل هذا الأمر الا اذا اصبحت مشرفا اولا!*')
  me = m.sender
let teks = `
*⧉┆مــنـشــن جــماعـــي↶*

*⟣╎الــجـروب : ${groupName}*

*♕︎╎الاعـضــاء : ${groupMembers.length}*

*❃╎الـرسـالــة : ${q ? q : 'بلا رسالة'}*

────── • ◈ • ──────\n
`
  for (let mem of participants) {
    teks += `*❦┆↜ @${mem.id.split('@')[0]}*\n`
  }
  Darco.sendMessage(m.chat, { text: teks+'\n────── • ◈ • ──────\n\n\n*▌│█║▌║▌║║▌║▌║▌║█*', mentions: participants.map(a => a.id) }, { quoted: m })
}
  break



case 'مطور': case 'المطور': case 'owner': {
const repf = await Darco.sendMessage(from, { 
  contacts: { 
  displayName: `${list.length} Contact`, 
  contacts: list }, mentions: [sender] }, { quoted: m })
  Darco.sendMessage(from, { text : `*✦مـرحـبا @${sender.split("@")[0]} ، هــذا هـو صـاحبـي☘ ، ◥للمــعلومــة انــا لــن ادخـل جــروبات الا بعــد اذن مــالكــي◤ شــكـرا لاسـتخــدامـك✦*`, mentions: [sender]}, { quoted: repf })
}
  break



case 'gpt': case 'chatgpt': case 'ai': case 'openai': case 'بوت': {
if (!q) return replydarco(`*[❗]  لاستخدام امر "${command}" او "ai" اکتب ☟*\n*مـثــال : ${prefix + command} متی اخترع اول كمبيوتر*`)
try {
  const response = await fetch(`https://botz-openai-prod-botz-chatgpt-s78su6.mo1.mogenius.io/chatgpt?text=${encodeURIComponent(q)}`);
  const data = await response.json();
  const result = data.result
  const fullResult = `${result}\n\nCreator: *dark man*`;
  replydarco(fullResult.trim(data));
} catch (error) {
  console.error('Error:', error); 
  throw `*ERROR*`;
}}
  break



case 'ستيكر': case 'ملصق': case 's': case 'sticker': case 'stiker': {
  if (!quoted) return replydarco(`*[❗]  ارسل "صوره" او "فيديو" و بعدها رد علیها و استخدم امر "${prefix+command}"*`)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await Darco.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return replydarco(`*[❗]  ارسل "صوره" او "فيديو" و بعدها رد علیها و استخدم امر "${prefix+command}"*`)
  let media = await quoted.download()
  let encmedia = await Darco.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
  replydarco(`*[❗]  ارسل "صوره" او "فيديو" و بعدها رد علیها و استخدم امر "${prefix+command}"*`)
}}
  break



case 'المهام': case 'مهام': case 'الاوامر': case 'اوامر': case 'alive': case 'panel': case 'list': case 'menu': case 'help': case '?': {
text_darco = `*┏☫─━┈━─━☾🩵☽━┈━─━┈☫┓*

*⧉┆اهــلا '${pushname}'*
──── • ◈ • ────
*⧉┆أنـا اسـمـــي "مــولــوب"*
*⧉┆هــا لــك الـأوامـــر الـخــاص بــي ☟*

*━┅┄⊣☫﹝📜﹞☫⊢┄┅━*

*⌠☬↜╎.منشن⌡⁦*
*⌠☬↜╎.ملصق⌡⁦*
*⌠☬↜╎.خط⌡⁦*
*⌠☬↜╎.اكتب⌡⁦*
*⌠☬↜╎.بوت/GPT⌡⁦*
─ • ◈ • ─
*⌠☬↜╎.المطور⌡⁦*

*━┅┄⊣☫﹝📜﹞☫⊢┄┅━*

*⧉┆مـلاحــظــة :* 
*⓵يمنع منعا بتا سب البوت*
*⓶استخدام البوت بشكل متوازن و بدون تسبب ازعاج للاعضاء.*

*┗☫─━┈━─━☾🩵☽━┈━─━┈☫┛*


*_'ᴍᴏʟᴏʙ'_*`  
Darco.sendMessage(from, { 
  caption: text_darco,
  image: { url: 'https://telegra.ph/file/3e2fd2a20b9ecace9c041.jpg' },
  contextInfo:{
  mentionedJid:[sender],
}}, { quoted: m }
)}
  break



/*
(: The End Commands :)

(\_/)
( *.*)
( >❤️

*/
default:
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
Darco.sendMessage("989172087867@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
isForwarded: true
}})
}}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
