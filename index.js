const { modul } = require('./module');
const moment = require('moment-timezone');
const { color } = require('./lib/color')
const { boom, chalk, fs, FileType, path, pino, process, PhoneNumber, axios, _ } = modul;
const { Boom } = boom
const { default: DarcoConnect, DisconnectReason, makeInMemoryStore, useMultiFileAuthState, delay, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, downloadContentFromMessage, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, getBuffer, getSizeMedia, sleep } = require('./lib/myfunc')
const { nocache } = require('./lib/loader')

const prefix = ''
/*
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}
*/
const owner = ["989172087867"]

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

require('./darco-turbo.js')
nocache('../darco-turbo.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

async function DarcoBot() {
	const {  saveCreds, state } = await useMultiFileAuthState(`./${sessionName}`)
    	const Darco = DarcoConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['dark man','Safari','3.0'],
        auth: state,
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message || undefined
            }
            return {
                conversation: "Darco Bot Here"
            }
        }
    })

    store.bind(Darco.ev)

    Darco.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				DarcoBot()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				DarcoBot();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				DarcoBot();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				DarcoBot()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Scan Again And Run.`);
				DarcoBot();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				DarcoBot();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				DarcoBot();
			} else Darco.end(`Unknown DisconnectReason: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n🌿Connecting...`, 'yellow'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
            console.log(color(`🌿Connected to => ` + JSON.stringify(Darco.user, null, 2), 'yellow'))
			await delay(1999)
            console.log(chalk.yellow(`\n\n               ${chalk.bold.blue(`[ ${botname} ]`)}\n\n`))
	        console.log(color(`\n${themeemoji} YT CHANNEL: 9TL`,'magenta'))
            console.log(color(`${themeemoji} GITHUB: Dark-Man747 `,'magenta'))
            console.log(color(`${themeemoji} INSTAGRAM: @e9i.b `,'magenta'))
            console.log(color(`${themeemoji} WA NUMBER: ${owner}`,'magenta'))
            console.log(color(`${themeemoji} CREDIT: dark man\n`,'magenta'))
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  DarcoBot();
	}
	
})


Darco.ev.on('creds.update', await saveCreds)

    // Anti Call
    Darco.ev.on('call', async (XeonPapa) => {
    let botNumber = await Darco.decodeJid(Darco.user.id)
    let XeonBotNum = db.settings[botNumber].anticall
    if (!XeonBotNum) return
    console.log(XeonPapa)
    for (let XeonFucks of XeonPapa) {
    if (XeonFucks.isGroup == false) {
    if (XeonFucks.status == "offer") {
    let XeonBlokMsg = await Darco.sendTextWithMentions(XeonFucks.from, `*${Darco.user.name}* لا يمكن استقبال مكالمة ${XeonFucks.isVideo ? `فيديو` : `صوت` }. آسف يا @${XeonFucks.from.split('@')[0]} سيتم حظرك. إذا كان عن طريق الخطأ يرجى الاتصال بالمالك لإلغاء الحظر!`)
    Darco.sendContact(XeonFucks.from, global.owner, XeonBlokMsg)
    await sleep(8000)
    await Darco.updateBlockStatus(XeonFucks.from, "block")
    }
    }
    }
    })

    Darco.ev.on('messages.upsert', async chatUpdate => {
try {
const kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast')  {
await Darco.readMessages([kay.key]) }
if (!Darco.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
const m = smsg(Darco, kay, store)
require('./darco-turbo')(Darco, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

	// detect group update
    Darco.ev.on("groups.update", async (json) => {
			try {
ppgroup = await Darco.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0];
			if (res.announce == true) {
				await sleep(2000)
				Darco.sendMessage(res.id, {
					text: `「تغيير إعدادات المجموعة」\n\nتم إغلاق المجموعة من قبل المسؤول ، الآن يمكن للمسؤولين فقط إرسال الرسائل!`,
				});
			} else if (res.announce == false) {
				await sleep(2000)
				Darco.sendMessage(res.id, {
					text: `「تغيير إعدادات المجموعة」\n\nتم فتح المجموعة من قبل المسؤول ، الآن يمكن للمشاركين إرسال رسائل!`,
				});
			} else if (res.restrict == true) {
				await sleep(2000)
				Darco.sendMessage(res.id, {
					text: `「تغيير إعدادات المجموعة」\n\nتم تقييد معلومات المجموعة ، الآن يمكن للمسؤول فقط تحرير معلومات المجموعة!`,
				});
			} else if (res.restrict == false) {
				await sleep(2000)
				Darco.sendMessage(res.id, {
					text: `「تغيير إعدادات المجموعة」\n\nتم فتح معلومات المجموعة ، الآن يمكن للمشاركين تحرير معلومات المجموعة!`,
				});
			} else if(!res.desc == ''){
				await sleep(2000)
				Darco.sendMessage(res.id, { 
					text: `「تغيير إعدادات المجموعة」\n\n*تم تغيير وصف المجموعة إلى*\n\n${res.desc}`,
				});
      } else {
				await sleep(2000)
				Darco.sendMessage(res.id, {
					text: `「تغيير إعدادات المجموعة」\n\n*تم تغيير اسم المجموعة إلى*\n\n*${res.subject}*`,
				});//\n\n
			} 
			
		});
		
        Darco.ev.on('group-participants.update', async (anu) => {
console.log('grouping'+anu)
try {
let metadata = await Darco.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await Darco.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/13f55e301c9f61eadd628.jpg'
}
try {
ppgroup = await Darco.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
memb = metadata.participants.length
DarcoWlcm = await getBuffer(ppuser)
DarcoLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const xeonbuffer = await getBuffer(ppuser)
                let xeonName = num
                const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length// ${metadata.subject} = name group|| ${xmembers}th = conut now|| @${xeonName.split("@")[0]} = user
darcobody = `
*⌯╾╾╾⟞❲🩵❳⟝╾╾╾⌯*
*❧ مرحبا بك/ي "@${xeonName.split("@")[0]}"*

