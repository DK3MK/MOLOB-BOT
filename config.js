const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//owmner v card
global.owner = ['989172087867'] //ur owner number
global.ownernomer = "989172087867" //ur owner number2
global.ownername = "𝚂𝚎𝚋𝚊𝚜𝚝𝚒𝚊𝚗" //ur owner name
global.ytname = "YT: 9TL" //ur yt chanel name
global.socialm = "GitHub: Dark-Man747" //ur github or insta name
global.location = "darco" //ur location

//new
global.botname = "мσℓσв вσт"
global.ownernumber = '989172087867'
global.ownername = '𝚂𝚎𝚋𝚊𝚜𝚝𝚒𝚊𝚗'
global.ownerNumber = ["989172087867@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@9TL"
global.websitex = "https://youtube.com/@9TL"
global.wagc = "https://chat.whatsapp.com/Har7Z8RPqDO0jZP2FeRApN"
global.themeemoji = '🖤'
global.wm = "عمكم جميعا"
global.botscript = 'https://github.com/Dark-Man747/MOLOB-BOT' //script link
global.packname = "мσℓσв вσт"
global.author = "𝚂𝚎𝚋𝚊𝚜𝚝𝚒𝚊𝚗 .𝚍𝚊𝚛𝚔 𝚖𝚊𝚗"
global.creator = "989172087867@s.whatsapp.net"
global.prefa = ['','!','.','#','&','/']
global.sessionName = 'session'
global.hituet = 0


global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