*❧ اهلا و سهلا و تشرفنا بك/ي في مجموعه : ${metadata.subject}*

*❧ من فضلك/ي اقراء الوصف!*

${metadata.desc}
*⌯╾╾╾⟞❲🩵❳⟝╾╾╾⌯*
`
   Darco.sendMessage(anu.id,
 { text: darcobody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {
 "showAdAttribution": false,
 "containsAutoReply": true,
 "title": `aboud coding`,
 "body": `dark man`,
 "previewType": "PHOTO",
 "thumbnailUrl": `https://telegra.ph/file/3694d5edde3846459647b.jpg`,
 "thumbnail": DarcoWlcm,
 "sourceUrl": `${wagc}`}}})
                } else if (anu.action == 'remove') {
                	const xeonbuffer = await getBuffer(ppuser)
                    const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	let xeonName = num
                    const xeonmembers = metadata.participants.length//@${xeonName.split("@")[0]}
darcoobody = `
⌯╾╾╾⟞❲🖤❳⟝╾╾╾⌯
❧ "@${xeonName.split("@")[0]}"

❧ غادر المجموعة ⛔
⌯╾╾╾⟞❲🖤❳⟝╾╾╾⌯
`
   Darco.sendMessage(anu.id,
 { text: darcoobody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {
 "showAdAttribution": false,
 "containsAutoReply": true,
 "title": `aboud coding`,
 "body": `dark man`,
 "previewType": "PHOTO",
 "thumbnailUrl": `https://telegra.ph/file/3694d5edde3846459647b.jpg`,
 "thumbnail": DarcoLft,
 "sourceUrl": `${wagc}`}}})
} else if (anu.action == 'promote') {
const xeonbuffer = await getBuffer(ppuser)
const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let xeonName = num//@${xeonName.split("@")[0]} add admin
xeonbody = `تهانينا @${xeonName.split("@")[0]}، لقد *تمت ترقيتك* إلى *مشرف* 🥳`
Darco.sendMessage(anu.id,
 { text: xeonbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {
 "showAdAttribution": false,
 "containsAutoReply": true,
 "title": `aboud coding`,
 "body": `dark man`,
 "previewType": "PHOTO",
 "thumbnailUrl": `https://telegra.ph/file/3694d5edde3846459647b.jpg`,
 "sourceUrl": `${wagc}`}}})
} else if (anu.action == 'demote') {
const xeonbuffer = await getBuffer(ppuser)
const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let xeonName = num//@${xeonName.split("@")[0]} del admin
xeonbody = `اووه‼ ️ @${xeonName.split("@")[0]}، لقد تم *خفض رتبتك* من *المشرف* 😬`
Darco.sendMessage(anu.id,
 { text: xeonbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {
 "showAdAttribution": false,
 "containsAutoReply": true,
 "title": `aboud coding`,
 "body": `dark man`,
 "previewType": "PHOTO",
 "thumbnailUrl": `https://telegra.ph/file/3694d5edde3846459647b.jpg`,
 "sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
})

    // respon cmd pollMessage
    async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Darco Bot Here"
        }
    }
    Darco.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                Darco.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })

    Darco.sendTextWithMentions = async (jid, text, quoted, options = {}) => Darco.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    Darco.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Darco.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Darco.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

Darco.getName = (jid, withoutContact  = false) => {
id = Darco.decodeJid(jid)
withoutContact = Darco.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Darco.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Darco.decodeJid(Darco.user.id) ?
Darco.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Darco.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

Darco.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await Darco.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Darco.getName(i)}\nFN:${await Darco.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	Darco.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

    Darco.setStatus = (status) => {
        Darco.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

Darco.public = true

Darco.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Darco.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

Darco.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await Darco.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

Darco.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await Darco.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

Darco.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await Darco.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

Darco.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Darco.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

Darco.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

Darco.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await Darco.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await Darco.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

Darco.sendText = (jid, text, quoted = '', options) => Darco.sendMessage(jid, { text: text, ...options }, { quoted })

Darco.serializeM = (m) => smsg(Darco, m, store)

Darco.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
Darco.sendMessage(jid, buttonMessage, { quoted, ...options })
}

Darco.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: Darco.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `${websitex}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${ownernumber}@s.whatsapp.net`
}
}, options)
return Darco.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

Darco.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
Darco.relayMessage(jid, template.message, { messageId: template.key.id })
}

Darco.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
Darco.sendMessage(jid, fjejfjjjer, { quoted: m })
}


            Darco.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
                let type = await Darco.getFile(path, true)
                let { res, data: file, filename: pathFile } = type
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } }
                    catch (e) { if (e.json) throw e.json }
                }
                const fileSize = fs.statSync(pathFile).size / 1024 / 1024
                if (fileSize >= 1800) throw new Error(' The file size is too large\n\n')
                let opt = {}
                if (quoted) opt.quoted = quoted
                if (!type) options.asDocument = true
                let mtype = '', mimetype = options.mimetype || type.mime, convert
                if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
                else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
                else if (/video/.test(type.mime)) mtype = 'video'
                else if (/audio/.test(type.mime)) (
                    convert = await toAudio(file, type.ext),
                    file = convert.data,
                    pathFile = convert.filename,
                    mtype = 'audio',
                    mimetype = options.mimetype || 'audio/ogg; codecs=opus'
                )
                else mtype = 'document'
                if (options.asDocument) mtype = 'document'

                delete options.asSticker
                delete options.asLocation
                delete options.asVideo
                delete options.asDocument
                delete options.asImage

                let message = {
                    ...options,
                    caption,
                    ptt,
                    [mtype]: { url: pathFile },
                    mimetype,
                    fileName: filename || pathFile.split('/').pop()
                }

                let m
                try {
                    m = await Darco.sendMessage(jid, message, { ...opt, ...options })
                } catch (e) {
                    console.error(e)
                    m = null
                } finally {
                    if (!m) m = await Darco.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
                    file = null // releasing the memory
                    return m
                }
            }


      Darco.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return Darco.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return Darco.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return Darco.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return Darco.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return Darco.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      

      Darco.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return Darco.sendMessage(jid, { poll: { name, values, selectableCount }}) }

return Darco

}

DarcoBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
