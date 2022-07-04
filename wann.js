const {
	BufferJSON, 
	WA_DEFAULT_EPHEMERAL, 
	generateWAMessageFromContent, 
	proto, 
	generateWAMessageContent, 
	generateWAMessage, 
	prepareWAMessageMedia, 
	makeInMemoryStore, 
	areJidsSameUser, 
	getContentType 
} = require('@adiwajshing/baileys');
const {
	exec, 
	spawn, 
	execSync 
} = require("child_process");
const fetch = (...args) => import('node-fetch').then(({
	default: fetch
}) => fetch(...args));
const { JSDOM } = require('jsdom');
const { performance } = require('perf_hooks');
const { Primbon } = require('scrape-primbon');
const fs = require('fs');
const pino = require('pino');
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const path = require('path');
const hx = require('hxz-api');
const xfar = require('xfarr-api');
const os = require('os');
const FormData = require("form-data");
const ms = require('parse-ms');
const toMs = require('ms');
const moment = require('moment-timezone');
const speed = require('performance-now');
const primbon = new Primbon();
const speedofbot = require("performance-now");
const Dym = require("didyoumean");
const {
	onGoing, 
	dadu, 
	asupan 
} = require("./FuncBot/otakudesu.js");
const {
	smsg, 
	formatp, 
	formatDate, 
	getTime, 
	isUrl, 
	sleep, 
	clockString, 
	fetchJson, 
	getBuffer, 
	jsonformat, 
	format, 
	parseMention, 
	getRandom 
} = require('./FuncBot/myfunc');
const {
	addLevelingId, 
	addLevelingLevel, 
	addLevelingXp, 
	getLevelingId, 
	getLevelingLevel, 
	getLevelingXp 
} = require("./FuncBot/lvlfunction");
const {
	color, 
	mylog, 
	infolog 
} = require("./FuncBot/color");
const {
	isLimit, 
	limitAdd, 
	getDeposit, 
	addDeposit, 
	kurangDeposit, 
	getLimit, 
	giveLimit, 
	addlistml, 
	kuranglistml, 
	addBalance, 
	kurangBalance, 
	getBalance, 
	isGame, 
	gameAdd, 
	givegame, 
	cekGLimit 
} = require("./FuncBot/limit");
const { 
    isSetProses, 
    addSetProses, 
    removeSetProses, 
    changeSetProses, 
    getTextSetProses 
} = require('./FuncBot/setproses');
const { 
    isSetDone, 
    addSetDone, 
    removeSetDone, 
    changeSetDone, 
    getTextSetDone 
} = require('./FuncBot/setdone');
const {
	addResponList, 
	delResponList, 
	isAlreadyResponList, 
	isAlreadyResponListGroup, 
	sendResponList, 
	updateResponList, 
	getDataResponList 
} = require('./FuncBot/respon-list');
const {
	addRespons, 
	checkRespons, 
	deleteRespons
} = require('./FuncBot/respon');
const premium = require("./FuncBot/premium");

let Wann = fs.readFileSync('./media/Wann.jpg');
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));

global.db = JSON.parse(fs.readFileSync('./src/database.json'));
if (global.db) global.db = {
	sticker: {},
	database: {},
	game: {},
	others: {},
	users: {},
	chats: {},
	...(global.db || {})
}

global.called = false
global.Prefix = 'Multi'
global.ownerNumber = '6285870824804'
global.botname = 'FSS BOT-MD' 
global.ownername = 'Febrian'
global.owner = ['6285870824804'] 
global.pemilik = ['6285870824804'] 
global.pengguna = 'Febrian'
global.ownernma = 'Febrian'
global.packname = 'Febrian' 
global.author = 'Febrian' 
global.sessionName = 'session'
global.limitawal = { premium: "∞", free: 100 }
global.thumb = fs.readFileSync('./media/Wann.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')
global.hargadmff = 1261
global.hargadmml = 1700
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
let judullist = []
let trennama = db.others.trennama = []
let trenemail = db.others.trenemail =[]
let trenpw = db.others.trenpw =[]
let daftarlist = []
let lolkey = 'API_KEY' //BELI DI LOLHUMAN
let antiyt = JSON.parse(fs.readFileSync('./database/antiyt.json'));
let antitele = JSON.parse(fs.readFileSync('./database/antitele.json'));
let antibitly = JSON.parse(fs.readFileSync('./database/antibitly.json'));
let akinator = JSON.parse(fs.readFileSync('./database/akinator.json'));
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let money = JSON.parse(fs.readFileSync('./uang.json'));
let deposit = JSON.parse(fs.readFileSync('./deposit.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
	
const stire = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
module.exports = wann = async (wann, m, mentioned, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const args = chath.split(' ')
        const command = chath.toLowerCase().split(' ')[0] || ''
        const isCmd = command.startsWith(prefix)
        const pushname = m.pushName || "No Name"
        const botNumber = await wann.decodeJid(wann.user.id)
        const isWann = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = chath.slice(command.length + 1, chath.length)
        const from = m.chat
        const sender = m.sender
        const isGroup = m.isGroup
        const tanggal = moment().format("ll")
        const jam = moment().format("HH:mm:ss z")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await wann.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isAntiYt = isGroup ? antiyt.includes(from) : false
        const isAntiTele = isGroup ? antitele.includes(from) : false
        const isAntiBitly = isGroup ? antibitly.includes(from) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isUser = pendaftar.includes(sender)
    	const isPremium = isWann ? true : premium.checkPremiumUser(m.sender, _premium)
        moment.tz.setDefault("Asia/Jakarta").locale("id");
        const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
		const { ownerNumber, botName, gamewaktu, limitCount } = setting
		
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)	
		const runtime = function (seconds) {
			seconds = Number(seconds);
			var d = Math.floor(seconds / (3600 * 24));
			var h = Math.floor((seconds % (3600 * 24)) / 3600);
			var m = Math.floor((seconds % 3600) / 60);
			var s = Math.floor(seconds % 60);
			var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
			var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
			var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
			var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
			return dDisplay + hDisplay + mDisplay + sDisplay;
		}

		(function(_0x5abdd1,_0x3c1b0e){const _0x37e8fa=_0x4d91,_0x17fde0=_0x5abdd1();while(!![]){try{const _0x158220=parseInt(_0x37e8fa(0x13d))/0x1*(-parseInt(_0x37e8fa(0x137))/0x2)+parseInt(_0x37e8fa(0x13f))/0x3*(parseInt(_0x37e8fa(0x142))/0x4)+parseInt(_0x37e8fa(0x141))/0x5*(-parseInt(_0x37e8fa(0x13b))/0x6)+parseInt(_0x37e8fa(0x149))/0x7*(parseInt(_0x37e8fa(0x138))/0x8)+-parseInt(_0x37e8fa(0x140))/0x9+parseInt(_0x37e8fa(0x135))/0xa*(-parseInt(_0x37e8fa(0x143))/0xb)+parseInt(_0x37e8fa(0x13c))/0xc*(parseInt(_0x37e8fa(0x13a))/0xd);if(_0x158220===_0x3c1b0e)break;else _0x17fde0['push'](_0x17fde0['shift']());}catch(_0x4f2de9){_0x17fde0['push'](_0x17fde0['shift']());}}}(_0x3f4d,0x3f6f1));const mentions=(_0x4861e2,_0x228a44,_0x40663e)=>{const _0x4f54=_0x4d91;_0x40663e==null||_0x40663e==undefined||_0x40663e==![]?wann[_0x4f54(0x13e)](from,{'text':_0x4861e2[_0x4f54(0x147)](),'jpegThumbnail':fs['readFileSync'](_0x4f54(0x144))},text,{'sendEphemeral':!![],'contextInfo':{'mentions':_0x228a44}}):wann[_0x4f54(0x13e)](from,{'text':_0x4861e2[_0x4f54(0x147)](),'jpegThumbnail':fs[_0x4f54(0x148)]('./media/Wann.jpg')},text,{'sendEphemeral':!![],'quoted':m,'contextInfo':{'mentions':_0x228a44}});},reply=_0x1d7485=>{const _0x140e15=_0x4d91;wann[_0x140e15(0x13e)](m[_0x140e15(0x145)],{'text':_0x1d7485,'contextInfo':{'externalAdReply':{'title':'\x20'+global[_0x140e15(0x146)],'body':'FSS\x20BOT\x20MD','previewType':'PHOTO','thumbnailUrl':'','thumbnail':fs['readFileSync'](_0x140e15(0x144)),'sourceUrl':_0x140e15(0x139)}}},{'quoted':m});},reply1=_0x3bab93=>{const _0x45589b=_0x4d91;wann[_0x45589b(0x13e)](m[_0x45589b(0x145)],{'text':_0x3bab93,'contextInfo':{'externalAdReply':{'title':'\x20'+global[_0x45589b(0x146)],'body':'','previewType':_0x45589b(0x136),'thumbnailUrl':'','thumbnail':fs['readFileSync'](_0x45589b(0x144)),'sourceUrl':_0x45589b(0x139)}}},{'quoted':m});};function _0x4d91(_0xa4f82a,_0x4c7c2c){const _0x3f4d5a=_0x3f4d();return _0x4d91=function(_0x4d91b7,_0x116aa7){_0x4d91b7=_0x4d91b7-0x135;let _0x14626d=_0x3f4d5a[_0x4d91b7];return _0x14626d;},_0x4d91(_0xa4f82a,_0x4c7c2c);}function _0x3f4d(){const _0x47f54d=['PHOTO','4zEfnlN','8RXBmZV','https://youtu.be/FLsSlRlcnYs','13mTuwAs','120ANWdhJ','7356276kGgJPU','107949nJkOak','sendMessage','3tRSSwe','300222DmynZl','925huNLgD','1164116OadnZw','5449499SKGoZG','./media/Wann.jpg','chat','botname','trim','readFileSync','728966QYuBoZ','10qFZbvI'];_0x3f4d=function(){return _0x47f54d;};return _0x3f4d();}

		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			let user = global.db.users[m.sender]
			if (typeof user !== 'object') global.db.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.afkTime)) user.afkTime = -1
				if (!('afkReason' in user)) user.afkReason = ''
				if (!isNumber(user.limit)) user.limit = limitUser
			} else global.db.users[m.sender] = {
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
				depo: '0',
			}
			let chats = global.db.chats[m.chat]
			if (typeof chats !== 'object') global.db.chats[m.chat] = {}
			if (chats) {
				if (!('mute' in chats)) chats.mute = false
				if (!('wame' in chats)) chats.wame = false
			} else global.db.chats[m.chat] = {
				mute: false,
				wame: false,
			}
			} catch (err) {
				console.error(err)
			}
	    
			if (!wann.public) {
				if (!m.key.fromMe) return
			}

			function ngelistisi(){
				let list = '';
				list += `${judullist[0]}\n`;
				daftarlist.forEach(function (item, index){
					index = index+1;
					list += `${index}. ${item}\n`
				});
				return list;
			}

			function ngelisttugas(){
				let list = '';
				list += "Daftar tugas : \n"
				tugas.forEach(function (item, index){
					index = index+1;
					list += `${index}. ${item}\n`
				});
				return list;
			}
			
			const casinoSave = (db, obj, session) => {
				var mine = db
				const dbdir = `./database/${session}.json`
				fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
			}
			const setCasino = (session) => {
				const dbdir = `./database/${session}.json`
				if (!fs.existsSync(dbdir)) {
					const objcas = {
						status: true,
						turn: 'Z',
						session: session,
						Z: null,
						Y: null,
						nominal: null,
					}
					casinoSave(dbdir, objcas, session)
					return objcas
				} else {
					const read = JSON.parse(fs.readFileSync(dbdir))
					return read
				}
			}
			const deleteCasino = (from) => {
				return fs.unlinkSync('./database/' + from + '.json')
			}
			
			async function akiStart() {
				var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkey}`)
				return data
			}
			async function akiAnswer(server, frontaddr, session, signature, step, answer) {
				var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
				return data
			}
			async function akiBack(server, frontaddr, session, signature, step, answer) {
				var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/back?apikey=${lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${answer}`)
				return data
			}
			async function akiEnd(server, session, signature, step) {
				var data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/end?apikey=${lolkey}&server=${server}&session=${session}&signature=${signature}&step=${step}`)
				return data
			}
			
			async function addCountCmdUser(nama, sender, u) {
				var posi = null
				var pos = null
				Object.keys(u).forEach((i) => {
					if (u[i].jid === sender) {
						posi = i
					}
				})
				if (posi === null) {
					u.push({jid: sender, db: [{nama: nama, count: 0}]})
					fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
					Object.keys(u).forEach((i) => {
						if (u[i].jid === sender) {
							posi = i
						}
					})
				}
				if (posi !== null) {
					Object.keys(u[posi].db).forEach((i) => {
						if (u[posi].db[i].nama === nama) {
							pos = i
						}
					})
					if (pos === null) {
						u[posi].db.push({nama: nama, count: 1})
						fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
					} else {
						u[posi].db[pos].count += 1
						fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
					}
				}
			}
			
			async function getPosiCmdUser(sender, _db) {
				var posi = null
				Object.keys(_db).forEach((i) => {
					if (_db[i].jid === sender) {
						posi = i
					}
				})
				return posi
			}
			
			function monospace(string) {
				return '```' + string + '```'
			}
			function randomNomor(min, max = null) {
				if (max !== null) {
					min = Math.ceil(min);
					max = Math.floor(max);
					return Math.floor(Math.random() * (max - min + 1)) + min;
				} else {
					return Math.floor(Math.random() * min) + 1
				}
			}
			
			const pickRandom = (arr) => {
				return arr[Math.floor(Math.random() * arr.length)]
			}
			const nebal = (angka) => {
                   return Math.floor(angka)
			}
			
			async function addCountCmd(nama, sender, _db) {
				addCountCmdUser(nama, sender, _cmdUser)
				var posi = null
				Object.keys(_db).forEach((i) => {
					if (_db[i].nama === nama) {
						posi = i
					}
				})
				if (posi === null) {
					_db.push({nama: nama, count: 1})
					fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
				} else {
					_db[posi].count += 1
					fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
				}
			}
			
			function clockString(ms) {
				let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
				let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
				let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
				return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
			}
			
			const buttonsDefault = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6285870824804` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/` } },
			{ quickReplyButton: { displayText: `🧑 Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `💰 Donasi`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `📜 Dashboard`, id: `${prefix}dashboard` } }
			]
			const buttonsFirst = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6285870824804` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/` } },
			{ quickReplyButton: { displayText: `🧑 Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `📝 Menu`, id: `${prefix}menu` } },
			{ quickReplyButton: { displayText: `📜 Rules`, id: `${prefix}rules` } }
			]
			const buttonsAnon = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6285870824804` } },
			{ urlButton: { displayText: `Instagram Owner`, url : `https://instagram.com/` } },
			{ quickReplyButton: { displayText: `📱 Search`, id: `${prefix}search` } },
			{ quickReplyButton: { displayText: `📲 Skip`, id: `${prefix}skip` } }
			]

			const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
				let po = prepareMessageFromContent(from, {
					"listMessage": {
						"title": title,
						"description": desc,
						"buttonText": "CLICK HERE",
						"listType": "SINGLE_SELECT",
						"sections": list
					}
				}, {})
				return wann.relayWAMessage(po, {waitForAck: true})
			}

			global.mess = {
				success: 'Berhasil.',
				admin: 'Fitur Khusus Admin Group!',
				botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
				owner: 'Fitur Khusus Owner Bot',
				group: 'Fitur Digunakan Hanya Untuk Group!',
				private: 'Fitur Digunakan Hanya Untuk Private Chat!',
				bot: 'Fitur Khusus Pengguna Nomor Bot',
				wait: 'Loading...',
				done: 'Done',
				endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
				wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
				example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)',
				example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
			}

			if (isCmd && !isUser) {
				pendaftar.push(sender)
				fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
			}
			
			if (m.message) {
				wann.sendReadReceipt(m.chat, m.sender, [m.key.id])
				if (!m.isGroup && isCmd && !m.key.fromMe) {
					console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command.slice(1)} [${args.length}]`), 'from', color(pushname))
				}
				if (m.isGroup && isCmd && !m.key.fromMe) {
					console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command.slice(1)} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
				}
			}

			const levelRole = getLevelingLevel(m.sender)
			var role = 'Warrior III'
			if (levelRole <= 5) {
				role = 'Warrior II'
			} else if (levelRole <= 10) {
				role = 'Warrior I'
			} else if (levelRole <= 15) {
				role = 'Elite III'
			} else if (levelRole <= 20) {
				role = 'Elite II'
			} else if (levelRole <= 25) {
				role = 'Elite I'
			} else if (levelRole <= 30) {
				role = 'Master III'
			} else if (levelRole <= 35) {
				role = 'Master II'
			} else if (levelRole <= 40) {
				role = 'Master I'
			} else if (levelRole <= 45) {
				role = 'GrandMaster III'
			} else if (levelRole <= 50) {
				role = 'GrandMaster II'
			} else if (levelRole <= 55) {
				role = 'GrandMaster I'
			} else if (levelRole <= 60) {
				role = 'Epic III'
			} else if (levelRole <= 65) {
				role = 'Epic II'
			} else if (levelRole <= 70) {
				role = 'Epic I'
			} else if (levelRole <= 75) {
				role = 'Legend III'
			} else if (levelRole <= 80) {
				role = 'Legend II'
			} else if (levelRole <= 85) {
				role = 'Legend I'
			} else if (levelRole <= 90) {
				role = 'Mythic'
			} else if (levelRole <= 95) {
				role = 'Mythical Glory'
			} else if (levelRole >= 100) {
				role = 'Immortal'
			} 
	
			// Anti link yt
			if (isGroup && isAntiYt && !isWann && !isAdmins && isBotAdmins) {
				if (chath.match(/(youtu.be\/)/gi)) {
					reply(`*「 YOUTUBE LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link youtube, maaf kamu akan di kick`)
					await wann.groupParticipantsUpdate(m.chat, [sender], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
			}
			// Anti link tele
			if (isGroup && isAntiTele && !isWann && !isAdmins && isBotAdmins) {
				if (chath.match(/(t.me\/)/gi)) {
					reply(`*「 TELEGRAM LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link telegram, maaf kamu akan di kick`)
					await wann.groupParticipantsUpdate(m.chat, [sender], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
			}
			// Anti bitly
			if (isGroup && isAntiBitly && !isWann && !isAdmins && isBotAdmins) {
				if (chath.match(/(bit.ly\/)/gi)) {
					reply(`*「 BIT.LY LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link bit.ly, maaf kamu akan di kick`)
					await wann.groupParticipantsUpdate(m.chat, [sender], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
				}
			}
			// Anti link grup
			if (isAntiLink) 
			if (budy.includes('https://chat.whatsapp.com/')) {
				m.reply(`*「 GROUP LINK DETECTOR 」*\n\n Bot Mendeteksi Anda Telah Mengirim Link Group\nMaaf Anda Akan Di Kick! `)
				if (isAdmins) return reply(`Admin Mah Bebas Bro`)
				if (isWann) return reply(`Owner Mah Bebas Bro`)
				let sianj = m.sender
				await wann.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			}
			// Anti link wame
			if (db.chats[m.chat].wame) {
				if (budy.match(`wa.me/`)) {
					m.reply(`「 WA.ME DETECTED 」\n\nYou have been detected sending a wa.me link, sorry you will be kicked !`)
					if (!isBotAdmins) return reply(`Bot must be admin first`)
					let gclink = (`https://wa.me/`)
					let isLinkThisGc = new RegExp(gclink, 'i')
					let isgclink = isLinkThisGc.test(m.text)
					if (isgclink) return reply(`Eh sorry it didn't happen, because you sent this wa.me link`)
					if (isAdmins) return reply(`Admin Mah Bebas Bro`)
					if (isWann) return reply(`Owner Mah Bebas Bro`)
					wann.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
			
			if (db.chats[m.chat].mute && !isAdmins && !isWann) {
				return
			}
			setInterval(() => {
				fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
			}, 60 * 1000)
			let cron = require('node-cron')
			cron.schedule('00 12 * * *', () => {
				let user = Object.keys(global.db.users)
				let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
				for (let jid of user) global.db.users[jid].limit = limitUser
				console.log('Reseted Limit')
			}, {
				scheduled: true,
				timezone: "Asia/Kolkata"
			})
			
			if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
				let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
				let { text, mentionedJid } = hash
				let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
					userJid: wann.user.id,
					quoted: m.quoted && m.quoted.fakeObj
				})
				messages.key.fromMe = areJidsSameUser(m.sender, wann.user.id)
				messages.key.id = m.key.id
				messages.pushName = m.pushName
				if (m.isGroup) messages.participant = m.sender
				let msg = {
					...chatUpdate,
					messages: [proto.WebMessageInfo.fromObject(messages)],
					type: 'append'
				}
				wann.ev.emit('messages.upsert', msg)
			}
			
			if (('family100'+m.chat in _family100) && !isCmd) {
				kuis = true
				let room = _family100['family100'+m.chat]
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
				let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
				if (!isSurender) {
					let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
					if (room.terjawab[index]) return !0
					room.terjawab[index] = m.sender
				}
				let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
				let caption = `
			Jawab pertanyaan dibawah ini :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
			${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
			${Array.from(room.jawaban, (jawaban, index) => {
				return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
			}).filter(v => v).join('\n')}
			${isSurender ? '' : `Perfect Player`}`.trim()
            wann.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
			}

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, wann.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, wann.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await wann.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await wann.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
	    wann.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    wann.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) wann.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) wann.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) wann.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    wann.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) wann.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) wann.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    wann.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        const addMonUser = (sender, amount) => {
      let position = false
      Object.keys(money).forEach((i) => {
        if (money[i].id === sender) {
          position = i
        }
      })
      if (position !== false) {
        money[position].money += amount
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
    }
    const moneyAdd = (sender, amount) => {
      let position = false
      Object.keys(money).forEach((i) => {
        if (money[i].id == sender) {
          position = i
        }
      })
      if (position !== false) {
        money[position].money -= amount
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
    }
    const getMonUser = (sender) => {
        let fiendh = false
      for (let potonlmt of money) {
        if (potonlmt.id === sender) {
           global.userPoton = potonlmt.money
          fiendh = true
          return global.userPoton
        }
      }
      //function adven
      if (fiendh === false) {
        let obj = { id: sender, money: 0 }
        money.push(obj)
        fs.writeFileSync('./uang.json', JSON.stringify(money))
      }
      }
        // Auto Write Database Akinator Every 1 Minutes
               setInterval(() => {
                  fs.writeFileSync('./database/akinator.json', JSON.stringify(akinator, null, 2))
               }, 30 * 1000)

               // Akinator
               if (!isGroup && akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd && ["0", "1", "2", "3", "4"].includes(chath)) {
                 var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
                 var jwb = (await akiAnswer(server, frontaddr, session, signature, step, chath)).result
                 if (jwb.hasOwnProperty('name')) {
                   var img = await getBuffer(jwb.image)
                   var cpt = `*HASIL DITEMUKAN*\n\nNama : ${jwb.name}\nDeskripsi : ${jwb.description}`
                   wann.sendMessage(from, { image: img, caption: cpt }, { quoted: m })
                   .then( res => {
                     delete akinator[sender.split("@")[0]]
                   })
                   return
                 }
                 /* if (chath == "5") {
                   var bhasil = (await akiBack(server, frontaddr, session, signature, step, chath)).result
                   var bques = bhasil.question
                   var bstep = bhasil.step
                   var bteks = `${question}\n\n`
                   bteks += `0 - Ya\n`
                   bteks += `1 - Tidak\n`
                   bteks += `2 - Tidak Tahu\n`
                   bteks += `3 - Mungkin\n`
                   bteks += `4 - Mungkin Tidak`
                   wann.sendMessage(from, { text: bteks }, { quoted: m }).then( res => {
                     var baki = akinator[sender.split("@")[0]]
                     baki.question = bques
                     baki.step = bstep
                     akinator[sender.split("@")[0]] = baki
                   })
                 } else {*/
                   var jques = jwb.question
                   var jstep = jwb.step
                   var jteks = `${jques}\n\n`
                   jteks += `0 - Ya\n`
                   jteks += `1 - Tidak\n`
                   jteks += `2 - Tidak Tahu\n`
                   jteks += `3 - Mungkin\n`
                   jteks += `4 - Mungkin Tidak`
                   wann.sendMessage(from, { text: jteks }, { quoted: m }).then( res => {
                     var jaki = akinator[sender.split("@")[0]]
                     jaki.question = jques
                     jaki.step = jstep
                     akinator[sender.split("@")[0]] = jaki
                   })
                 // }
               }
        
        function _0x345f(){var _0x4cfe05=['isGroup','./database/','2kmUJCf','16VbPPsS','379504QjstfZ','\x20-->\x20','\x20]\x0aMendapatkan:\x20$\x20','\x20👑\x0a\x0aPemenangnya\x20adalah\x20[\x20@','isImage','🎰\x20Casino\x20Game\x20💰\x0a\x0a•\x20@','\x20📍\x0a•\x20@','11ifwjLe','1328892tBBzrp','toLowerCase','7tWDDBA','2575oPcSgk','nominal','\x20🥈\x0a\x0aPemenangnya\x20adalah\x20[\x20@','260PQjwzY','image_url','@s.whatsapp.net','1150017kWotur','3703950RCNBsS','existsSync','sendMessage','sendImage','「\x20Game\x20Casino\x20Rejected\x20」\x0a\x0a•\x20@','14930710WYiSUA','\x20📍\x0a\x0aGames\x20Draw,\x20Tidak\x20Ada\x20Pemenang','1444057LOzRfD','response','chat','6414XhmXor','\x20Membatalkan\x20Game'];_0x345f=function(){return _0x4cfe05;};return _0x345f();}var _0x2d242f=_0x11db;function _0x11db(_0x144c1b,_0x4361ce){var _0x345f98=_0x345f();return _0x11db=function(_0x11dbac,_0x405d5b){_0x11dbac=_0x11dbac-0x12a;var _0x23c555=_0x345f98[_0x11dbac];return _0x23c555;},_0x11db(_0x144c1b,_0x4361ce);}(function(_0x12d3e8,_0x569fa6){var _0x281785=_0x11db,_0x1d8366=_0x12d3e8();while(!![]){try{var _0x34a6cc=-parseInt(_0x281785(0x12d))/0x1*(parseInt(_0x281785(0x134))/0x2)+-parseInt(_0x281785(0x147))/0x3*(parseInt(_0x281785(0x135))/0x4)+-parseInt(_0x281785(0x141))/0x5*(-parseInt(_0x281785(0x130))/0x6)+-parseInt(_0x281785(0x140))/0x7*(parseInt(_0x281785(0x136))/0x8)+-parseInt(_0x281785(0x148))/0x9+parseInt(_0x281785(0x12b))/0xa*(parseInt(_0x281785(0x13d))/0xb)+-parseInt(_0x281785(0x13e))/0xc*(-parseInt(_0x281785(0x144))/0xd);if(_0x34a6cc===_0x569fa6)break;else _0x1d8366['push'](_0x1d8366['shift']());}catch(_0x163f19){_0x1d8366['push'](_0x1d8366['shift']());}}}(_0x345f,0xc8b09));if(!isCmd&&m[_0x2d242f(0x132)]&&isAlreadyResponList(m[_0x2d242f(0x12f)],chath,db_respon_list)){var get_data_respon=getDataResponList(m[_0x2d242f(0x12f)],chath,db_respon_list);get_data_respon[_0x2d242f(0x13a)]===![]?wann[_0x2d242f(0x14a)](m[_0x2d242f(0x12f)],{'text':sendResponList(m[_0x2d242f(0x12f)],chath,db_respon_list)},{'quoted':m}):(buff=await getBuffer(get_data_respon[_0x2d242f(0x145)]),wann[_0x2d242f(0x14b)](m['chat'],buff,''+get_data_respon[_0x2d242f(0x12e)],m));}if(fs[_0x2d242f(0x149)](_0x2d242f(0x133)+from+'.json')){var casinoo=setCasino(''+from);sender==casinoo['Y']+_0x2d242f(0x146)&&chath[_0x2d242f(0x13f)]()=='n'&&(wann['sendMessage'](from,{'text':_0x2d242f(0x12a)+casinoo['Y']+_0x2d242f(0x131),'mentions':[casinoo['Y']+'@s.whatsapp.net']},{'quoted':m}),deleteCasino(from));if(sender==casinoo['Y']+'@s.whatsapp.net'&&chath['toLowerCase']()=='y'){var angka1=await randomNomor(0xa,0x14),angka2=await randomNomor(0xa,0x14);if(angka1>angka2)starGame='🎰\x20Casino\x20Game\x20💰\x0a\x0a•\x20@'+casinoo['Z']+'\x20-->\x20'+angka1+'\x20👑\x0a•\x20@'+casinoo['Y']+_0x2d242f(0x137)+angka2+_0x2d242f(0x143)+casinoo['Z']+_0x2d242f(0x138)+nebal(casinoo[_0x2d242f(0x142)]),wann['sendMessage'](from,{'text':starGame,'mentions':[casinoo['Z']+'@s.whatsapp.net',casinoo['Y']+'@s.whatsapp.net']},{'quoted':m}),await addBalance(casinoo['Z']+_0x2d242f(0x146),nebal(casinoo[_0x2d242f(0x142)]),balance),await kurangBalance(casinoo['Y']+_0x2d242f(0x146),nebal(casinoo[_0x2d242f(0x142)]),balance),deleteCasino(from);else{if(angka1<angka2)starGame='🎰\x20Casino\x20Game\x20💰\x0a\x0a•\x20@'+casinoo['Z']+_0x2d242f(0x137)+angka1+'\x20🥈\x0a•\x20@'+casinoo['Y']+_0x2d242f(0x137)+angka2+_0x2d242f(0x139)+casinoo['Y']+'\x20]\x0aMendapatkan:\x20$\x20'+nebal(casinoo[_0x2d242f(0x142)]),wann[_0x2d242f(0x14a)](from,{'text':starGame,'mentions':[casinoo['Z']+_0x2d242f(0x146),casinoo['Y']+_0x2d242f(0x146)]},{'quoted':m}),await addBalance(casinoo['Y']+'@s.whatsapp.net',nebal(casinoo['nominal']),balance),await kurangBalance(casinoo['Z']+_0x2d242f(0x146),nebal(casinoo['nominal']),balance),deleteCasino(from);else(angka1=angka2)&&(starGame=_0x2d242f(0x13b)+casinoo['Z']+'\x20-->\x20'+angka1+_0x2d242f(0x13c)+casinoo['Y']+_0x2d242f(0x137)+angka2+_0x2d242f(0x12c),wann[_0x2d242f(0x14a)](from,{'text':starGame,'mentions':[casinoo['Z']+_0x2d242f(0x146),casinoo['Y']+_0x2d242f(0x146)]},{'quoted':m}),deleteCasino(from));}}}

        switch(command) {          
case prefix+'help':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
                anu = `*── 「 FSS BOT - Versi MD 」 ──*
                
    _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
  
  Library : *Baileys-MD*.
  Prefix : ( ${prefix} )
  Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
  Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
  
  Status Anda : ${isWann ? 'Owner' : isPremium ? 'Premium' : 'Free'}
  Limit Harian : ${isWann ? '∞' : isPremium ? '∞' : global.db.users[m.sender].limit}
  Limit Game : ${cekGLimit(sender, gcount, glimit)}
  Total Pengguna : ${pendaftar.length}
  ${readmore}
  
 *｢  ANONYMOUS MENU  ｣*  	
 ● ${prefix}anonymous
 ● ${prefix}start
 ● ${prefix}next
 ● ${prefix}stop
 ● ${prefix}sendprofile
 ● ${prefix}author
 ● ${prefix}bug
 
  *｢ STORE MENU ｣*
 ● ${prefix}menu
 ● ${prefix}listadd
 ● ${prefix}update
 ● ${prefix}listdel
 ● p
 ● d
 
  *｢ MOVIE MENU ｣*    
 ● ${prefix}addtugas
 ● ${prefix}resettugas
 ● ${prefix}outputtugas
 ● ${prefix}hapustugas
 ● ${prefix}addjudultugas
 ● ${prefix}tambah
 ● ${prefix}kali
 ● ${prefix}kurang
 ● ${prefix}bagi
 
  *｢  BANK & PAYMENT  ｣*
 ● ${prefix}topbalance
 ● ${prefix}buylimit
 ● ${prefix}buyglimit
 ● ${prefix}transfer
 ● ${prefix}checklimit
 ● ${prefix}balance
 
 *｢  GROUP MENU  ｣*
 ● ${prefix}linkgroup
 ● ${prefix}antilink [enable/disable]
 ● ${prefix}ephemeral [option]
 ● ${prefix}setppgc [image]
 ● ${prefix}setname [text]
 ● ${prefix}setdesc [text]
 ● ${prefix}group [option]
 ● ${prefix}editinfo [option]
 ● ${prefix}add @tag
 ● ${prefix}kick @tag
 ● ${prefix}hidetag [text]
 ● ${prefix}tagall [text]
 ● ${prefix}promote @tag
 ● ${prefix}demote @tag
 ● ${prefix}vote [text]
 ● ${prefix}devote
 ● ${prefix}upvote
 ● ${prefix}cekvote
 ● ${prefix}hapusvote         
 
 *｢  OWNER MENU  ｣*    
 ● ${prefix}chat [option]
  ● ${prefix}getcase [name]
 ● ${prefix}join [link]
 ● ${prefix}leave
 ● ${prefix}setbotpp
 ● ${prefix}block @user
 ● ${prefix}unblock @user
 ● ${prefix}bcgroup
 ● ${prefix}bcall
 ● ${prefix}self
 ● ${prefix}public
 ● ${prefix}setcmd
 ● ${prefix}listcmd
 ● ${prefix}delcmd
 ● ${prefix}lockcmd
 ● ${prefix}addmsg
 ● ${prefix}listmsg
 ● ${prefix}getmsg
 ● ${prefix}delmsg
 
 *｢  MAIN MENU  ｣*  
 ● ${prefix}ping
 ● ${prefix}owner
 ● ${prefix}donate
 ● ${prefix}menu
 ● ${prefix}delete
 ● ${prefix}chatinfo
 ● ${prefix}quoted
 ● ${prefix}listpc
 ● ${prefix}listgc
 ● ${prefix}listonline
 ● ${prefix}report     
 ● ${prefix}dashboard
 ● ${prefix}rules
  
 *｢ MOVIE MENU ｣*    
 ● ${prefix}drakorongoing
 ● ${prefix}lk21 query
 ● ${prefix}wattpad url_wattpad
 ● ${prefix}wattpadsearch query
 ● ${prefix}cerpen
 ● ${prefix}ceritahoror
 
 *｢ RANDOM TEXT MENU ｣*    
 ● ${prefix}quotes
 ● ${prefix}quotesdiLan
 ● ${prefix}quotesanime
 ● ${prefix}quotesimage
 ● ${prefix}faktaunik
 ● ${prefix}katabijak
 ● ${prefix}pantun
 ● ${prefix}bucin
 ● ${prefix}randomnama
  
 *｢  WIBU MENU  ｣*  
 ● ${prefix}'
 ● ${prefix}manga
 ● ${prefix}anime 
 ● ${prefix}videoanime
 ● ${prefix}husbu
 ● ${prefix}waifu
 ● ${prefix}milf
 ● ${prefix}neko
 ● ${prefix}kanna
 ● ${prefix}sagiri
 ● ${prefix}hentai
 ● ${prefix}cosplay
 ● ${prefix}wallnime
 ● ${prefix}kusonime
 ● ${prefix}megumin
 ● ${prefix}otakudesu
 ● ${prefix}doujindesu
 ● ${prefix}storyanime
 ● ${prefix}nakanomiku
 ● ${prefix}nakanonino
 ● ${prefix}nakanoitsuki
 ● ${prefix}otakuongoing
 ● ${prefix}nhentai *code*
 ● ${prefix}nekopoi *link*
 ● ${prefix}nekopoisearch
 
  *｢  FUN GAME MENU  ｣*  	
 ● ${prefix}piatu
 ● ${prefix}holoh
 ● ${prefix}jadian
 ● ${prefix}jodohku
 ● ${prefix}delttt
 ● ${prefix}tictactoe
 ● ${prefix}family100
 ● ${prefix}tebak [option]
 ● ${prefix}math [mode]
 ● ${prefix}suitpvp [@tag]
 ● ${prefix}casino
 ● ${prefix}delcasino
 ● ${prefix}akinator
 ● ${prefix}cancelakinator
  
 *｢  DOWNLOAD MENU  ｣*
 ● ${prefix}tiktok [url]
 ● ${prefix}tiktokaudio [url]
 ● ${prefix}tiktoknowm [url]     
 ● ${prefix}instagram [url]
 ● ${prefix}twitter [url]
 ● ${prefix}twittermp3 [url]
 ● ${prefix}facebook [url]
 ● ${prefix}pinterestdl [url]
 ● ${prefix}ytmp3 [url]
 ● ${prefix}ytmp4 [url]
 ● ${prefix}getmusic [query]
 ● ${prefix}getvideo [query]
 ● ${prefix}umma [url]
 ● ${prefix}joox [query]
 ● ${prefix}soundcloud [url]
 ● ${prefix}ttnowm [url] 
 ● ${prefix}ttaudio [url]     
                
 *｢  TOOLS MENU  ｣*
 ● ${prefix}toimage
 ● ${prefix}removebg
 ● ${prefix}sticker
 ● ${prefix}emojimix
 ● ${prefix}tovideo
 ● ${prefix}togif
 ● ${prefix}tourl
 ● ${prefix}tovn
 ● ${prefix}tomp3
 ● ${prefix}toaudio
 ● ${prefix}ebinary
 ● ${prefix}dbinary

 *｢  RANDOM MENU  ｣*
 ● ${prefix}coffe
 ● ${prefix}quotesanime
 ● ${prefix}motivasi
 ● ${prefix}dilanquote
 ● ${prefix}bucinquote
 ● ${prefix}katasenja
 ● ${prefix}puisi
 ● ${prefix}ppcp
 ● ${prefix}anime
 ● ${prefix}waifu
 ● ${prefix}husbu
 ● ${prefix}neko
 ● ${prefix}shinobu
 ● ${prefix}megumin
 ● ${prefix}loli

 *｢  SEARCH MENU  ｣*
 ● ${prefix}play [query]
 ● ${prefix}yts [query]
 ● ${prefix}google [query]
 ● ${prefix}gimage [query]
 ● ${prefix}pinterest [query]
 ● ${prefix}wallpaper [query]
 ● ${prefix}wikimedia [query]
 ● ${prefix}ytsearch [query]
 ● ${prefix}ringtone [query]
 ● ${prefix}nickff 
 ● ${prefix}nickml
 ● ${prefix}nickpubg
 ● ${prefix}nickdomino
  
 *｢  VOCAL MENU  ｣*  	
 ● ${prefix}halah
 ● ${prefix}hilih
 ● ${prefix}huluh
 ● ${prefix}heleh
 ● ${prefix}holoh
  
 *｢  AUDIO MENU  ｣*  	
 ● ${prefix}bass
 ● ${prefix}blown
 ● ${prefix}deep
 ● ${prefix}earrape
 ● ${prefix}fast
 ● ${prefix}fat
 ● ${prefix}nightcore
 ● ${prefix}reverse
 ● ${prefix}robot
 ● ${prefix}slow
 ● ${prefix}squirrel

 *｢  ISLAM MENU  ｣*  	
 ● ${prefix}iqra
 ● ${prefix}hadith
 ● ${prefix}alquran
 ● ${prefix}juzamma
 ● ${prefix}tafsirsurah
 
 *｢ CEK MENU ｣*  	
 ● ${prefix}goblokcek 
 ● ${prefix}jelekcek 
 ● ${prefix}rate
 ● ${prefix}haram
 ● ${prefix}gaycek
 ● ${prefix}lesbicek
 ● ${prefix}gantengcek 
 ● ${prefix}cantikcek
 ● ${prefix}begocek 
 ● ${prefix}suhucek
 ● ${prefix}pintercek
 ● ${prefix}jagocek
 ● ${prefix}nolepcek
 ● ${prefix}babicek
 ● ${prefix}bebancek
 ● ${prefix}baikcek
 ● ${prefix}jahatcek
 ● ${prefix}anjingcek
 ● ${prefix}haramcek
 ● ${prefix}pakboycek
 ● ${prefix}pakgirlcek
 ● ${prefix}sangecek 
 ● ${prefix}bapercek
 ● ${prefix}fakboycek
 ● ${prefix}alimcek
 ● ${prefix}suhucek
 ● ${prefix}fakgirlcek
 ● ${prefix}kerencek
 ● ${prefix}wibucek
 ● ${prefix}pasarkascek
 
  *｢  STALKING MENU  ｣*  	
 ● ${prefix}stalkig    _<nama>_
 ● ${prefix}stalkgithub    _<nama>_
 ● ${prefix}stalktwitter    _<nama>_
 ● ${prefix}mlstalk    _<nama>_

 *｢  PRIMBON MENU  ｣*  	
 ● ${prefix}nomorhoki
 ● ${prefix}artimimpi
 ● ${prefix}artinama
 ● ${prefix}ramaljodoh
 ● ${prefix}ramaljodohbali
 ● ${prefix}suamiistri
 ● ${prefix}ramalcinta
 ● ${prefix}cocoknama
 ● ${prefix}pasangan
 ● ${prefix}jadiannikah
 ● ${prefix}sifatusaha
 ● ${prefix}rezeki
 ● ${prefix}pekerjaan
 ● ${prefix}nasib
 ● ${prefix}penyakit
 ● ${prefix}tarot
 ● ${prefix}fengshui
 ● ${prefix}haribaik
 ● ${prefix}harisangar
 ● ${prefix}harisial
 ● ${prefix}nagahari
 ● ${prefix}arahrezeki
 ● ${prefix}peruntungan
 ● ${prefix}weton
 ● ${prefix}karakter
 ● ${prefix}keberuntungan
 ● ${prefix}memancing
 ● ${prefix}masasubur
 ● ${prefix}zodiak
 ● ${prefix}shio

 *｢  BOT MENU  ｣*  	
 ● ${prefix}antilink On/Off
 ● ${prefix}mute On/Off
 ● ${prefix}antiwame On/Off
 ● ${prefix}antiyt On/Off
 ● ${prefix}antitele On/Off
 ● ${prefix}antibitly On/Off
 
  *｢ Text Pro Me ｣*  	
 ● ${prefix}blackpink text
 ● ${prefix}neon text
 ● ${prefix}greenneon text
 ● ${prefix}advanceglow text
 ● ${prefix}futureneon text
 ● ${prefix}sandwriting text
 ● ${prefix}sandsummer text
 ● ${prefix}sandengraved text
 ● ${prefix}metaldark text
 ● ${prefix}neonlight text
 ● ${prefix}holographic text
 ● ${prefix}text1917 text
 ● ${prefix}minion text
 ● ${prefix}deluxesilver text
 ● ${prefix}newyearcard text
 ● ${prefix}bloodfrosted text
 ● ${prefix}halloween text
 ● ${prefix}jokerlogo text
 ● ${prefix}fireworksparkle text
 ● ${prefix}natureleaves text
 ● ${prefix}bokeh text
 ● ${prefix}toxic text
 ● ${prefix}strawberry text
 ● ${prefix}box3d text
 ● ${prefix}roadwarning text
 ● ${prefix}breakwall text
 ● ${prefix}icecold text
 ● ${prefix}luxury text
 ● ${prefix}cloud text
 ● ${prefix}summersand text
 ● ${prefix}horrorblood text
 ● ${prefix}thunder text
 ● ${prefix}pornhub text1 text2
 ● ${prefix}glitch text1 text2
 ● ${prefix}avenger text1 text2
 ● ${prefix}space text1 text2
 ● ${prefix}ninjalogo text1 text2
 ● ${prefix}marvelstudio text1 text2
 ● ${prefix}lionlogo text1 text2
 ● ${prefix}wolflogo text1 text2
 ● ${prefix}steel3d text1 text2
 ● ${prefix}wallgravity text1 text2

  *｢ Nsfw Anime ｣*  	
 ● ${prefix}chiisaihentai
 ● ${prefix}trap
 ● ${prefix}blowjob
 ● ${prefix}yaoi
 ● ${prefix}ecchi
 ● ${prefix}hentai
 ● ${prefix}ahegao
 ● ${prefix}hololewd
 ● ${prefix}sideoppai
 ● ${prefix}animefeets
 ● ${prefix}animebooty
 ● ${prefix}animethighss
 ● ${prefix}hentaiparadise
 ● ${prefix}animearmpits
 ● ${prefix}hentaifemdom
 ● ${prefix}lewdanimegirls
 ● ${prefix}biganimetiddies
 ● ${prefix}animebellybutton
 ● ${prefix}hentai4everyone

  *｢ Random Image ｣*  	
 ● ${prefix}bj
 ● ${prefix}ero
 ● ${prefix}ppcp
 ● ${prefix}cum
 ● ${prefix}feet
 ● ${prefix}yuri
 ● ${prefix}trap
 ● ${prefix}lewd
 ● ${prefix}feed
 ● ${prefix}eron
 ● ${prefix}solo
 ● ${prefix}gasm
 ● ${prefix}poke
 ● ${prefix}anal
 ● ${prefix}holo
 ● ${prefix}tits
 ● ${prefix}kuni
 ● ${prefix}kiss
 ● ${prefix}erok
 ● ${prefix}smug
 ● ${prefix}baka
 ● ${prefix}solog
 ● ${prefix}feetg
 ● ${prefix}lewdk
 ● ${prefix}waifu
 ● ${prefix}pussy
 ● ${prefix}femdom
 ● ${prefix}cuddle
 ● ${prefix}hentai
 ● ${prefix}eroyuri
 ● ${prefix}cum_jpg
 ● ${prefix}blowjob
 ● ${prefix}erofeet
 ● ${prefix}holoero
 ● ${prefix}classic
 ● ${prefix}erokemo
 ● ${prefix}fox_girl
 ● ${prefix}futanari
 ● ${prefix}lewdkemo
 ● ${prefix}wallpaper
 ● ${prefix}pussy_jpg
 ● ${prefix}kemonomimi
 ● ${prefix}nsfw_avatar
 ● ${prefix}ngif
 ● ${prefix}nsfw_neko_gif
 ● ${prefix}random_hentai_gif
  
  *｢ Photo Oxy ｣*  	
 ● ${prefix}shadow text
 ● ${prefix}cup text
 ● ${prefix}cup1 text
 ● ${prefix}romance text
 ● ${prefix}smoke text
 ● ${prefix}burnpaper text
 ● ${prefix}lovemessage text
 ● ${prefix}undergrass text
 ● ${prefix}love text
 ● ${prefix}coffe text
 ● ${prefix}woodheart text
 ● ${prefix}woodenboard text
 ● ${prefix}summer3d text
 ● ${prefix}wolfmetal text
 ● ${prefix}nature3d text
 ● ${prefix}underwater text
 ● ${prefix}goldenrose text
 ● ${prefix}summernature text
 ● ${prefix}letterleaves text
 ● ${prefix}glowingneon text
 ● ${prefix}fallleaves text
 ● ${prefix}flamming text
 ● ${prefix}harrypotter text
 ● ${prefix}carvedwood text
 ● ${prefix}tiktok text1 text2
 ● ${prefix}arcade8bit text1 text2
 ● ${prefix}battlefield4 text1 text2
 ● ${prefix}pubg text1 text2

  *｢ Ephoto 360 ｣*  	
 ● ${prefix}wetglass text
 ● ${prefix}multicolor3d text
 ● ${prefix}watercolor text
 ● ${prefix}luxurygold text
 ● ${prefix}galaxywallpaper text
 ● ${prefix}lighttext text
 ● ${prefix}beautifulflower text
 ● ${prefix}puppycute text
 ● ${prefix}royaltext text
 ● ${prefix}heartshaped text
 ● ${prefix}birthdaycake text
 ● ${prefix}galaxystyle text
 ● ${prefix}hologram3d text
 ● ${prefix}greenneon text
 ● ${prefix}glossychrome text
 ● ${prefix}greenbush text
 ● ${prefix}metallogo text
 ● ${prefix}noeltext text
 ● ${prefix}glittergold text
 ● ${prefix}textcake text
 ● ${prefix}starsnight text
 ● ${prefix}wooden3d text
 ● ${prefix}textbyname text
 ● ${prefix}writegalacy text
 ● ${prefix}galaxybat text
 ● ${prefix}snow3d text
 ● ${prefix}birthdayday text
 ● ${prefix}goldplaybutton text
 ● ${prefix}silverplaybutton text
 ● ${prefix}freefire text`
 wann.sendMessage(m.chat, { caption: anu, image: { url: "./media/menu.jpg" }, templateButtons: buttonsDefault, footer: 'FSS BOT By Febrian', mentions: [m.sender] })
break 
}

//FITUR WITH TRENDTODAY BY MANIK DENGAN DISTRIBUTOR RAFLI RUSDIANA
		case prefix+'casino':
                 if (!isGroup)return reply(mess.OnlyGrup)
                 if (isGame(sender, isWann, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal`)
                 if (mentionUser.length == 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
                 if (mentionUser.length > 2) return reply('Hanya bisa dengan 1 orang')
                 if (mentionUser[0] === sender) return reply(`Sad amat main sama diri sendiri`)
				 if (mentionUser[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                 if (fs.existsSync(`./database/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
                 if (args.length == 2) return reply('Masukan Nominal Nya')
                 if (args[2].includes('-')) return reply(`Jangan menggunakan -`)
                 if (isNaN(parseInt(args[2]))) return reply('Nominal Harus Berupa Angka!')
                 var anu = getBalance(sender, balance)
                 var ani = getBalance(mentionUser[0], balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 if (ani < args[2] || ani == 'undefined') return reply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
                 var casinoo = setCasino(`${from}`)
                 casinoo.Z = sender.replace("@s.whatsapp.net", "")
                 casinoo.Y = mentionUser[0].split("@")[0]
                 casinoo.nominal = parseInt(args[2])
                 addCountCmd('#casino', sender, _cmd)
                 fs.writeFileSync(`./database/${from}.json`, JSON.stringify(casinoo, null, 2))
                 gameAdd(sender, glimit)
                 var starGame = `🎰 Memulai Game Casino 💰\n\n• @${sender.replace("@s.whatsapp.net", "")} Menantang ${args[1]}, dengan Nominal: *$ ${parseInt(args[2])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!`
                 wann.sendMessage(from, { text: starGame, mentions: [sender, args[1].replace("@", "") + "@s.whatsapp.net"] }, { quoted: m })
                 break
            case prefix+'delcasino':
                 if (fs.existsSync('./database/'+from+'.json')) {
                 var csn = JSON.parse(fs.readFileSync('./database/'+from+'.json'))
		 if (csn.Z.includes(sender)) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
                   reply('Berhasil Menghapus Sesi Casino')
		 } else if (csn.Y.includes(sender)) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapus Sesi Casino')
		 } else if (isAdmins) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapus Sesi Casino')
		 } else if (isWann) {
		   addCountCmd('#delcasino', sender, _cmd)
		   deleteCasino(from)
		   reply('Berhasil Menghapu Sesi Casino')
		 } else {
	           reply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
		 }
                 } else {
                  reply('Tidak ada sesi yang berlangsung')
                 }
                 break
//------------------< Premium >-------------------
       case prefix+'premium': 
       addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
              if (!isWann || m.key.fromMe) return reply(mess.only.owner)
              if (args[1] === 'add') {
              if (m.message.extendedTextMessage != undefined) {
              mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
              premium.addPremiumUser(mentioned[0], args[3], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[3])).days} day(s) ${ms(toMs(args[3])).hours} hour(s) ${ms(toMs(args[3])).minutes} minute(s)`)
        
              } else {
            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[3], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[3])).days} day(s) ${ms(toMs(args[3])).hours} hour(s) ${ms(toMs(args[3])).minutes} minute(s)`)
}
              } else if (args[1] === 'del') {
              if (m.message.extendedTextMessage != undefined) {
              mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply('Sukses')
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply('Sukses')
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case prefix+'premiumcheck':
       case prefix+'cekpremium': 
       addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
              if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case prefix+'listprem':
       case prefix+'listpremium':          
       addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
                case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
                    var limitPrib = global.db.users[m.sender].limit
                    reply(`Name: ${pushname}\nLimit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(m.sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
				break
	    case prefix+'family100':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
	if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
                if ('family100'+m.chat in _family100) {
                    reply('There are still unfinished sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await wann.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            //Bank & Payment Menu
			case prefix+'topbalance':{
			    addCountCmd('#topbalance', sender, _cmd)
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getMoney(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                addCountCmd('#buylimit', sender, _cmd)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 2000`)
                 if (mentionUser.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 addCountCmd('#transfer', sender, _cmd)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentionUser[0], parseInt(args[2]), balance)
                 mentions(`Sukses transfer balance sebesar $${args[2]} kepada @${mentionUser[0].split("@")[0]}`, [mentionUser[0]], true)
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                addCountCmd('#buygamelimit', sender, _cmd)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, listml)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
                case prefix+'akinator':
                if (isGroup) return reply(mess.OnlyPM)
                if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesain yg sebelumnya dulu atuh")
                var get_result = await akiStart()
                if (get_result.status == 200) {
                  var { server, frontaddr, session, signature, question, step } = get_result.result
                  const data = {}
                  data["server"] = server
                  data["frontaddr"] = frontaddr
                  data["session"] = session
                  data["signature"] = signature
                  data["question"] = question
                  data["step"] = step
                  var ini_txt = `${question}\n\n`
                  ini_txt += "0 - Ya\n"
                  ini_txt += "1 - Tidak\n"
                  ini_txt += "2 - Saya Tidak Tau\n"
                  ini_txt += "3 - Mungkin\n"
                  ini_txt += "4 - Mungkin Tidak"
                  wann.sendMessage(from, { text: ini_txt }, { quoted: m }).then(() => {
                     akinator[sender.split('@')[0]] = data
                  })
                } else {
                  reply(mess.error.api)
                }
                break
            case prefix+'cancelakinator':
                if (isGroup) return reply(mess.OnlyPM)
                if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
                delete akinator[sender.split("@")[0]]
                reply(`Sukses`)
                break
            case prefix+'tebak':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd) 
            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
                if (!text) reply(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`)
                if (args[1] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await wann.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    wann.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, wann.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wann.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, wann.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wann.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, wann.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wann.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wann.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wann.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wann.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[1] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    wann.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    wann.sendButtonText(m.chat, [{ buttonId: prefix+'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, wann.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
            case prefix+'afk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
            }
            break	
        case prefix+'ttc': case prefix+'ttt': case prefix+'tictactoe':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
            let TicTacToe = require("./FuncBot/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
            if (room.x !== room.o) await wann.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await wann.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command.slice(1)} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case prefix+'delttc': case prefix+'delttt':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            wann.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
            } else if (!this.game) {
            reply(`TicTacToe Session🎮 there is not any`)
            } else throw '?'
            } catch (e) {
            reply('error')
            }
            }
            break
            case prefix+'suitpvp': case prefix+'suit':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await wann.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) wann.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case prefix+'donasi': case prefix+'donate': case prefix+'sewabot': case prefix+'sewa': case prefix+'buypremium': case prefix+'donate':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                reply(` MENU DONATE \n\nHi ${pushname} \n\`\`\`Dana : 0853 6141 1440\`\`\`\n\`\`\`PULSA : 0812 6090 0707 (Telkomsel)\`\`\`\nTerimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini _^\n THX FOR YOU ! `)
            }
            break
            case prefix+'sc': case prefix+'script':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                reply('*Minta Ke Owner Aja Klo Dikasi Kau Beruntung*')
            }
            break
            case prefix+'chat':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            
                if (!isWann) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[1] === 'mute') {
                    wann.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unmute') {
                    wann.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'archive') {
                    wann.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unarchive') {
                    wann.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'read') {
                    wann.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'unread') {
                    wann.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'delete') {
                    wann.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break 
            case prefix+'mathquiz': case prefix+'math':{
            if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                wann.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case prefix+'mysoulmate':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: prefix+'❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, jawab, wann.user.name, m, {mentions: ments})
            }
            break
            case prefix+'couple':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: prefix+'❤️congrats', buttonText: { displayText: '❤️congrats' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, jawab, wann.user.name, m, {mentions: menst})
            }
            break
            case prefix+'join':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[1]) && !args[1].includes('whatsapp.com')) throw 'Link Invalid!'
                reply('Segera Tuan')
                let result = args[1].split('https://chat.whatsapp.com/')[1]
                await wann.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case prefix+'leave':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                await wann.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
	case prefix+'kick':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case prefix+'add':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case prefix+'promote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case prefix+'demote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case prefix+'block':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isWann) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case prefix+'unblock':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isWann) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await wann.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case prefix+'setname': case prefix+'setsubject':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await wann.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case prefix+'setdesc': case prefix+'setdesk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await wann.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case prefix+'setppbot': case prefix+'setbotpp':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                await wann.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case prefix+'setppgroup': case prefix+'setgrouppp': case prefix+'setgcpp': case prefix+'setppgrup': case prefix+'setppgc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                await wann.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
case prefix+'grupinfo': case prefix+'groupinfo':
try{
 var pic = await wann.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
wann.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
            case prefix+'tagall': case prefix+'tag':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `≻ @${mem.id.split('@')[0]}\n`
                }
                wann.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case prefix+'hidetag':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            wann.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case prefix+'style': case prefix+'styletext':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		            db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./FuncBot/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Entered Text:  ${text}\n\n`
                for (let i of anu) {
                    teks += `≻ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case prefix+'vote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
               if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
            reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
• Total: ${vote[m.chat][1].length}

 [ DEVOTE ]
• Total: ${vote[m.chat][2].length}

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: wann.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            wann.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case prefix+'upvote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
               if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes`
            let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: wann.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            wann.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case prefix+'devote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You Have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes`
            let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: wann.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            wann.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case prefix+'cekvote':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}

*${prefix}hapusvote* - to delete votes
`
wann.sendTextWithMentions(m.chat, teks_vote, m)
break
		case prefix+'deletevote': case prefix+'delvote': case prefix+'hapusvote':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
               case prefix+'group': case prefix+'grup':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[1] === 'close'){
                    await wann.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'open'){
                    await wann.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: prefix+'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: prefix+'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `Group Mode`, wann.user.name, m)

             }
            }
            break
            case prefix+'editinfo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[1] === 'open'){
                await wann.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[1] === 'close'){
                await wann.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: prefix+'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: prefix+'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `Mode Edit Info`, wann.user.name, m)

            }
            }
            break
                        case prefix+'antiyt':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiYt) return reply(`Udah aktif`)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            antiyt.push(from)
            fs.writeFileSync('./database/antiyt.json', JSON.stringify(antiyt, null, 3))
            reply('Anti link youtube aktif')
        } else if (args[1] === 'off') {
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            let anu = antiyt.indexOf(from)
            antiyt.splice(anu, 1)
            fs.writeFileSync('./database/antiyt.json', JSON.stringify(antiyt, null, 3))
            reply('Anti link youtube nonaktif')
            }
            break
        case prefix+'antitele':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiTele) return reply(`Udah aktif`)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            antitele.push(from)
            fs.writeFileSync('./database/antitele.json', JSON.stringify(antitele, null, 3))
            reply('Antilink Telegram aktif')
        } else if (args[1] === 'off') {
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            let anu = antitele.indexOf(from)
            antitele.splice(anu, 1)
            fs.writeFileSync('./database/antitele.json', JSON.stringify(antitele, null, 3))
            reply('Antilink Telegram nonaktif')
            }
            break
            case prefix+'antibitly':
        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
            if (isAntiBitly) return reply(`Udah aktif`)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            antibitly.push(from)
            fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly, null, 3))
            reply('Antilink Bitly aktif')
        } else if (args[1] === 'off') {
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            let anu = antibitly.indexOf(from)
            antibitly.splice(anu, 1)
            fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly, null, 3))
            reply('Antilink Bitly nonaktif')
        }
        break
case prefix+'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[1] === 'on') {
						if (isAntiLink) return reply('Already Activated')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('```ANTILINK ACTIIVED IN GROUP```')
						wann.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[1] === 'off') {
						if (!isAntiLink) return reply('already deactivated')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('```ANTILINK NOT ACTIVE IN GROUP```')
					} else if (!q){
 reply(`Pilih Antilink On / Off `)
					}
					break 
					case prefix+'antiwame':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[1] === "on") {
                if (db.chats[m.chat].wame) return reply(`Already Activated`)
                db.chats[m.chat].wame = true
                reply(`Anti Wa.me Activated!`)
                } else if (args[1] === "off") {
                if (!db.chats[m.chat].wame) return reply(`Already deactivated`)
                db.chats[m.chat].wame = false
                reply(`Anti Wa.me is not activated!`)
                } else {
                 let buttons = [
                        { buttonId: prefix+'antiwame on', buttonText: { displayText: 'ENABLE' }, type: 1 },
                        { buttonId: prefix+'antiwame off', buttonText: { displayText: 'DISABLE' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, wann.user.name, m)
                }
             }
             break
             // Menu Search
        case prefix+'nickff':{
        const axios = require('axios')
if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 646675175`)
            axios.get(`https://api.lolhuman.xyz/api/freefire/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let epep = `*🔎 CHECK NICK FREE FIRE 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(epep)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickml':{
        const axios = require('axios')
 var args1 = q.split("/")[0]
            var args2 = q.split("/")[1]                
            if (!q.includes("/")) return reply(`Gunakan dengan cara ${command} *id/server*\n\n_Contoh_\n\n${command} 617243212/8460`)
            axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args1}/${args2}?apikey=${lolkey}`)
            .then(({data}) => {
            let emel = `*🔎 CHECK NICK MOBILE LEGENDS 🔍*

ID : ${args[1]}
Nick : ${data.result}`
reply(emel)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickpubg':{
        const axios = require('axios')
            if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 5217933016`)
            axios.get(`https://api.lolhuman.xyz/api/pubg/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let pubg = `*🔎 CHECK NICK PUBG 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(pubg)
            
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
        case prefix+'nickdomino':{
        const axios = require('axios')
               if (!q) return reply(`Gunakan dengan cara ${command} *id*\n\n_Contoh_\n\n${command} 291756557`)
            axios.get(`https://api.lolhuman.xyz/api/higghdomino/${args[1]}?apikey=${lolkey}`)
            .then(({data}) => {
            let domino = `*🔎 CHECK NICK HIGGS DOMINO 🔍*

ID : ${args[1]}
Nick : ${data.result}`
            reply(domino)
            limitAdd(sender, limit)
            })
            .catch((err) => {
                reply('Error')
            })
            break
            }
					   case prefix+'mute':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (args[1] === "on") {
                if (db.chath[m.chat].mute) return reply(`Already activated`)
                db.chats[m.chat].mute = true
                reply(`${wann.user.name} has been muted in this group !`)
                } else if (args[1] === "off") {
                if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                db.chats[m.chat].mute = false
                reply(`${wann.user.name} has been unmuted in this group!`)
                } else {
                 let buttons = [
                        { buttonId: prefix+'mute on', buttonText: { displayText: 'MUTE' }, type: 1 },
                        { buttonId: prefix+'mute off', buttonText: { displayText: 'UNMUTE' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `Mute Bot`, wann.user.name, m)
                }
             }
             break
             case prefix+'rules':
             rulesBot = `

 # RULES BOT

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

4. Gpp sc gw jelek yg penting 
Bot gw jalan awokawoak
Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

Owner  BOTZ:
wa.me/6285870824804
`
             reply(rulesBot)
             break
            case prefix+'linkgroup': case prefix+'grouplink': case prefix+'gclink': case prefix+'linkgc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                let response = await wann.groupInviteCode(m.chat)
                wann.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
            }
            break
            case prefix+'ephemeral':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                if (args[1] === 'enable') {
                    await wann.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[1] === 'disable') {
                    await wann.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case prefix+'delete': case prefix+'del':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                wann.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case prefix+'bcgc': case prefix+'bcgroup':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
                let getGroups = await wann.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/Wann.jpg')
                      let txt = `「 BROADCAST BOT 」\n\n${text}`
                      wann.send5ButImg(i, txt, wann.user.name, fatihgans, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case prefix+'bc': case prefix+'broadcast': case prefix+'bcall':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                if (!text) throw `Where is the text?\n\nExample : ${prefix + command} halo`
                let anu = await stire.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nIn ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/E14rIyYMuovIfkskhi5QN9'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/Wann.jpg')
                      let txt = `「 BROADCAST BOT 」\n\n${text}`
                      wann.send5ButImg(yoi, txt, `${global.pengguna}`, fatihgans, btn)
		}
		reply('Broadcast Success')
            }
            break
            case prefix+'chatinfo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) reply('Reply to mesaage')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `≻ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━≻ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ≻ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
                }
                wann.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case prefix+'q': case prefix+'quoted':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await wann.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case prefix+'listpc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                 let anu = await stire.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `❏ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = stire.messages[i].array[0].pushName
                     teks += `≻ *Name :* ${nama}\n≻ *User :* @${i.split('@')[0]}\n≻ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 wann.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case prefix+'listgc':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                 let anu = await stire.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `❏ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await wann.groupMetadata(i)
                     teks += `≻ *Name :* ${metadata.subject}\n≻ *Owner :* @${metadata.owner.split('@')[0]}\n≻ *ID :* ${metadata.id}\n≻ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n≻ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 wann.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case prefix+'listonline': case prefix+'onlinelist': case prefix+'liston':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                    let id = args && /\d+\-\d+@g.us/.test(args[1]) ? args[1] : m.chat
                    let online = [...Object.keys(stire.presences[id]), botNumber]
                    wann.sendText(m.chat, 'Online List:\n\n' + online.map(v => '≻ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case prefix+'sticker': case prefix+'s': case prefix+'stickergif': case prefix+'sgif':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await wann.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await wann.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case prefix+'ebinary':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./FuncBot/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case prefix+'dbinary':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./FuncBot/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case prefix+'emojimix':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
	        if (!text) throw `Example : ${prefix + command} ðŸ˜…+ðŸ¤”`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await wann.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case prefix+'toimage': case prefix+'toimg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    wann.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case prefix+'tomp4': case prefix+'tovideo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${command}*`
		let { webp2mp4File } = require('./FuncBot/uploader')
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await wann.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case prefix+'toaud': case prefix+'toaudio':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            let media = await quoted.download()
            let { toAudio } = require('./FuncBot/converter')
            let audio = await toAudio(media, 'mp4')
            wann.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case prefix+'tomp3':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            let media = await quoted.download()
            let { toAudio } = require('./FuncBot/converter')
            let audio = await toAudio(media, 'mp4')
            wann.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${wann.user.name}.mp3`}, { quoted : m })
            }
            break
            case prefix+'tovn': case prefix+'toptt':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            let media = await quoted.download()
            let { toPTT } = require('./FuncBot/converter')
            let audio = await toPTT(media, 'mp4')
            wann.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case prefix+'togif':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
		let { webp2mp4File } = require('./FuncBot/uploader')
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await wann.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case prefix+'tourl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./FuncBot/uploader')
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case prefix+'imagenobg': case prefix+'removebg': case prefix+'remove-bg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await wann.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    wann.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case prefix+'yts': case prefix+'ytsearch':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `≻ No : ${no++}\n≻ Type : ${i.type}\n≻ Video ID : ${i.videoId}\n≻ Title : ${i.title}\n≻ Views : ${i.views}\n≻ Duration : ${i.timestamp}\n≻ Upload At : ${i.ago}\n≻ Author : ${i.author.name}\n≻ Url : ${i.url}\n\n─────────────────\n\n`
                }
                wann.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case prefix+'google':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `≻ *Title* : ${g.title}\n`
                teks += `≻ *Description* : ${g.snippet}\n`
                teks += `≻ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case prefix+'gimage': case prefix+'googleimage':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
        if (!text) throw `Example : ${prefix + command} ml nana`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: wann.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case prefix+'play': case prefix+'ytplay':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} bts boy with luv`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
≻ Title : ${anu.title}
≻ Ext : Search
≻ ID : ${anu.videoId}
≻ Duration : ${anu.timestamp}
≻ Viewers : ${anu.views}
≻ Uploaded : ${anu.ago}
≻ Author : ${anu.author.name}
≻ Channel : ${anu.author.url}
≻ Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   wann.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Playing To ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Video Source',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵Audio🎵',
                                    id: `.ytmp3 ${anu.url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥VIdeo🎥',
                                    id: `.ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  wann.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case prefix+'ytmp3': case prefix+'ytaudio':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                let { yta } = require('./FuncBot/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`
                let quality = args[2] ? args[2] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                wann.sendImage(m.chat, media.thumb, `≻ Title : ${media.title}\n≻ File Size : ${media.filesizeF}\n≻ Url : ${isUrl(text)}\n≻ Ext : MP3\n≻ Resolution : ${args[2] || '320kbps'}`, m)
                wann.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case prefix+'ytmp4': case prefix+'ytvideo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                let { ytv } = require('./FuncBot/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[2] ? args[2] : '360p'
                let media = await ytv(args[1], quality)
                if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
                wann.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `≻ Title : ${media.title}\n≻ File Size : ${media.filesizeF}\n≻ Url : ${isUrl(text)}\n≻ Ext : MP3\n≻ Resololution : ${args[2] || '360p'}` }, { quoted: m })
            }
            break
	    case prefix+'getmusic':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./FuncBot/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[2] ? args[2] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return reply('File Melebihi Batas'+util.format(media))
                wann.sendImage(m.chat, thumbnail, `âž£ Title : ${title}\nâž£ File Size : ${media[0].formattedSize}\nâž£ Url : ${url}\nâž£ Ext : MP3\nâž£ Resolusi : ${args[2] || '128kbps'}`, m)
                wann.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case prefix+'getvideo':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./FuncBot/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[2] ? args[2] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return reply('File Melebihi Batas'+util.format(media))
                wann.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `âž£ Title : ${title}\nâž£ File Size : ${media[0].formattedSize}\nâž£ Url : ${url}\nâž£ Ext : MP4\nâž£ Resolusi : ${args[2] || '360p'}` }, { quoted: m })
            }
            break
            case prefix+'pinterest':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { pinterest } = require('./FuncBot/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                wann.sendMessage(m.chat, { image: { url: result }, caption: 'âž£ Media Url : '+result }, { quoted: m })
            }
            break
case prefix+'waifu':{
const axios = require('axios')
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
reply('Loading...')
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
sendFile(m.chat, data.url, 'Ni Cewe 2D Lu')
})
break
}
case prefix+'cry':case prefix+'kill':case prefix+'hug':case prefix+'pat':case prefix+'lick':case prefix+'kiss':case prefix+'bite':case prefix+'yeet':case prefix+'neko':case prefix+'bully':case prefix+'bonk':case prefix+'wink':case prefix+'poke':case prefix+'nom':case prefix+'slap':case prefix+'waifu':case prefix+'smile':case prefix+'wave':case prefix+'awoo':case prefix+'blush':case prefix+'smug':case prefix+'glomp':case prefix+'happy':case prefix+'dance':case prefix+'cringe':case prefix+'cuddle':case prefix+'highfive':case prefix+'shinobu':case prefix+'megumin':case prefix+'handhold':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
reply('Loading...')
const axios = require('axios')
axios.get(`https://api.waifu.pics/sfw/${command.slice(1)}`)
.then(({data}) => {
sendFile(from, data.url, mess.done)
})
}
break			
	    case prefix+'couple': case prefix+'ppcp':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	    if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                wann.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                wann.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case prefix+'coffee': case prefix+'kopi':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕Random Coffee☕`,
                    footer: wann.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wallpaper':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./FuncBot/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `≻ Title : ${result.title}\n≻ Category : ${result.type}\n≻ Detail : ${result.source}\n≻ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: wann.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wikimedia':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./FuncBot/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `≻ Title : ${result.title}\n≻ Source : ${result.source}\n≻ Media Url : ${result.image}`,
                    footer: wann.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case prefix+'mode': case prefix+'set':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
        const buttons = [
{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF'}, type: 1},
{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC'}, type: 1}
]

const buttonMessage = {
text: "Pilih Salah Satu",
footerText: 'Hello Owner',
buttons: buttons,
headerType: 1
}
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break            
            case prefix+'yatim':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
 if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let oi = m.sender
            let ytm = member[Math.floor(Math.random() * member.length)]
            let mty = `Cieee Yatim Baru

 @${ytm.split('@')[0]}`
            let ments = [oi, ytm]
            let buttons = [
                        { buttonId: prefix+'yatim', buttonText: { displayText: 'Yatim' }, type: 1 }
                    ]
                     wann.sendButtonText(m.chat, buttons, mty, wann.user.name, m, {mentions: ments})
}
break
case prefix+'piatu':
case prefix+'piyatu':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
 if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let bh = m.sender
            let bra = member[Math.floor(Math.random() * member.length)]
            let bruh = `Cieee Piatu Baru

 @${bra.split('@')[0]}`
            let ments = [bh, bra]
            let buttons = [
                        { buttonId: prefix+'piatu', buttonText: { displayText: 'Piatu' }, type: 1 }
                    ]
                     wann.sendButtonText(m.chat, buttons, bruh, wann.user.name, m, {mentions: ments})
}
break
            case prefix+'quotesanime': case prefix+'quoteanime':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
		let { quotesAnime } = require('./FuncBot/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                wann.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
                // Ephoto 360 //
                case prefix+'wetglass':case prefix+'multicolor3d':case prefix+'watercolor':case prefix+'luxurygold':case prefix+'galaxywallpaper':case prefix+'lighttext':case prefix+'beautifulflower':case prefix+'puppycute':case prefix+'royaltext':case prefix+'heartshaped':case prefix+'birthdaycake':case prefix+'galaxystyle':case prefix+'hologram3d':case prefix+'greenneon':case prefix+'glossychrome':case prefix+'greenbush':case prefix+'metallogo':case prefix+'noeltext':case prefix+'glittergold':case prefix+'textcake':case prefix+'starsnight':case prefix+'wooden3d':case prefix+'textbyname':case prefix+'writegalacy':case prefix+'galaxybat':case prefix+'snow3d':case prefix+'birthdayday':case prefix+'goldplaybutton':case prefix+'silverplaybutton':case prefix+'freefire':{
 if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
                               if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'ttlogo':case prefix+'arcade8bit':case prefix+'battlefield4':case prefix+'pubg':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy2/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            // Photo Oxy //
            case prefix+'shadow':case prefix+'cup':case prefix+'cup1':case prefix+'romance':case prefix+'smoke':case prefix+'burnpaper':case prefix+'lovemessage':case prefix+'undergrass':case prefix+'love':case prefix+'coffe':case prefix+'woodheart':case prefix+'woodenboard':case prefix+'summer3d':case prefix+'wolfmetal':case prefix+'nature3d':case prefix+'underwater':case prefix+'goldenrose':case prefix+'summernature':case prefix+'letterleaves':case prefix+'glowingneon':case prefix+'fallleaves':case prefix+'flamming':case prefix+'harrypotter':case prefix+'carvedwood':{
            if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'pornhub':case prefix+'glitch':case prefix+'avenger':case prefix+'space':case prefix+'ninjalogo':case prefix+'marvelstudio':case prefix+'lionlogo':case prefix+'wolflogo':case prefix+'steel3d':case prefix+'wallgravity':{
            if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'jodohku':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: prefix+'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, jawab, wann.user.name, m, {mentions: ments})
            }
            break
            case prefix+'jadian':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian 💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: prefix+'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, jawab, wann.user.name, m, {mentions: menst})
            }
            break
                // Textprome //
                case prefix+'blackpink':case prefix+'neon':case prefix+'greenneon':case prefix+'advanceglow':case prefix+'futureneon':case prefix+'sandwriting':case prefix+'sandsummer':case prefix+'sandengraved':case prefix+'metaldark':case prefix+'neonlight':case prefix+'holographic':case prefix+'text1917':case prefix+'minion':case prefix+'deluxesilver':case prefix+'newyearcard':case prefix+'bloodfrosted':case prefix+'halloween':case prefix+'jokerlogo':case prefix+'fireworksparkle':case prefix+'natureleaves':case prefix+'bokeh':case prefix+'toxic':case prefix+'strawberry':case prefix+'box3d':case prefix+'roadwarning':case prefix+'breakwall':case prefix+'icecold':case prefix+'luxury':case prefix+'cloud':case prefix+'summersand':case prefix+'horrorblood':case prefix+'thunder':{
                if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command.slice(1)}?apikey=${lolkey}&text=${text}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'bj':case prefix+'ero':case prefix+'cum':case prefix+'feet':case prefix+'yuri':case prefix+'trap':case prefix+'lewd':case prefix+'feed':case prefix+'eron':case prefix+'solo':case prefix+'gasm':case prefix+'poke':case prefix+'anal':case prefix+'holo':case prefix+'tits':case prefix+'kuni':case prefix+'kiss':case prefix+'erok':case prefix+'smug':case prefix+'baka':case prefix+'solog':case prefix+'feetg':case prefix+'lewdk':case prefix+'waifu':case prefix+'pussy':case prefix+'femdom':case prefix+'cuddle':case prefix+'hentai':case prefix+'eroyuri':case prefix+'cum_jpg':case prefix+'blowjob':case prefix+'erofeet':case prefix+'holoero':case prefix+'classic':case prefix+'erokemo':case prefix+'fox_girl':case prefix+'futanari':case prefix+'lewdkemo':case prefix+'wallpaper':case prefix+'pussy_jpg':case prefix+'kemonomimi':case prefix+'nsfw_avatar':{
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random2/${command.slice(1)}?apikey=${lolkey}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
            case prefix+'chiisaihentai':case prefix+'trap':case prefix+'blowjob':case prefix+'yaoi':case prefix+'ecchi':case prefix+'ahegao':case prefix+'hololewd':case prefix+'sideoppai':case prefix+'animefeets':case prefix+'animebooty':case prefix+'animethighss':case prefix+'hentaiparadise':case prefix+'animearmpits':case prefix+'hentaifemdom':case prefix+'lewdanimegirls':case prefix+'biganimetiddies':case prefix+'animebellybutton':case prefix+'hentai4everyone':{
            if (!text) throw 'No Query Text'
                reply(mess.wait)
                wann.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command.slice(1)}?apikey=${lolkey}`}, caption: `Nih Dah Jadi ${command.slice(1)}📸` }, { quoted: m })
            }
            break
	    case prefix+'nomerhoki': case prefix+'nomorhoki':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Nomor HP :* ${anu.message.nomer_hp}\n≻ *Angka Shuzi :* ${anu.message.angka_shuzi}\n≻ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n≻ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case prefix+'artimimpi': case prefix+'tafsirmimpi':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Mimpi :* ${anu.message.mimpi}\n≻ *Arti :* ${anu.message.arti}\n≻ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case prefix+'ramalanjodoh': case prefix+'ramaljodoh':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} Febrian, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Nama Anda :* ${anu.message.nama_anda.nama}\n≻ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n≻ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalanjodohbali': case prefix+'ramaljodohbali':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} Febrian, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Nama Anda :* ${anu.message.nama_anda.nama}\n≻ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n≻ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'suamiistri':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} Febrian, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Nama Suami :* ${anu.message.suami.nama}\n≻ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n≻ *Nama Istri :* ${anu.message.istri.nama}\n≻ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalancinta': case prefix+'ramalcinta':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} Febrian, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Nama Anda :* ${anu.message.nama_anda.nama}\n≻ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n≻ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n≻ *Sisi Positif :* ${anu.message.sisi_positif}\n≻ *Sisi Negatif :* ${anu.message.sisi_negatif}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'artinama':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} Febrian`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Arti :* ${anu.message.arti}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'kecocokannama': case prefix+'cocoknama':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} Febrian, 28, 10, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Life Path :* ${anu.message.life_path}\n≻ *Destiny :* ${anu.message.destiny}\n≻ *Destiny Desire :* ${anu.message.destiny_desire}\n≻ *Personality :* ${anu.message.personality}\n≻ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case prefix+'kecocokanpasangan': case prefix+'cocokpasangan': case prefix+'pasangan':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} Febrian|Dini`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendImage(m.chat,  anu.message.gambar, `≻ *Nama Anda :* ${anu.message.nama_anda}\n≻ *Nama Pasangan :* ${anu.message.nama_pasangan}\n≻ *Sisi Positif :* ${anu.message.sisi_positif}\n≻ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case prefix+'jadianpernikahan': case prefix+'jadiannikah':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Tanggal Pernikahan :* ${anu.message.tanggal}\n≻ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case prefix+'sifatusaha':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Lahir :* ${anu.message.hari_lahir}\n≻ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case prefix+'rejeki': case prefix+'rezeki':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Lahir :* ${anu.message.hari_lahir}\n≻ *Rezeki :* ${anu.message.rejeki}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'pekerjaan': case prefix+'kerja':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Lahir :* ${anu.message.hari_lahir}\n≻ *Pekerjaan :* ${anu.message.pekerjaan}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalannasib': case prefix+'ramalnasib': case prefix+'nasib':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Analisa :* ${anu.message.analisa}\n≻ *Angka Akar :* ${anu.message.angka_akar}\n≻ *Sifat :* ${anu.message.sifat}\n≻ *Elemen :* ${anu.message.elemen}\n≻ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case prefix+'potensipenyakit': case prefix+'penyakit':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Analisa :* ${anu.message.analisa}\n≻ *Sektor :* ${anu.message.sektor}\n≻ *Elemen :* ${anu.message.elemen}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'artitarot': case prefix+'tarot':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendImage(m.chat, anu.message.image, `≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Simbol Tarot :* ${anu.message.simbol_tarot}\n≻ *Arti :* ${anu.message.arti}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'fengshui':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} Febrian, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tahun_lahir}\n≻ *Gender :* ${anu.message.jenis_kelamin}\n≻ *Angka Kua :* ${anu.message.angka_kua}\n≻ *Kelompok :* ${anu.message.kelompok}\n≻ *Karakter :* ${anu.message.karakter}\n≻ *Sektor Baik :* ${anu.message.sektor_baik}\n≻ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case prefix+'haribaik':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Kala Tinantang :* ${anu.message.kala_tinantang}\n≻ *Info :* ${anu.message.info}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'harisangar': case prefix+'taliwangke':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}\n≻ *Info :* ${anu.message.info}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'harinaas': case prefix+'harisial':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Hari Lahir :* ${anu.message.hari_lahir}\n≻ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n≻ *Hari Naas :* ${anu.message.hari_naas}\n≻ *Info :* ${anu.message.catatan}\n≻ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case prefix+'nagahari': case prefix+'harinaga':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Hari Lahir :* ${anu.message.hari_lahir}\n≻ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n≻ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'arahrejeki': case prefix+'arahrezeki':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Hari Lahir :* ${anu.message.hari_lahir}\n≻ *tanggal Lahir :* ${anu.message.tgl_lahir}\n≻ *Arah Rezeki :* ${anu.message.arah_rejeki}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'peruntungan':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} Febrian, 28, 10, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'weton': case prefix+'wetonjawa':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Tanggal :* ${anu.message.tanggal}\n≻ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n≻ *Watak Hari :* ${anu.message.watak_hari}\n≻ *Naga Hari :* ${anu.message.naga_hari}\n≻ *Jam Baik :* ${anu.message.jam_baik}\n≻ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case prefix+'sifat': case prefix+'karakter':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} Febrian, 28, 10, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case prefix+'keberuntungan':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} Febrian, 28, 10, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Nama :* ${anu.message.nama}\n≻ *Lahir :* ${anu.message.tgl_lahir}\n≻ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case prefix+'memancing':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Tanggal :* ${anu.message.tgl_memancing}\n≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'masasubur':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Hasil :* ${anu.message.result}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'zodiak': case prefix+'zodiac':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix+ command} 28 10 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Zodiak :* ${anu.message.zodiak}\n≻ *Nomor :* ${anu.message.nomor_keberuntungan}\n≻ *Aroma :* ${anu.message.aroma_keberuntungan}\n≻ *Planet :* ${anu.message.planet_yang_mengitari}\n≻ *Bunga :* ${anu.message.bunga_keberuntungan}\n≻ *Warna :* ${anu.message.warna_keberuntungan}\n≻ *Batu :* ${anu.message.batu_keberuntungan}\n≻ *Elemen :* ${anu.message.elemen_keberuntungan}\n≻ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n≻ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'shio':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                wann.sendText(m.chat, `≻ *Hasil :* ${anu.message}`, m)
            }
            break
           
case prefix+'ttnowm':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
reply('Loading...')
hx.ttdownloader(args[0]).then( data => {
  wann.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
break

case prefix+'ttaudio':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
reply('Loading...')
hx.ttdownloader(q).then( data => {
  wann.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
	break
case prefix+'gcbot': case prefix+'gc': case prefix+'bot':
reply('*Join To Group Official Bot : https://chat.whatsapp.com/*')
break

case prefix+'tiktoknowm':
case prefix+'tiktok':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
if (!isUrl(q)) reply('Linknya mana')
if (q.includes('tiktok'))
reply('Loading...')
hx.ttdownloader(q).then( data => {
  wann.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})

break

case prefix+'tiktokaudio':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
if (!isUrl(q)) reply('no ingpo')
if (q.includes('tiktok'))
reply('Loading...')
xfar.Tiktok(q).then( data => {
  wann.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mp4' }, { quoted: m })})
break
	break
	
            case prefix+'joox': case prefix+'jooxdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw 'No Query Title'
                reply('Fitur Eror Males Fix')
            }
            break
            case prefix+'soundcloud': case prefix+'scdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw 'No Query Title'
                reply('Gatau Bisa Apa Gak')
                let anu = await fetchJson(api('xteam', '/dl/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await wann.sendImage(m.chat, anu.result.thumb, `âž£ Title : ${anu.result.title}\nâž£ Url : ${isUrl(text)[0]}`)
                wann.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: m })
            }
            break
case prefix+'twtdl': case prefix+'twt': case prefix+'twitterdl': case prefix+'twitter':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
await reply(mess.wait)
xfar.Twitter(q).then(async data => {
let txt = ('p')
wann.sendMessage(m.chat,{ video: { url: data.medias[1].url}},txt,m)})

break
case prefix+'facebook': case prefix+'fb': case prefix+'fbdl': case prefix+'facebookdl':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
await reply(mess.wait)
xfar.Facebook(q).then(async data => {
let txt = `*FACEBOOK DOWNLOADER*\n\n`
txt += `*Title :* ${data.title}\n`
txt += `* Type :* ${data.medias[0].extension}\n`
txt += `*Quality :* ${data.medias[0].quality}\n`
txt += `*Size :* ${data.medias[0].formattedSize}\n`
txt += `*Url :* ${data.url}`
sendFile(m.chat,data.medias[0].url,txt,msg)
})

break

case prefix+'ig': case prefix+'igdl': case prefix+'instagram': case prefix+'instagramdl':
if (!q) reply(`Kirim perintah ${command.slice(1)} link`)
 reply(mess.wait)
xfar.Instagram(q).then(async data => {
let txt = `*Instagram Downloader*\n\n`
txt += `*Title :* ${data.title}\n`
txt += `*Url Source :* ${data.url}\n\n`
txt += `*Tunggu sebentar kak, media sedang di kirim..*`
 reply(txt).then(async res => {
for (let i of data.medias) {
sendFile(m.chat, i.url, '', res)
}
})
})
break
	        case prefix+'pindl': case prefix+'pinterestdl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw 'Masukkan Query Link!'
                reply('Eror Bodo Males Fix Buka Github')
            }
            break
            case prefix+'umma': case prefix+'ummadl':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./FuncBot/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: ' Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: ' Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
≻ Title : ${anu.title}
≻ Author : ${anu.author.name}
≻ Like : ${anu.like}
≻ Caption : ${anu.caption}
≻ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: wann.user.name,
			buttons,
			headerType: 4
		    }
		    wann.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        wann.sendMessage(m.chat, { image: { url }, caption: `≻ Title : ${anu.title}\n≻ Author : ${anu.author.name}\n≻ Like : ${anu.like}\n≻ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case prefix+'ringtone':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./FuncBot/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		wann.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case prefix+'iqra':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		wann.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case prefix+'juzamma':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (args[1] === 'pdf') {
		reply(mess.wait)
		wann.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[1] === 'docx') {
		reply(mess.wait)
		wann.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[1] === 'pptx') {
		reply(mess.wait)
		wann.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[1] === 'xlsx') {
		reply(mess.wait)
		wann.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case prefix+'hadis': case prefix+'hadist':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[1]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case prefix+'alquran':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[1]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		wann.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case prefix+'tafsirsurah':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[1]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await wann.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                wann.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case prefix+'setcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case prefix+'delcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                reply(`Done!`)
            }
            break
            case prefix+'listcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                wann.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case prefix+'lockcmd':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case prefix+'addmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case prefix+'igstalk':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
if(q) m.reply('Username nya mana?')
fetchJson(api('anto','/api/igstalk',{username:q},'apikey')).then(async i =>{
let woi = `*「 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 」*

_Username : ${i.username}_
_Nickname : ${i.fullname}_
_Source : https://instagram.com/${q}_
_Verified : ${i.verified}_
_Followers : ${i.followers}_
_Following : ${i.follow}_
_Categori : ${i.category}_
_Bio : ${i.bio}_`
sendFile(m.chat ,i.thumbnail,woi, m)
})
}
break
            case prefix+'getmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                wann.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case prefix+'listmsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `≻ *Name :* ${i.nama}\n≻ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case prefix+'delmsg': case prefix+'deletemsg':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case prefix+'anonymous':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				
                wann.sendMessage(m.chat, { caption: `Halo ${pushname}👋, berikut perintah anonymous chat bot

🗒️ ${prefix}anonymous - _melihat perintah yang ada_
🔎 ${prefix}search - _mencari teman bicara_
⏩ ${prefix}skip - _mencari teman lain_
❌ ${prefix}stop - _berhenti sesi chatting_
💌 ${prefix}sendprofile - _mengirim kontak pribadi anda ke teman chat_
⚠️ ${prefix}bug - _mengirim laporan ke pemilik bot_
🔮 ${prefix}owner - _kirim kontak pemilik bot_
👤 ${prefix}author - _kirim kontak pembuat bot_
———————————————————
Note: Owner Tidak Bertanggung Jawab Jika Ada Masalah Antara Pengguna Bot`, image: { url: "./media/anonymous.jpg" }, templateButtons: buttonsAnon, footer: 'FSS BOT By Febrian', mentions: [m.sender] })
			break
			}
case prefix+'sendprofile': case prefix+'sendcontact':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                let profile = await wann.profilePictureUrl(room.b)
                let status = await wann.fetchStatus(room.b)
                let msg = await wann.sendImage(room.a, profile, `Name : ${await wann.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                wann.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case prefix+'stop': case prefix+'keluar': case prefix+'leave':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await wann.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                delete this.anonymous[room.id]
                break
            }
            case prefix+'search': case prefix+'mulai': case prefix+'start':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: prefix+'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, wann.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: prefix+'next', buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: prefix+'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await wann.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, wann.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await wann.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, wann.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, wann.user.name, m)
                }
                break
            }
            case prefix+'next': case prefix+'skip':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: prefix+'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await wann.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: prefix+'next', buttonText: { displayText: 'NEXT' }, type: 1 },
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await wann.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, wann.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await wann.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, wann.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: prefix+'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await wann.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, wann.user.name, m)
                }
                break
            }
            case prefix+'public':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                wann.public = true
                reply('Successfully Changed To Public Usage')
            }
            break
            case prefix+'self':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                if (!isWann) throw mess.owner
                wann.public = false
                reply('Successfully Changed To Self Usage')
            }
            break
            case prefix+'ping': case prefix+'botstatus': case prefix+'statusbot':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case prefix+'owner': case prefix+'creator':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;Febrian;;;'
    + 'FN:Febrian\n'
    + 'ORG:Febrian;\n'
    + 'item1.TEL;type=CELL;type=VOICE;waid=6285870824804\n' 
    + 'item1.X-ABLabel:Creator FSS BOT\n'
    + 'item2.EMAIL;type=INTERNET:\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:https://instagram.com/\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;Indonesia;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'
wann.sendMessage(m.chat, { contacts: { displayName: 'Febrian', contacts: [{ vcard }] } }, { quoted: m })
            }
            break            
            case prefix+'author':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                let vcard = 'BEGIN:VCARD\n'
                + 'VERSION:3.0\n' 
                + 'N:;Febrian;;;'
                + 'FN:Febrian\n'
                + 'ORG:Febrian;\n'
                + 'item1.TEL;type=CELL;type=VOICE;waid=6285870824804\n' 
                + 'item1.X-ABLabel:Creator FSS BOT\n'
                + 'item2.EMAIL;type=INTERNET:\n'
                + 'item2.X-ABLabel:Email\n'
                + 'item3.URL:https://instagram.com/\n'
                + 'item3.X-ABLabel:Instagram\n'
                + 'item4.ADR:;;Indonesia;;;;\n'
                + 'item4.X-ABLabel:Region\n'
                + 'END:VCARD'
wann.sendMessage(m.chat, { contacts: { displayName: 'Febrian', contacts: [{ vcard }] } }, { quoted: m })
reply('Hai Kak Ini Adalah Nomor Author Saya')
            }
            break            
                    case prefix+'bug': case prefix+'report':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                    	if(!text) throw `Enter The Bug Example\n\n${command.slice(1)} Menu Error `
                    	wann.sendMessage(`6285870824804@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 
case prefix+'tes': case prefix+'test': case prefix+'alive': case prefix+'bot': case prefix+'robot':  case prefix+'doge':{
                anu = `Hi ${pushname}👋`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/Wann.jpg')},
                            hydratedFooterText: `FSS BOT - Md Beta`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Group',
                                    url: 'https://chat.whatsapp.com/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Command',
                                    id: `${prefix}allmenu`
                                }
                                }]
                        }
                    }
                }), { userJid: m.chat })
                wann.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
             case prefix+'sendbuffer':{
try{
 await reply('Tunggu sebentar...')
 wann.sendImage(m.chat, isUrl(q)[0], mess.done, m)
} catch (err){
 reply(err)
console.log(err)
}
}
break

//================================>ADD FITUR BY Wann<================================//
case prefix+'loli':
       case prefix+'husbu':
       case prefix+'milf':
       case prefix+'cosplay':
       case prefix+'wallml':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://Hikari.github.io`)
              let wipu = await fetchJson(`https://raw.githubusercontent.com/Wann-was/endak-tau/main/${command.slice(1)}.json`)
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              lolis = await getBuffer(wipi)
              wann.sendImage(m.chat, lolis, `Nih Kak😊`, m)
              break
            case prefix+'halah': case prefix+'hilih': case prefix+'huluh': case prefix+'heleh': case prefix+'holoh': 
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
case prefix+'manga':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) throw `Example : ${prefix + command} black rover`
              reply('Tunggu Ya Kakak😊, FSS BOT Carikan')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${text}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              buff = await getBuffer(get_result.coverImage.large)
              wann.sendImage(m.chat, buff, `${ini_txt}`, m)
         break
         case prefix+'anime':
             if (!text) throw `Example : ${prefix + command} black rover`
             reply('Tunggu Ya Kakak😊, FSS BOT Carikan')
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${text}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             wann.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
             break
      case prefix+'kusonime':
             if (!text) throw `Example : ${prefix + command} black rover`
             reply('Tunggu Ya Kakak😊, FSS BOT Carikan')
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             wann.sendImage(m.chat, ini_buffer, `${ini_txt}`, m)
             break
       case prefix+'otakudesu':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) throw `Example : ${prefix + command} black rover`
             reply('Tunggu Ya Kakak😊, FSS BOT Carikan')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
              case prefix+'neko':
       case prefix+'kanna':
       case prefix+'sagiri':
       case prefix+'megumin':
       case prefix+'wallnime':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply('Tunggu Ya Kak😊, FSS BOT Carikan')
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=${lolkey}`)
              wann.sendImage(m.chat, buff, `Nih Kak😊`, m)
              break
       
       
    
              break
       case prefix+'nakanoitsuki':
       case prefix+'nakanonino':
       case prefix+'nakanomiku':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply(mess.wait)
              res = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${command.slice(1)}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              wann.sendImage(m.chat, random, `Nih Kak😊`, m)
              break
              case prefix+'lolkey':
       case prefix+'cekapikey':
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              if (!text) throw `Example : ${prefix + command} Textnya Mana Kak😡`
              anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`)
              teks = `*YOUR APIKEY*\n\n➸ Username= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://api.lolhuman.xyz`
              reply(teks)
              break
       case prefix+'storyanime':
              case prefix+'videoanime':
       addCountCmd(`#${command.slice(1)}`, sender, _cmd)
              reply('Tunggu Ya Kak😊, FSS BOT Carikan')
              anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
              wann.sendMessage(m.chat, { video: { url: anu.result }, mimetype: 'video/mp4', caption: `Nih Kak😊` }, { quoted: m })
              break
              case prefix+'doujindesu':
             if (!text) throw `Example : ${prefix + command} Textnya Mana Kak😡`
             reply('Tunggu Ya Kakak😊, FSS BOT Carikan')
             try {
             doujinnya = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${text}&apiKey=administrator`)
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             wann.sendImage(m.chat, buffer, xixixai, m)
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
             case prefix+'otakuongoing':              
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
              wann.sendImage(m.chat, buff, ot, m)
break

case prefix+'quotes':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    reply(`_${quotes}_\n\n● ${author}*`)
    break
case prefix+'quotesanime':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
    quotes = quotes.result
    quote = quotes.quote
    char = quotes.character
    anime = quotes.anime
    episode = quotes.episode
    reply(`_${quote}_\n\n*● ${char}*\n*● ${anime} ${episode}*`)
    break
case prefix+'quotesdilan':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=${lolkey}`)
    reply(get_result.result)
   break
    break
case prefix+'quotesimage':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=${lolkey}`)
    wann.sendImage(m.chat, buff, `FSS BOT - By ©Febrian`, m)
 break
case prefix+'faktaunik':
case prefix+'katabijak':
case prefix+'pantun':
case prefix+'bucin':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command.slice(1)}?apikey=${lolkey}`)
   reply(get_result.result)
        break;
    break
case prefix+'randomnama':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
   reply(anu.result)
        break;
    break
       // Movie & Story
case prefix+'lk21':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Link : ${get_result.link}\n`
    ini_txt += `Genre : ${get_result.genre}\n`
    ini_txt += `Views : ${get_result.views}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Tahun : ${get_result.tahun}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
    ini_txt += `Location : ${get_result.location}\n`
    ini_txt += `Date Release : ${get_result.date_release}\n`
    ini_txt += `Language : ${get_result.Language}\n`
    ini_txt += `Link Download : ${get_result.link_dl}`
    thumbnail = await getBuffer(get_result.thumbnail)
    wann.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
    break
case prefix+'drakorongoing':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = "Ongoing Drakor\n\n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n`
        ini_txt += `Year : ${x.category}\n`
        ini_txt += `Total Episode : ${x.total_episode}\n`
        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
    }
    reply(ini_txt)
    break
case prefix+'wattpad':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
    ini_url = args[1]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${ini_url}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Motify date : ${get_result.modifyDate}\n`
    ini_txt += `Create date: ${get_result.createDate}\n`
    ini_txt += `Word : ${get_result.word}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Vote : ${get_result.vote}\n`
    ini_txt += `Reader : ${get_result.reader}\n`
    ini_txt += `Pages : ${get_result.pages}\n`
    ini_txt += `Description : ${get_result.desc}\n\n`
    ini_txt += `Story : \n${get_result.story}`
    thumbnail = await getBuffer(get_result.photo)
    wann.sendImage(m.chat, thumbnail, `${ini_txt}`, m)
    break
case prefix+'wattpadsearch':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = "Wattpad Seach : \n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Url : ${x.url}\n`
        ini_txt += `Part : ${x.parts}\n`
        ini_txt += `Motify date : ${x.modifyDate}\n`
        ini_txt += `Create date: ${x.createDate}\n`
        ini_txt += `Coment count: ${x.commentCount}\n\n`
    }
    reply(ini_txt)
    break
case prefix+'cerpen':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Creator : ${get_result.creator}\n`
    ini_txt += `Story :\n${get_result.cerpen}`
    titid = ini_txt
   reply(titid)
    break
case prefix+'ceritahoror':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
            db.users[m.sender].limit -= 1 // -1 limit
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Story :\n${get_result.story}\n`
    buff = await getBuffer(get_result.thumbnail)
    wann.sendImage(m.chat, buff, `${ini_txt}`, m)
        break
    case prefix+'bisakah':
 if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					bisakah = body.slice(1)
					const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 🙉','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					wann.sendMessage(m.chat, { text: keh }, { quoted: m })
					break

case prefix+'kapan':
case prefix+'kapankah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					kapankah = body.slice(1)
					const kapan =['Besok','YNTKTS','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					wann.sendMessage(m.chat, { text: koh }, { quoted: m })
					break

					
case prefix+'apakah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					apakah = body.slice(1)
					const apa =['iya dong jelas itu','YNTKTS','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak 🙀','Haha mna mungkin 😎']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					wann.sendMessage(m.chat, { text: kah }, { quoted: m })
					break
					
case prefix+'bagaimanakah':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		            db.users[m.sender].limit -= 1 // -1 limit
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					wann.sendMessage(m.chat, { text: mana }, { quoted: m })
					break
					


case prefix+'goblokcek': case prefix+'jelekcek': case prefix+'rate':case prefix+'haram':case prefix+'gaycek':
case prefix+'lesbicek':case prefix+'gantengcek': case prefix+'cantikcek':case prefix+'begocek': case prefix+'suhucek':case prefix+'pintercek':
case prefix+'jagocek':case prefix+'nolepcek':case prefix+'babicek':case prefix+'bebancek':case prefix+'baikcek':
case prefix+'jahatcek':case prefix+'anjingcek':case prefix+'haramcek':case prefix+'pakboycek':
case prefix+'pakgirlcek':case prefix+'sangecek': case prefix+'bapercek':case prefix+'fakboycek':case prefix+'alimcek':case prefix+'suhucek':
case prefix+'fakgirlcek':case prefix+'kerencek':case prefix+'wibucek':case prefix+'pasarkascek':
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
db.users[m.sender].limit -= 1 // -1 limit
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
wann.sendMessage(m.chat, { text: yn }, { quoted: m })
break

case prefix+'readmore': case prefix+'more':
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
 if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply( text1 + readmore + text2)
break

case prefix+'berkas':
case prefix+'pile':
if (m.isGroup) throw mess.private
if (!isWann) return reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari file apa kak*")
sendfile = `${q}`
anuu = fs.readFileSync(sendfile)
wann.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `${q}`}, {quoted:m})                  
///wann.sendMessage(m.chat, anuu, document, {mimetype: "application/octet-stream", filename: `${q}`, quoted: m})
break 

case prefix+'getcase':
if (!isWann) return reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari case apa kak*") 
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("wann.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply (`${getCase(q)}`)
break

case prefix+'getidgc':
if (!m.isGroup) return reply(mess.group)
reply (`${m.chat}`)
break
    

case prefix+'hu':
case prefix+'culik':
if (!m.isGroup) return reply(mess.group)
         if (!isWann) return reply(mess.owner)
  if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
  let pantek = []
  for (let i of groupMembers) {
      pantek.push(i.jid)
  }
  await wann.groupParticipantsUpdate(m.chat, [pantek], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 // wann.groupAdd(q, pantek)
  break
case prefix+'stalkig':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jessnolimit`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `Username : ${ini_result.username}\n`
                    ini_txt += `Full Name : ${ini_result.fullname}\n`
                    ini_txt += `Posts : ${ini_result.posts}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    wann.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})
                    break
                case prefix+'stalkgithub':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL-Human`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    await wann.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                case prefix+'stalktwitter':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[1]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    await wann.sendMessage(m.chat, { image: ini_buffer, caption: ini_txt }, { quoted: m})                  
                    break
                
                case prefix+'shortlink':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[1]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
                case prefix+'spamsms':
                if (!isPremium && !m.key.fromMe && !isWann) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[1]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${nomor}`)
                    reply("Success")
                    break
                    case prefix+'limit+': 
if (!global.db.users[m.sender].limit < 1) return reply(`S u k s e s Menambah Limit`) // respon ketika limit habis
db.users[m.sender].limit += 1
break
case prefix+'checklimit': 
reply(`Limit Kamu : *${global.db.users[m.sender].limit}*`)
break
case prefix+'react':
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!text) throw `Example : ${prefix + command} Emot Mana Kak😡`
const reactionMessage = {
    react: {
        text: `${text}`,
        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
    }
}

 wann.sendMessage(m.chat, reactionMessage)
 break
 
        // Menu Store
        case '/menu':
            function _0x3d70(_0x558ac3,_0x421c5e){const _0xce4245=_0xce42();return _0x3d70=function(_0x3d7099,_0x17d817){_0x3d7099=_0x3d7099-0x1dc;let _0x528d3c=_0xce4245[_0x3d7099];return _0x528d3c;},_0x3d70(_0x558ac3,_0x421c5e);}const _0xb44550=_0x3d70;function _0xce42(){const _0x4d8060=['310830qrBRjd','length','Pilih\x20salah\x20satu','isGroup','sendMessage','15592YGahgs','9PtbuGh','456IEKuOh','65sEsWAz','259kdyytz','key','chat','Menu','32857wLRfeR','6117sPTAPr','143394AuDhLM','Belum\x20ada\x20list\x20message\x20di\x20database','group','push','3144GeQAUg','182120depScE','List\x20Menu','Belum\x20ada\x20list\x20message\x20yang\x20terdaftar\x20di\x20group\x20ini','106394KyWJVy'];_0xce42=function(){return _0x4d8060;};return _0xce42();}(function(_0x2a08fa,_0x355bb5){const _0x1c1a1c=_0x3d70,_0x2f5c09=_0x2a08fa();while(!![]){try{const _0x5c61e2=parseInt(_0x1c1a1c(0x1dd))/0x1+parseInt(_0x1c1a1c(0x1dc))/0x2+parseInt(_0x1c1a1c(0x1eb))/0x3*(parseInt(_0x1c1a1c(0x1e4))/0x4)+-parseInt(_0x1c1a1c(0x1e5))/0x5*(-parseInt(_0x1c1a1c(0x1ec))/0x6)+parseInt(_0x1c1a1c(0x1e6))/0x7*(parseInt(_0x1c1a1c(0x1e2))/0x8)+parseInt(_0x1c1a1c(0x1e3))/0x9*(parseInt(_0x1c1a1c(0x1f1))/0xa)+-parseInt(_0x1c1a1c(0x1ea))/0xb*(parseInt(_0x1c1a1c(0x1f0))/0xc);if(_0x5c61e2===_0x355bb5)break;else _0x2f5c09['push'](_0x2f5c09['shift']());}catch(_0x47b000){_0x2f5c09['push'](_0x2f5c09['shift']());}}}(_0xce42,0x3476b));if(!m['isGroup'])return reply(mess[_0xb44550(0x1ee)]);if(!m[_0xb44550(0x1e0)])return reply(mess['OnlyGrup']);if(db_respon_list[_0xb44550(0x1de)]===0x0)return reply(_0xb44550(0x1ed));if(!isAlreadyResponListGroup(from,db_respon_list))return reply(_0xb44550(0x1f3));var arr_rows=[];for(let x of db_respon_list){x['id']===from&&arr_rows[_0xb44550(0x1ef)]({'title':x[_0xb44550(0x1e7)],'rowId':x['key']});}const listMessage={'text':_0xb44550(0x1f2),'buttonText':_0xb44550(0x1e9),'sections':[{'title':_0xb44550(0x1df),'rows':arr_rows}],'listType':0x1},sendMsg=await wann[_0xb44550(0x1e1)](m[_0xb44550(0x1e8)],listMessage);
               break
        
        case '/additem': case '/listadd':
        function _0x58f7(_0x3ab5e1,_0x3b199a){var _0x5a170a=_0x5a17();return _0x58f7=function(_0x58f7b3,_0xd2efdd){_0x58f7b3=_0x58f7b3-0x16d;var _0x128a02=_0x5a170a[_0x58f7b3];return _0x128a02;},_0x58f7(_0x3ab5e1,_0x3b199a);}var _0x45356c=_0x58f7;(function(_0x2a9214,_0x3dd915){var _0x186822=_0x58f7,_0x454775=_0x2a9214();while(!![]){try{var _0x1b1388=-parseInt(_0x186822(0x17e))/0x1+-parseInt(_0x186822(0x182))/0x2+-parseInt(_0x186822(0x18f))/0x3+-parseInt(_0x186822(0x18c))/0x4+parseInt(_0x186822(0x184))/0x5*(parseInt(_0x186822(0x187))/0x6)+parseInt(_0x186822(0x16e))/0x7*(parseInt(_0x186822(0x16d))/0x8)+parseInt(_0x186822(0x183))/0x9*(parseInt(_0x186822(0x170))/0xa);if(_0x1b1388===_0x3dd915)break;else _0x454775['push'](_0x454775['shift']());}catch(_0x558418){_0x454775['push'](_0x454775['shift']());}}}(_0x5a17,0xc8a30));if(!m[_0x45356c(0x180)])return reply(mess[_0x45356c(0x193)]);if(!m[_0x45356c(0x180)])return reply(mess[_0x45356c(0x16f)]);if(!isAdmins&&!isWann)return reply('Only\x20Admins');var args1=text['split'](',')[0x0],args2=text[_0x45356c(0x173)](',')[0x1];if(!q[_0x45356c(0x18e)](','))return reply(_0x45356c(0x175)+command[_0x45356c(0x188)](0x1)+_0x45356c(0x192)+command[_0x45356c(0x188)](0x1)+'\x20Dm\x20Ml,\x20List');if(isAlreadyResponList(from,args1,db_respon_list))return reply(_0x45356c(0x171)+args1+'*\x20sudah\x20ada\x20di\x20group\x20ini.');function _0x5a17(){var _0x505a95=['Gunakan\x20dengan\x20cara\x20','append','Sukses\x20set\x20list\x20message\x20dengan\x20key\x20:\x20*','quotedMessage','src','json','message','downloadAndSaveMediaMessage','extendedTextMessage','1180128SShjhG','existsSync','isGroup','contextInfo','2064190CneVZT','2189961enUUYM','10LhVeSd','then','test','2195238urOOij','slice','https://telegra.ph/upload','imageMessage','.tmp','2320792lWChxt','.jpg','includes','1124352hHTtrj','https://telegra.ph','POST','\x20*Nama\x20Item,Item*\x0a\x0a_Contoh_\x0a\x0a','group','40dJokpy','1834889QlEFvC','OnlyGrup','80MWxrIQ','List\x20respon\x20dengan\x20key\x20:\x20*','readFileSync','split','unlinkSync'];_0x5a17=function(){return _0x505a95;};return _0x5a17();}if(/image/[_0x45356c(0x186)](mime)){let media=await wann[_0x45356c(0x17c)](m[_0x45356c(0x17b)]['imageMessage']||m[_0x45356c(0x17b)][_0x45356c(0x17d)]?.[_0x45356c(0x181)][_0x45356c(0x178)][_0x45356c(0x18a)],'image');const fd=new FormData();fd[_0x45356c(0x176)]('file',fs[_0x45356c(0x172)](media),_0x45356c(0x18b),_0x45356c(0x18d)),fetch(_0x45356c(0x189),{'method':_0x45356c(0x191),'body':fd})[_0x45356c(0x185)](_0xd08035=>_0xd08035[_0x45356c(0x17a)]())[_0x45356c(0x185)](_0x11eb0b=>{var _0x338bbe=_0x45356c;addResponList(from,args1,args2,!![],_0x338bbe(0x190)+_0x11eb0b[0x0][_0x338bbe(0x179)],db_respon_list),reply(_0x338bbe(0x177)+args1+'*');if(fs[_0x338bbe(0x17f)](media))fs[_0x338bbe(0x174)](media);});}else addResponList(from,args1,args2,![],'-',db_respon_list),reply(_0x45356c(0x177)+args1+'*');
            break
        case '/listdel':
            var _0x1ff641=_0x11fd;(function(_0x327c8a,_0x49f0c6){var _0x20c30d=_0x11fd,_0x224bcd=_0x327c8a();while(!![]){try{var _0x3521a5=parseInt(_0x20c30d(0x134))/0x1+-parseInt(_0x20c30d(0x13c))/0x2*(-parseInt(_0x20c30d(0x137))/0x3)+-parseInt(_0x20c30d(0x13a))/0x4*(-parseInt(_0x20c30d(0x129))/0x5)+parseInt(_0x20c30d(0x12e))/0x6*(parseInt(_0x20c30d(0x135))/0x7)+-parseInt(_0x20c30d(0x127))/0x8+-parseInt(_0x20c30d(0x12b))/0x9*(parseInt(_0x20c30d(0x138))/0xa)+-parseInt(_0x20c30d(0x131))/0xb;if(_0x3521a5===_0x49f0c6)break;else _0x224bcd['push'](_0x224bcd['shift']());}catch(_0x4d81f6){_0x224bcd['push'](_0x224bcd['shift']());}}}(_0x50ff,0x9929d));if(!m['isGroup'])return reply(mess[_0x1ff641(0x12d)]);if(!m[_0x1ff641(0x136)])return reply(mess[_0x1ff641(0x133)]);if(!isAdmins&&!isWann)return reply(_0x1ff641(0x128));function _0x50ff(){var _0x4aef45=['14265dYrgbq','length','1382697vUSOof','Belum\x20ada\x20list\x20message\x20di\x20database','group','6ayUNcK','List\x20Item\x20dengan\x20Nama\x20*','slice','12843215SSOPVE','\x20Dm\x20Ml','OnlyGrup','381291goWfOx','7183617uSucXc','isGroup','3YfopEh','70GwjKpM','Gunakan\x20dengan\x20cara\x20','1648qIhUYD','\x20*Nama\x20Item*\x0a\x0a_Contoh_\x0a\x0a','1766326zGlqHA','Sukses\x20delete\x20list\x20message\x20dengan\x20key\x20*','4766144MOOrkf','Only\x20Admins'];_0x50ff=function(){return _0x4aef45;};return _0x50ff();}if(db_respon_list[_0x1ff641(0x12a)]===0x0)return reply(_0x1ff641(0x12c));if(!q)return reply(_0x1ff641(0x139)+command['slice'](0x1)+_0x1ff641(0x13b)+command[_0x1ff641(0x130)](0x1)+_0x1ff641(0x132));if(!isAlreadyResponList(from,q,db_respon_list))return reply(_0x1ff641(0x12f)+q+'*\x20tidak\x20ada\x20di\x20database!');function _0x11fd(_0x377da5,_0x45fb68){var _0x50ff7a=_0x50ff();return _0x11fd=function(_0x11fdc1,_0x5be59c){_0x11fdc1=_0x11fdc1-0x127;var _0x233f82=_0x50ff7a[_0x11fdc1];return _0x233f82;},_0x11fd(_0x377da5,_0x45fb68);}delResponList(from,q,db_respon_list),reply(_0x1ff641(0x13d)+q+'*');
            break
        case '/update':
            var _0x57095e=_0x2ab8;(function(_0x34eb1b,_0x20ccb9){var _0xd40d53=_0x2ab8,_0x41a244=_0x34eb1b();while(!![]){try{var _0x2a2adc=parseInt(_0xd40d53(0x1e6))/0x1*(-parseInt(_0xd40d53(0x1da))/0x2)+parseInt(_0xd40d53(0x1e0))/0x3+-parseInt(_0xd40d53(0x1d2))/0x4*(-parseInt(_0xd40d53(0x1c7))/0x5)+parseInt(_0xd40d53(0x1d9))/0x6*(parseInt(_0xd40d53(0x1dd))/0x7)+parseInt(_0xd40d53(0x1e5))/0x8*(-parseInt(_0xd40d53(0x1c2))/0x9)+parseInt(_0xd40d53(0x1d8))/0xa*(parseInt(_0xd40d53(0x1c1))/0xb)+-parseInt(_0xd40d53(0x1c0))/0xc;if(_0x2a2adc===_0x20ccb9)break;else _0x41a244['push'](_0x41a244['shift']());}catch(_0x3ff32a){_0x41a244['push'](_0x41a244['shift']());}}}(_0x2cc7,0xd1a4f));function _0x2ab8(_0xfaa1d,_0xdbd454){var _0x2cc786=_0x2cc7();return _0x2ab8=function(_0x2ab846,_0x4e0cce){_0x2ab846=_0x2ab846-0x1c0;var _0x41680d=_0x2cc786[_0x2ab846];return _0x41680d;},_0x2ab8(_0xfaa1d,_0xdbd454);}if(!m[_0x57095e(0x1db)])return reply(mess[_0x57095e(0x1df)]);function _0x2cc7(){var _0x2515b7=['downloadAndSaveMediaMessage','237712iVfRgQ','1iGMjDe','https://telegra.ph','10360020MzSwAt','33ftfjCI','225ESwzqZ','Maaf,\x20untuk\x20key\x20*','*\x20belum\x20terdaftar\x20di\x20group\x20ini','.tmp','.jpg','95jfUMBa','Sukses\x20update\x20list\x20message\x20dengan\x20key\x20:\x20*','Gunakan\x20dengan\x20cara\x20','image','Only\x20Admins','imageMessage','quotedMessage','extendedTextMessage','slice','append','contextInfo','215396pisAsf','message','json','includes','Sukses\x20update\x20respon\x20list\x20dengan\x20key\x20*','test','2795680smyCyT','6aMcjUi','909336xghERh','isGroup','then','701295gHRuts','split','OnlyGrup','2872608nwsgwU','file','readFileSync','existsSync'];_0x2cc7=function(){return _0x2515b7;};return _0x2cc7();}if(!isAdmins&&!isWann)return reply(_0x57095e(0x1cb));var args1=q[_0x57095e(0x1de)](',')[0x0],args2=q['split'](',')[0x1];if(!q[_0x57095e(0x1d5)](','))return reply(_0x57095e(0x1c9)+command[_0x57095e(0x1cf)](0x1)+'\x20*Nama\x20Item,Item*\x0a\x0a_Contoh_\x0a\x0a'+command[_0x57095e(0x1cf)](0x1)+'\x20Dm\x20Ml,\x20List');if(!isAlreadyResponListGroup(from,db_respon_list))return reply(_0x57095e(0x1c3)+args1+_0x57095e(0x1c4));if(/image/[_0x57095e(0x1d7)](mime)){let media=await wann[_0x57095e(0x1e4)](m[_0x57095e(0x1d3)][_0x57095e(0x1cc)]||m[_0x57095e(0x1d3)][_0x57095e(0x1ce)]?.[_0x57095e(0x1d1)][_0x57095e(0x1cd)][_0x57095e(0x1cc)],_0x57095e(0x1ca));const fd=new FormData();fd[_0x57095e(0x1d0)](_0x57095e(0x1e1),fs[_0x57095e(0x1e2)](media),_0x57095e(0x1c5),_0x57095e(0x1c6)),fetch('https://telegra.ph/upload',{'method':'POST','body':fd})[_0x57095e(0x1dc)](_0x84c4ac=>_0x84c4ac[_0x57095e(0x1d4)]())['then'](_0x513443=>{var _0x1d5cb0=_0x57095e;updateResponList(from,args1,args2,!![],_0x1d5cb0(0x1e7)+_0x513443[0x0]['src'],db_respon_list),reply(_0x1d5cb0(0x1c8)+args1+'*');if(fs[_0x1d5cb0(0x1e3)](media))fs['unlinkSync'](media);});}else updateResponList(from,args1,args2,![],'-',db_respon_list),reply(_0x57095e(0x1d6)+args1+'*');
            break

        case prefix+'tambah':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one + nilai_two}`)
            break
        case prefix+'kurang':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one - nilai_two}`)
            break
        case prefix+'kali':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one * nilai_two}`)
            break
        case prefix+'bagi':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one / nilai_two}`)
            break
            // jangan di ubah kalo gk mau eror  yg proses sama done
        case 'cekproses':
            if (!isGroup) return
            if (!isWann && !groupAdmins) return
            if (!m.quoted) return reply('Reply Bukti Pembayaran!!')
            if (!m.quoted.text) {
            reply('Catatannya mana?')
            }
            if (m.quoted.text) {
            let catad = m.quoted.text
            let nimb = quoted.sender
            let prses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${catad}\n\nPesanan @${nimb.split("@")[0]} sedang di proses!`
            mentions(prses, [nimb], true)
            }
            break
            case 'p': case prefix+'p': case 'P': case prefix+'P':
                if (!isGroup) return
                if (!isWann && !groupAdmins) return
                if (!m.quoted) return reply('Reply Bukti Pembayaran!!')
                if (!m.quoted.text) {
                reply('Catatannya mana?')
                }
                if (m.quoted.text) {
                let catad = m.quoted.text
                let nimb = quoted.sender
                let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${catad}\n\nPesanan @${nimb.split("@")[0]} sedang di proses!`
                const _0x283fa7=_0x9364;function _0x4a97(){const _0xafd3ab=['667856TMwEuc','76185dJUvlt','422652yuTKwQ','48jpLavC','tanggal','5XUCcdH','jam','pesan','74721zpLIcZ','617619DRAbLQ','nama','split','1059798mlfZOl','replace','1568400ASgVke','528cWezhV'];_0x4a97=function(){return _0xafd3ab;};return _0x4a97();}(function(_0xe8df54,_0x5815fa){const _0x3ea64e=_0x9364,_0x25932d=_0xe8df54();while(!![]){try{const _0x2a0c87=-parseInt(_0x3ea64e(0x1f2))/0x1+parseInt(_0x3ea64e(0x1ec))/0x2*(parseInt(_0x3ea64e(0x1f1))/0x3)+-parseInt(_0x3ea64e(0x1eb))/0x4+parseInt(_0x3ea64e(0x1ee))/0x5*(-parseInt(_0x3ea64e(0x1e5))/0x6)+-parseInt(_0x3ea64e(0x1e9))/0x7+-parseInt(_0x3ea64e(0x1e8))/0x8*(-parseInt(_0x3ea64e(0x1ea))/0x9)+parseInt(_0x3ea64e(0x1e7))/0xa;if(_0x2a0c87===_0x5815fa)break;else _0x25932d['push'](_0x25932d['shift']());}catch(_0x270240){_0x25932d['push'](_0x25932d['shift']());}}}(_0x4a97,0x4da17));function _0x9364(_0x7ccffa,_0x46b5fa){const _0x4a9794=_0x4a97();return _0x9364=function(_0x93644c,_0x10d2d7){_0x93644c=_0x93644c-0x1e5;let _0x441085=_0x4a9794[_0x93644c];return _0x441085;},_0x9364(_0x7ccffa,_0x46b5fa);}const getTextP=getTextSetProses(from,set_proses);getTextP!==undefined?mentions(getTextP['replace'](_0x283fa7(0x1f0),catad)['replace'](_0x283fa7(0x1f3),nimb[_0x283fa7(0x1f4)]('@')[0x0])['replace'](_0x283fa7(0x1ef),jam)[_0x283fa7(0x1e6)](_0x283fa7(0x1ed),tanggal),[nimb],!![]):mentions(proses,set_proses,[nimb],!![]);
                }
                break
            case 'd':
                if (!isGroup) return
                if (!isWann && !groupAdmins) return
                if (!m.quoted) return reply('Reply Bukti Pembayaran!!')
                if (!m.quoted.text) {
                reply('Catatannya mana?')
                }
                if (m.quoted.text) {
                let catad = m.quoted.text
                let nimb = quoted.sender
                let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n${catad}\n\nPesanan @${nimb.split("@")[0]} Next Order ya`
                const _0x45e7f8=_0x5a2f;function _0x45a8(){const _0x31fd51=['108832dGIaHF','18gTatgy','78IqkvBr','516YZWMlo','replace','209305enmSMj','165186gKwZqw','split','1486888dYTHoI','251127HMgBLo','pesan','tanggal','2052790TRRJSY','1833sGJfNf'];_0x45a8=function(){return _0x31fd51;};return _0x45a8();}function _0x5a2f(_0x47df70,_0x233b16){const _0x45a836=_0x45a8();return _0x5a2f=function(_0x5a2f9a,_0x23a3a3){_0x5a2f9a=_0x5a2f9a-0x1a9;let _0x40461f=_0x45a836[_0x5a2f9a];return _0x40461f;},_0x5a2f(_0x47df70,_0x233b16);}(function(_0x2fccb0,_0x54e34b){const _0x2283b1=_0x5a2f,_0xb9bae2=_0x2fccb0();while(!![]){try{const _0x4be2ce=-parseInt(_0x2283b1(0x1b3))/0x1+-parseInt(_0x2283b1(0x1ad))/0x2*(-parseInt(_0x2283b1(0x1a9))/0x3)+-parseInt(_0x2283b1(0x1b2))/0x4+-parseInt(_0x2283b1(0x1af))/0x5+parseInt(_0x2283b1(0x1ac))/0x6*(parseInt(_0x2283b1(0x1b0))/0x7)+-parseInt(_0x2283b1(0x1aa))/0x8+parseInt(_0x2283b1(0x1ab))/0x9*(parseInt(_0x2283b1(0x1b6))/0xa);if(_0x4be2ce===_0x54e34b)break;else _0xb9bae2['push'](_0xb9bae2['shift']());}catch(_0x2c75cb){_0xb9bae2['push'](_0xb9bae2['shift']());}}}(_0x45a8,0x30030));const getTextD=getTextSetDone(from,set_done);getTextD!==undefined?mentions(getTextD['replace'](_0x45e7f8(0x1b4),catad)[_0x45e7f8(0x1ae)]('nama',nimb[_0x45e7f8(0x1b1)]('@')[0x0])['replace']('jam',jam)[_0x45e7f8(0x1ae)](_0x45e7f8(0x1b5),tanggal),[nimb],!![]):mentions(sukses,set_done,[nimb],!![]);
                }
                break
    
                case prefix+'setp':
                    var _0xbea6e0=_0x3040;(function(_0x4e93e3,_0xe3065b){var _0x2f363d=_0x3040,_0x55257a=_0x4e93e3();while(!![]){try{var _0x527e28=-parseInt(_0x2f363d(0x1ba))/0x1+-parseInt(_0x2f363d(0x1b0))/0x2*(parseInt(_0x2f363d(0x1ad))/0x3)+parseInt(_0x2f363d(0x1ac))/0x4*(parseInt(_0x2f363d(0x1a7))/0x5)+-parseInt(_0x2f363d(0x1b7))/0x6*(parseInt(_0x2f363d(0x1b6))/0x7)+-parseInt(_0x2f363d(0x1b2))/0x8+parseInt(_0x2f363d(0x1ab))/0x9+parseInt(_0x2f363d(0x1af))/0xa*(parseInt(_0x2f363d(0x1ae))/0xb);if(_0x527e28===_0xe3065b)break;else _0x55257a['push'](_0x55257a['shift']());}catch(_0x1de536){_0x55257a['push'](_0x55257a['shift']());}}}(_0x22a1,0x6df93));if(!m[_0xbea6e0(0x1b8)])return reply(mess[_0xbea6e0(0x1b3)]);function _0x3040(_0x201591,_0x3a5c4b){var _0x22a189=_0x22a1();return _0x3040=function(_0x30400b,_0x25561c){_0x30400b=_0x30400b-0x1a7;var _0x8a9c5b=_0x22a189[_0x30400b];return _0x8a9c5b;},_0x3040(_0x201591,_0x3a5c4b);}if(!m[_0xbea6e0(0x1b8)])return reply(mess['OnlyGrup']);if(!isAdmins&&!isWann)return reply(_0xbea6e0(0x1b9));function _0x22a1(){var _0xbeeb9=['529947MsXDwB','4aSGPxm','2399973qidOEV','753643raEzQn','320GEjWjT','2yFFhkC','Set\x20proses\x20Sukses','6483960BVQzDr','group','\x20*teks_p*\x0a\x0a_Contoh_\x0a\x0a','Gunakan\x20dengan\x20cara\x20','7gvamat','2256402oOtcvx','isGroup','Only\x20Admins','182343mLvrfH','1840240TCjgGU','Successfully\x20set\x20proses!','slice','\x20pesanan\x20pesan,\x20tag\x20orang\x20nama'];_0x22a1=function(){return _0xbeeb9;};return _0x22a1();}if(!q)return reply(_0xbea6e0(0x1b5)+command+_0xbea6e0(0x1b4)+command+_0xbea6e0(0x1aa));if(isSetProses(from,set_proses))return reply(_0xbea6e0(0x1b1));addCountCmd('#'+command[_0xbea6e0(0x1a9)](0x1),sender,_cmd),addSetProses(q,from,set_proses),reply(_0xbea6e0(0x1a8));
                break
            case prefix+'changeproses': case prefix+'changep':
                function _0x3aa7(_0x2709b1,_0xb0194d){var _0x36d0a9=_0x36d0();return _0x3aa7=function(_0x3aa72d,_0x1df2bf){_0x3aa72d=_0x3aa72d-0x147;var _0x5a9a7c=_0x36d0a9[_0x3aa72d];return _0x5a9a7c;},_0x3aa7(_0x2709b1,_0xb0194d);}function _0x36d0(){var _0x31b00d=['329480giOcVh','OnlyGrup','248OGSoXK','2CcxLQf','6555yAZuuD','\x20*teks_p*\x0a\x0a_Contoh_\x0a\x0a','1495188dhBFGN','669850gYMNkd','Only\x20Admins','1661511LAsdwW','\x20pesanan\x20pesan,\x20tag\x20orang\x20nama','Sukses\x20change\x20set\x20proses\x20teks!','group','1846635KIzjUS','isGroup','slice','115551ilOzdu','35bMUnLL'];_0x36d0=function(){return _0x31b00d;};return _0x36d0();}var _0x49218a=_0x3aa7;(function(_0x572537,_0x249ab5){var _0x4d5d4f=_0x3aa7,_0x2209a3=_0x572537();while(!![]){try{var _0x277b2a=parseInt(_0x4d5d4f(0x148))/0x1*(parseInt(_0x4d5d4f(0x147))/0x2)+-parseInt(_0x4d5d4f(0x14d))/0x3+parseInt(_0x4d5d4f(0x156))/0x4*(parseInt(_0x4d5d4f(0x155))/0x5)+-parseInt(_0x4d5d4f(0x14a))/0x6+parseInt(_0x4d5d4f(0x151))/0x7+parseInt(_0x4d5d4f(0x158))/0x8*(parseInt(_0x4d5d4f(0x154))/0x9)+-parseInt(_0x4d5d4f(0x14b))/0xa;if(_0x277b2a===_0x249ab5)break;else _0x2209a3['push'](_0x2209a3['shift']());}catch(_0x5388f1){_0x2209a3['push'](_0x2209a3['shift']());}}}(_0x36d0,0x5b89b));if(!m[_0x49218a(0x152)])return reply(mess[_0x49218a(0x150)]);if(!m[_0x49218a(0x152)])return reply(mess[_0x49218a(0x157)]);if(!isAdmins&&!isWann)return reply(_0x49218a(0x14c));if(!q)return reply('Gunakan\x20dengan\x20cara\x20'+command+_0x49218a(0x149)+command+_0x49218a(0x14e));addCountCmd('#'+command[_0x49218a(0x153)](0x1),sender,_cmd);isSetProses(from,set_proses)?(changeSetProses(q,from,set_proses),reply('Sukses\x20change\x20set\x20proses\x20teks!')):(addSetProses(q,from,set_proses),reply(_0x49218a(0x14f)));
                break
            case prefix+'delsetproses': case prefix+'delsetp':
                var _0x5dcde1=_0x5817;(function(_0x3316b2,_0x20aa4c){var _0x28a86d=_0x5817,_0x494b29=_0x3316b2();while(!![]){try{var _0x2c8448=parseInt(_0x28a86d(0xd4))/0x1*(-parseInt(_0x28a86d(0xd6))/0x2)+-parseInt(_0x28a86d(0xd0))/0x3+parseInt(_0x28a86d(0xd1))/0x4+parseInt(_0x28a86d(0xd8))/0x5+parseInt(_0x28a86d(0xd7))/0x6+parseInt(_0x28a86d(0xdb))/0x7*(parseInt(_0x28a86d(0xda))/0x8)+-parseInt(_0x28a86d(0xcf))/0x9*(-parseInt(_0x28a86d(0xd9))/0xa);if(_0x2c8448===_0x20aa4c)break;else _0x494b29['push'](_0x494b29['shift']());}catch(_0x2485c4){_0x494b29['push'](_0x494b29['shift']());}}}(_0x30ec,0x43004));if(!m[_0x5dcde1(0xd5)])return reply(mess[_0x5dcde1(0xd2)]);function _0x30ec(){var _0x2adda4=['1439283xvmeeh','1545272hpgiil','group','Belum\x20ada\x20set\x20proses\x20di\x20sini..','77768gKRlTo','isGroup','8gEaiwq','998466UqCeGR','1397050thcYFB','20MhYNmg','32sKklkn','395122Suvtnm','slice','33057TjquWq'];_0x30ec=function(){return _0x2adda4;};return _0x30ec();}if(!m[_0x5dcde1(0xd5)])return reply(mess['OnlyGrup']);if(!isAdmins&&!isWann)return reply('Only\x20Admins');function _0x5817(_0x13a9f6,_0x232f3e){var _0x30ecab=_0x30ec();return _0x5817=function(_0x5817b3,_0x191d57){_0x5817b3=_0x5817b3-0xce;var _0x2aa28a=_0x30ecab[_0x5817b3];return _0x2aa28a;},_0x5817(_0x13a9f6,_0x232f3e);}if(!isSetProses(from,set_proses))return reply(_0x5dcde1(0xd3));addCountCmd('#'+command[_0x5dcde1(0xce)](0x1),sender,_cmd),removeSetProses(from,set_proses),reply('Sukses\x20delete\x20set\x20proses');
                break
            case prefix+'setd':
                function _0x3f66(_0x5f11de,_0x2d4aeb){var _0x536486=_0x5364();return _0x3f66=function(_0x3f6651,_0x1a7b0f){_0x3f6651=_0x3f6651-0x164;var _0x5c1158=_0x536486[_0x3f6651];return _0x5c1158;},_0x3f66(_0x5f11de,_0x2d4aeb);}var _0x12859f=_0x3f66;(function(_0x47b1cb,_0x31c2c9){var _0x2f9b7b=_0x3f66,_0x2ec100=_0x47b1cb();while(!![]){try{var _0x146e0d=parseInt(_0x2f9b7b(0x16b))/0x1*(-parseInt(_0x2f9b7b(0x16f))/0x2)+-parseInt(_0x2f9b7b(0x169))/0x3*(-parseInt(_0x2f9b7b(0x167))/0x4)+-parseInt(_0x2f9b7b(0x166))/0x5*(-parseInt(_0x2f9b7b(0x168))/0x6)+parseInt(_0x2f9b7b(0x16d))/0x7*(-parseInt(_0x2f9b7b(0x16e))/0x8)+parseInt(_0x2f9b7b(0x165))/0x9*(-parseInt(_0x2f9b7b(0x164))/0xa)+-parseInt(_0x2f9b7b(0x171))/0xb*(-parseInt(_0x2f9b7b(0x16a))/0xc)+parseInt(_0x2f9b7b(0x172))/0xd;if(_0x146e0d===_0x31c2c9)break;else _0x2ec100['push'](_0x2ec100['shift']());}catch(_0x37ad30){_0x2ec100['push'](_0x2ec100['shift']());}}}(_0x5364,0x80090));if(!m[_0x12859f(0x170)])return reply(mess['group']);if(!m[_0x12859f(0x170)])return reply(mess[_0x12859f(0x174)]);if(!isAdmins&&!isWann)return reply(_0x12859f(0x173));if(!q)return reply(_0x12859f(0x175)+command+_0x12859f(0x16c)+command+_0x12859f(0x178));function _0x5364(){var _0x168f6e=['isGroup','11YGUtEL','17450069FcSLFA','Only\x20Admins','OnlyGrup','Gunakan\x20dengan\x20cara\x20','Successfully\x20set\x20done!','slice','\x20pesanan\x20pesan,\x20tag\x20orang\x20nama','10VyqrtG','3028887SekcVh','5ebaeFi','20uaDoMK','2694138rFVyTh','238053TjRfBy','5574156ZxiYVF','230pNVhqn','\x20*teks_d*\x0a\x0a_Contoh_\x0a\x0a','2280131qWXKHz','24HMGALU','7082bKnqSP'];_0x5364=function(){return _0x168f6e;};return _0x5364();}if(isSetDone(from,set_done))return reply('Set\x20done\x20already\x20active');addCountCmd('#'+command[_0x12859f(0x177)](0x1),sender,_cmd),addSetDone(q,from,set_done),reply(_0x12859f(0x176));
                break
            case prefix+'changedone': case prefix+'changed':
                var _0x48ecf6=_0x1505;function _0x1505(_0xd3c105,_0x105894){var _0x17809b=_0x1780();return _0x1505=function(_0x150598,_0x412480){_0x150598=_0x150598-0x68;var _0x4fba24=_0x17809b[_0x150598];return _0x4fba24;},_0x1505(_0xd3c105,_0x105894);}(function(_0x2a82e5,_0x34f27e){var _0x37d8ab=_0x1505,_0x2d8552=_0x2a82e5();while(!![]){try{var _0x355bf9=parseInt(_0x37d8ab(0x77))/0x1+-parseInt(_0x37d8ab(0x6a))/0x2+-parseInt(_0x37d8ab(0x69))/0x3+parseInt(_0x37d8ab(0x75))/0x4*(parseInt(_0x37d8ab(0x74))/0x5)+parseInt(_0x37d8ab(0x70))/0x6*(-parseInt(_0x37d8ab(0x76))/0x7)+parseInt(_0x37d8ab(0x78))/0x8+parseInt(_0x37d8ab(0x6f))/0x9;if(_0x355bf9===_0x34f27e)break;else _0x2d8552['push'](_0x2d8552['shift']());}catch(_0x12a8aa){_0x2d8552['push'](_0x2d8552['shift']());}}}(_0x1780,0x96eb4));if(!m['isGroup'])return reply(mess[_0x48ecf6(0x68)]);if(!m['isGroup'])return reply(mess[_0x48ecf6(0x6c)]);if(!isAdmins&&!isWann)return reply(_0x48ecf6(0x6d));if(!q)return reply(_0x48ecf6(0x73)+command+_0x48ecf6(0x6e)+command+_0x48ecf6(0x6b));addCountCmd('#'+command[_0x48ecf6(0x71)](0x1),sender,_cmd);isSetDone(from,set_done)?(changeSetDone(q,from,set_done),reply('Sukses\x20change\x20set\x20done\x20teks!')):(addSetDone(q,from,set_done),reply(_0x48ecf6(0x72)));function _0x1780(){var _0x48b014=['OnlyGrup','Only\x20Admins','\x20*teks_d*\x0a\x0a_Contoh_\x0a\x0a','10112517WwiQbi','1239666zfdnIm','slice','Sukses\x20change\x20set\x20done\x20teks!','Gunakan\x20dengan\x20cara\x20','190FqZXYr','208FZmQQk','14xscbkW','450809XcyjMV','2053232aznDrW','group','2014395GqyJeP','260402neSBRp','\x20pesanan\x20pesan,\x20tag\x20orang\x20nama'];_0x1780=function(){return _0x48b014;};return _0x1780();}
                break
            case prefix+'delsetdone': case prefix+'delsetd':
                var _0x21ec73=_0x55d4;(function(_0x376f79,_0x5c0cb6){var _0x467d6d=_0x55d4,_0xd339b8=_0x376f79();while(!![]){try{var _0xd4e591=-parseInt(_0x467d6d(0x195))/0x1+-parseInt(_0x467d6d(0x198))/0x2*(parseInt(_0x467d6d(0x1a3))/0x3)+parseInt(_0x467d6d(0x196))/0x4*(parseInt(_0x467d6d(0x19d))/0x5)+-parseInt(_0x467d6d(0x19a))/0x6+parseInt(_0x467d6d(0x19c))/0x7+-parseInt(_0x467d6d(0x1a0))/0x8*(parseInt(_0x467d6d(0x1a1))/0x9)+-parseInt(_0x467d6d(0x1a2))/0xa*(-parseInt(_0x467d6d(0x19f))/0xb);if(_0xd4e591===_0x5c0cb6)break;else _0xd339b8['push'](_0xd339b8['shift']());}catch(_0x254763){_0xd339b8['push'](_0xd339b8['shift']());}}}(_0xf543,0x7bb64));function _0x55d4(_0xd0e6a7,_0x1ca638){var _0xf5431c=_0xf543();return _0x55d4=function(_0x55d428,_0x1477aa){_0x55d428=_0x55d428-0x193;var _0x3eb5ad=_0xf5431c[_0x55d428];return _0x3eb5ad;},_0x55d4(_0xd0e6a7,_0x1ca638);}if(!m['isGroup'])return reply(mess[_0x21ec73(0x19b)]);if(!m[_0x21ec73(0x197)])return reply(mess[_0x21ec73(0x194)]);function _0xf543(){var _0x2958fc=['5400570pUiqhQ','1893WkRSRM','Only\x20Admins','OnlyGrup','553264SmklQH','3116548qCTngd','isGroup','2560dYCjma','Sukses\x20delete\x20set\x20done','2821230iFvNXJ','group','4489779DxjyST','5kmMhGc','slice','33Nrrzpq','432512ySZvxB','117cZFcXK'];_0xf543=function(){return _0x2958fc;};return _0xf543();}if(!isAdmins&&!isWann)return reply(_0x21ec73(0x193));if(!isSetDone(from,set_done))return reply('Belum\x20ada\x20set\x20done\x20di\x20sini..');addCountCmd('#'+command[_0x21ec73(0x19e)](0x1),sender,_cmd),removeSetDone(from,set_done),reply(_0x21ec73(0x199));
            case prefix+'react':
                      if (!isWann) return reply('wann Aja')
                      if (!isQuotedMsg) return reply(`Balas pesannya`)
                      if (args.length < 2) return reply(`Masukkan 1 emoji`)
                      if (!isEmoji(args[1])) return reply(`Itu bukan emoji!`)
                      if (isEmoji(args[1]).length > 1) return reply(`Satu aja emojinya`)
                      var reactMsg = { reactionMessage: {
                          key: {
                            remoteJid: m.chat,
                            fromMe: m.quotedMsg.fromMe,
                            id: m.quotedMsg.id,
                            participant: m.quotedMsg.sender
                          },
                          text: args[1]
                        }
                      }
                      wann.sendMessageFromContent(m.chat, reactMsg)
                      break
          case prefix+'addjudultugas':
            const _0x5a1285=_0x4514;(function(_0x26ddb0,_0x5776c6){const _0x1637d9=_0x4514,_0x29c0ef=_0x26ddb0();while(!![]){try{const _0x27ae44=-parseInt(_0x1637d9(0x107))/0x1+-parseInt(_0x1637d9(0x10b))/0x2*(-parseInt(_0x1637d9(0x103))/0x3)+parseInt(_0x1637d9(0x109))/0x4*(-parseInt(_0x1637d9(0x104))/0x5)+-parseInt(_0x1637d9(0x105))/0x6+-parseInt(_0x1637d9(0xfd))/0x7+parseInt(_0x1637d9(0x108))/0x8+parseInt(_0x1637d9(0x102))/0x9*(parseInt(_0x1637d9(0x101))/0xa);if(_0x27ae44===_0x5776c6)break;else _0x29c0ef['push'](_0x29c0ef['shift']());}catch(_0x1627b6){_0x29c0ef['push'](_0x29c0ef['shift']());}}}(_0x290a,0xcadc0));function _0x4514(_0x50e758,_0x253c74){const _0x290a13=_0x290a();return _0x4514=function(_0x4514a5,_0x3222a8){_0x4514a5=_0x4514a5-0xfc;let _0x189c46=_0x290a13[_0x4514a5];return _0x189c46;},_0x4514(_0x50e758,_0x253c74);}if(args[_0x5a1285(0x10c)]===0x0)return reply('Buat\x20list\x20dengan\x20judul\x0a\x0aContoh\x20:\x20'+prefix+'addjudultugas\x20|\x20<judul\x20tugas>');function _0x290a(){const _0x20590d=['3274anEOeG','length','addtugas\x20|\x20<nama\x20tugas>','9221261eZoGyb','Mohon\x20untuk\x20reset\x20tugas\x20terlebih\x20dahulu\x20dengan\x20command\x20','split','Tugas\x20sudah\x20ditambahkan,\x20untuk\x20menambahkan\x20tugas\x20menggunakan\x20command\x20','23434090iJIaGw','9fzeYGA','870gBfGvA','580FzUdWL','868890hdltyF','push','23359GKjXUw','621520jLlfKu','19980wgTgZM','resettugas'];_0x290a=function(){return _0x20590d;};return _0x290a();}if(judullist[_0x5a1285(0x10c)]>0x0)return reply(_0x5a1285(0xfe)+prefix+_0x5a1285(0x10a));const isijudullist=q[_0x5a1285(0xff)]('|')[0x1],judulin=judullist[_0x5a1285(0x106)](isijudullist);if(judulin)return reply(_0x5a1285(0x100)+prefix+_0x5a1285(0xfc));
          break;
        
        case prefix+'addtugas':
            const _0x4c26b2=_0x14be;function _0x12c4(){const _0x2e16a5=['5qrGmqT','addjudultugas','1222905IaVCsN','6UMAHwD','9682806pajXtA','Tambah\x20daftar\x20Tugas\x20dengan\x20isi\x0a\x0aContoh\x20:\x20','215684jQmiRC','addtugas\x20|\x20<nama\x20tugas>','8zjxKnU','split','12105522TyLWKb','572375PUhklm','Mohon\x20untuk\x20membuat\x20judul\x20Tugas\x20terlebih\x20dahulu\x20dengan\x20command\x20','push','502080mJxXgh','length','1999724uMiVEd'];_0x12c4=function(){return _0x2e16a5;};return _0x12c4();}(function(_0xb0458d,_0x48d2a5){const _0x20cbd0=_0x14be,_0x3effa6=_0xb0458d();while(!![]){try{const _0x1f0bf1=-parseInt(_0x20cbd0(0xe7))/0x1+parseInt(_0x20cbd0(0xf0))/0x2*(parseInt(_0x20cbd0(0xef))/0x3)+-parseInt(_0x20cbd0(0xec))/0x4*(-parseInt(_0x20cbd0(0xed))/0x5)+-parseInt(_0x20cbd0(0xf1))/0x6+parseInt(_0x20cbd0(0xf3))/0x7*(parseInt(_0x20cbd0(0xf5))/0x8)+parseInt(_0x20cbd0(0xe6))/0x9+-parseInt(_0x20cbd0(0xea))/0xa;if(_0x1f0bf1===_0x48d2a5)break;else _0x3effa6['push'](_0x3effa6['shift']());}catch(_0x1bfc3d){_0x3effa6['push'](_0x3effa6['shift']());}}}(_0x12c4,0xd2872));if(args[_0x4c26b2(0xeb)]===0x0)return reply(_0x4c26b2(0xf2)+prefix+_0x4c26b2(0xf4));if(judullist[_0x4c26b2(0xeb)]===0x0)return reply(_0x4c26b2(0xe8)+prefix+_0x4c26b2(0xee));function _0x14be(_0x292a55,_0x2127b8){const _0x12c467=_0x12c4();return _0x14be=function(_0x14be68,_0x887fed){_0x14be68=_0x14be68-0xe5;let _0x5d0f5b=_0x12c467[_0x14be68];return _0x5d0f5b;},_0x14be(_0x292a55,_0x2127b8);}const isilist=q[_0x4c26b2(0xe5)]('|')[0x1],isiin=daftarlist[_0x4c26b2(0xe9)](isilist);if(isiin){const isidaftar=ngelistisi();reply(isidaftar);}
          break;
        
        case prefix+'hapustugas':
            const _0x2c2bf3=_0x2f12;(function(_0x23e451,_0x15c4dc){const _0x5d8a87=_0x2f12,_0x3c886b=_0x23e451();while(!![]){try{const _0xbf3401=-parseInt(_0x5d8a87(0x89))/0x1*(-parseInt(_0x5d8a87(0x7f))/0x2)+-parseInt(_0x5d8a87(0x81))/0x3+-parseInt(_0x5d8a87(0x7d))/0x4*(parseInt(_0x5d8a87(0x7b))/0x5)+parseInt(_0x5d8a87(0x82))/0x6*(parseInt(_0x5d8a87(0x7c))/0x7)+parseInt(_0x5d8a87(0x7a))/0x8*(-parseInt(_0x5d8a87(0x79))/0x9)+parseInt(_0x5d8a87(0x76))/0xa+parseInt(_0x5d8a87(0x80))/0xb*(parseInt(_0x5d8a87(0x86))/0xc);if(_0xbf3401===_0x15c4dc)break;else _0x3c886b['push'](_0x3c886b['shift']());}catch(_0x365c2b){_0x3c886b['push'](_0x3c886b['shift']());}}}(_0x27be,0x3c610));if(args[_0x2c2bf3(0x88)]===0x0)return reply(_0x2c2bf3(0x87)+prefix+_0x2c2bf3(0x78));if(daftarlist[_0x2c2bf3(0x88)]===0x0)return reply('Tambah\x20daftar\x20tugas\x20dengan\x20isi\x0a\x0aContoh\x20:\x20'+prefix+_0x2c2bf3(0x84));if(judullist[_0x2c2bf3(0x88)]===0x0)return reply(_0x2c2bf3(0x77)+prefix+_0x2c2bf3(0x85));var i=args[0x1];function _0x27be(){const _0x20a85e=['218622faRWBk','\x20telah\x20dihapus\x20!','addtugas\x20|\x20<nama\x20tugas>','addjudultugas','2033976cjeAnU','Hapus\x20item\x20pada\x20List\x20dengan\x20nomor\x20item\x0a\x0aContoh\x20:\x20','length','23kgotGG','3875930wbjcLs','Mohon\x20untuk\x20membuat\x20judul\x20tugas\x20terlebih\x20dahulu\x20dengan\x20command\x20','hapustugas\x201','6003VheDqV','5128KGKQvd','175ZXnEDY','28xUARKc','6904srlNvl','Item\x20dengan\x20nomor\x20','12374eoIsBZ','22EgZQTl','838107RrgxOV'];_0x27be=function(){return _0x20a85e;};return _0x27be();}i--;const hapusinlist=daftarlist['splice'](i,0x1);function _0x2f12(_0x87663f,_0x13601a){const _0x27becf=_0x27be();return _0x2f12=function(_0x2f1244,_0x5869a3){_0x2f1244=_0x2f1244-0x76;let _0x510954=_0x27becf[_0x2f1244];return _0x510954;},_0x2f12(_0x87663f,_0x13601a);}if(hapusinlist){reply(_0x2c2bf3(0x7e)+args+_0x2c2bf3(0x83));const isidaftar=ngelistisi();reply(isidaftar);}
          break;

        case prefix+'listtugas':
            const _0xa2a1d1=_0x1f70;function _0x1d3a(){const _0x275988=['addtugas\x20|\x20<ini\x20tugas>','10mSDtsR','6805TmiApD','338221fSmMJq','5tFoUde','62qJbacD','2752211aOtwed','21vPEbSk','18567GiwLru','Mohon\x20untuk\x20membuat\x20judul\x20tugas\x20terlebih\x20dahulu\x20dengan\x20command\x20','43080daBDIk','108FolxAH','280CVbVpS','length','648216ybUoAo','addjudultugas','239886rPMVnA'];_0x1d3a=function(){return _0x275988;};return _0x1d3a();}(function(_0x51f38b,_0x1ea734){const _0x297d04=_0x1f70,_0xbd695e=_0x51f38b();while(!![]){try{const _0x8a93b8=-parseInt(_0x297d04(0xb4))/0x1*(parseInt(_0x297d04(0xb7))/0x2)+parseInt(_0x297d04(0xbc))/0x3+parseInt(_0x297d04(0xc0))/0x4*(-parseInt(_0x297d04(0xb6))/0x5)+parseInt(_0x297d04(0xc2))/0x6*(parseInt(_0x297d04(0xb9))/0x7)+-parseInt(_0x297d04(0xbe))/0x8*(parseInt(_0x297d04(0xba))/0x9)+-parseInt(_0x297d04(0xc4))/0xa*(-parseInt(_0x297d04(0xb8))/0xb)+-parseInt(_0x297d04(0xbd))/0xc*(-parseInt(_0x297d04(0xb5))/0xd);if(_0x8a93b8===_0x1ea734)break;else _0xbd695e['push'](_0xbd695e['shift']());}catch(_0x260a14){_0xbd695e['push'](_0xbd695e['shift']());}}}(_0x1d3a,0x2a583));if(daftarlist[_0xa2a1d1(0xbf)]===0x0)return reply('Tambah\x20daftar\x20tugas\x20dengan\x20isi\x0a\x0aContoh\x20:\x20'+prefix+_0xa2a1d1(0xc3));if(judullist[_0xa2a1d1(0xbf)]===0x0)return reply(_0xa2a1d1(0xbb)+prefix+_0xa2a1d1(0xc1));const isidaftar=ngelistisi();function _0x1f70(_0x380323,_0xba6a3c){const _0x1d3a17=_0x1d3a();return _0x1f70=function(_0x1f70ab,_0x1b9b08){_0x1f70ab=_0x1f70ab-0xb4;let _0x19e8b6=_0x1d3a17[_0x1f70ab];return _0x19e8b6;},_0x1f70(_0x380323,_0xba6a3c);}reply(isidaftar);
          break;

        case prefix+'resettugas':
            var _0xcf6f9f=_0x19b2;function _0x2b79(){var _0xcd9929=['tugas\x20sudah\x20di\x20reset\x20!','66BbGLKu','781ARAJwJ','4699536XIOwsi','pop','14byylaQ','length','24268BPYEzV','732880RMEtmI','501jpxdev','2502927XeuOUP','225220KiTktu','899292tBKpSE','39muzeYU','178774XhuWhw','3xIpkwS'];_0x2b79=function(){return _0xcd9929;};return _0x2b79();}function _0x19b2(_0x3e8ab9,_0x1a680e){var _0x2b79fc=_0x2b79();return _0x19b2=function(_0x19b224,_0x19b8f){_0x19b224=_0x19b224-0xcc;var _0x57280e=_0x2b79fc[_0x19b224];return _0x57280e;},_0x19b2(_0x3e8ab9,_0x1a680e);}(function(_0xf6136b,_0x39005f){var _0x5d32a7=_0x19b2,_0x34cde1=_0xf6136b();while(!![]){try{var _0x5b963d=-parseInt(_0x5d32a7(0xcf))/0x1*(-parseInt(_0x5d32a7(0xce))/0x2)+-parseInt(_0x5d32a7(0xd9))/0x3*(parseInt(_0x5d32a7(0xd7))/0x4)+-parseInt(_0x5d32a7(0xd8))/0x5*(parseInt(_0x5d32a7(0xd1))/0x6)+-parseInt(_0x5d32a7(0xd5))/0x7*(-parseInt(_0x5d32a7(0xd3))/0x8)+parseInt(_0x5d32a7(0xda))/0x9+parseInt(_0x5d32a7(0xdb))/0xa*(parseInt(_0x5d32a7(0xd2))/0xb)+parseInt(_0x5d32a7(0xcc))/0xc*(parseInt(_0x5d32a7(0xcd))/0xd);if(_0x5b963d===_0x39005f)break;else _0x34cde1['push'](_0x34cde1['shift']());}catch(_0xc3b0c6){_0x34cde1['push'](_0x34cde1['shift']());}}}(_0x2b79,0xe07d4));while(daftarlist[_0xcf6f9f(0xd6)]){daftarlist[_0xcf6f9f(0xd4)]();}while(judullist[_0xcf6f9f(0xd6)]){judullist[_0xcf6f9f(0xd4)]();}if(daftarlist[_0xcf6f9f(0xd6)]===0x0&&judullist['length']===0x0)return reply(_0xcf6f9f(0xd0));
          break;
          case prefix+'dashboard':
	                    var _0x5e4e53=_0x5728;(function(_0x3c83ac,_0x56b0af){var _0x57d5be=_0x5728,_0x40fe0e=_0x3c83ac();while(!![]){try{var _0x11ca8e=parseInt(_0x57d5be(0x19e))/0x1+-parseInt(_0x57d5be(0x198))/0x2*(-parseInt(_0x57d5be(0x1a2))/0x3)+parseInt(_0x57d5be(0x192))/0x4*(-parseInt(_0x57d5be(0x19a))/0x5)+-parseInt(_0x57d5be(0x1a3))/0x6+-parseInt(_0x57d5be(0x194))/0x7+-parseInt(_0x57d5be(0x191))/0x8+-parseInt(_0x57d5be(0x1a1))/0x9*(-parseInt(_0x57d5be(0x19c))/0xa);if(_0x11ca8e===_0x56b0af)break;else _0x40fe0e['push'](_0x40fe0e['shift']());}catch(_0x30baf4){_0x40fe0e['push'](_0x40fe0e['shift']());}}}(_0x2623,0xeaea9),addCountCmd(_0x5e4e53(0x19f),sender,_cmd));var posi=await getPosiCmdUser(sender,_cmdUser);function _0x2623(){var _0x2878e5=['1167268wbuOLH','#dashboard','\x0a*Most\x20Command\x20User*\x0a','9QLVkbH','2634GJFqzg','10565418qxKztT','7609504GMcbRm','4QxizWs','count','11920328UoQtrN','\x20:\x20','length','nama','1108yfhzcT','*Most\x20Command\x20Global*\x0a','463055fvMfdL','\x0a•\x20USER\x20:\x20','38161430kmXlAj','sort'];_0x2623=function(){return _0x2878e5;};return _0x2623();}_cmdUser[posi]['db'][_0x5e4e53(0x19d)]((_0x27dc48,_0x429a48)=>_0x27dc48[_0x5e4e53(0x193)]<_0x429a48[_0x5e4e53(0x193)]?0x1:-0x1),_cmd[_0x5e4e53(0x19d)]((_0x1c12e3,_0x341758)=>_0x1c12e3['count']<_0x341758['count']?0x1:-0x1);var posi=await getPosiCmdUser(sender,_cmdUser),jumlahCmd=_cmd['length'];if(jumlahCmd>0xa)jumlahCmd=0xa;var jumlah=_cmdUser[posi]['db'][_0x5e4e53(0x196)];if(jumlah>0x5)jumlah=0x5;var totalUser=0x0;for(let x of _cmdUser[posi]['db']){totalUser=totalUser+x['count'];}var total=0x0;for(let o of _cmd){total=total+o['count'];}var teks='*FSS\x20BOT\x20DASHBOARD*\x0a\x0a*HIT*\x0a•\x20GLOBAL\x20:\x20'+total+_0x5e4e53(0x19b)+totalUser+'\x0a\x0a';teks+=_0x5e4e53(0x199);for(let u=0x0;u<jumlahCmd;u++){teks+='•\x20'+_cmd[u]['nama']+_0x5e4e53(0x195)+_cmd[u]['count']+'\x0a';}function _0x5728(_0x212f11,_0x462085){var _0x26236c=_0x2623();return _0x5728=function(_0x5728c4,_0x565aea){_0x5728c4=_0x5728c4-0x191;var _0x5312eb=_0x26236c[_0x5728c4];return _0x5312eb;},_0x5728(_0x212f11,_0x462085);}teks+=_0x5e4e53(0x1a0);for(let i=0x0;i<jumlah;i++){teks+='•\x20'+_cmdUser[posi]['db'][i][_0x5e4e53(0x197)]+_0x5e4e53(0x195)+_cmdUser[posi]['db'][i][_0x5e4e53(0x193)]+'\x0a';}reply(teks);
                            break
//================================>ADD FITUR BY Tetap Berkarya<================================//

default:
	if(isCmd) {
		if (args[0].length > 1) {
			var detect = await Dym(command.split(prefix)[1], listCmd)
			if (detect !== null) {
				reply(`Mungkin yang anda maksud adalah ${prefix + detect} abaikan jika salah!`)
			}
			if (detect === null) {
				reply(`Maaf kak fitur ${command} tidak terdaftar di list ${prefix+'help'}`)
			}
		} else {
			var detect2 = await Dym(args[1], listCmd)
			if (detect2 !== null) {
				reply(`Pastikan antara simbol/prefix jangan dipisah, contoh ${prefix+args[1]}`)
			}
		}
	}
	if (budy.startsWith('=>')) {
		function Return(sul) {
			sat = JSON.stringify(sul, null, 2)
			bang = util.format(sat)
			if (sat == undefined) {
				bang = util.format(sul)
			}
			return m.reply(bang)
		}
		try {
			reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
		} catch (e) {
			m.reply(String(e))
		}
	}

	if (budy.startsWith('>')) {
		try {
			let evaled = await eval(budy.slice(2))
			if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
			await m.reply(evaled)
		} catch (err) {
			await m.reply(String(err))
		}
	}
	if (budy.startsWith('$')) {
		exec(budy.slice(2), (err, stdout) => {
			if(err) return m.reply(err)
			if (stdout) return m.reply(stdout)
		})
	}
	if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
		this.anonymous = this.anonymous ? this.anonymous : {}
		let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
		if (room) {
			if (/^.*(next|leave|start)/.test(m.text)) return
			if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
			let other = [room.a, room.b].find(user => user !== m.sender)
			m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
				contextInfo: {
					...m.msg.contextInfo,
					forwardingScore: 0,
					isForwarded: true,
					participant: other
				}
			} : {})
		}
		return !0
	}
	if (isCmd && budy.toLowerCase() != undefined) {
		if (m.chat.endsWith('broadcast')) return
		if (m.isBaileys) return
		let msgs = global.db.database
		if (!(budy.toLowerCase() in msgs)) return
		wann.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
	}
	}
	} catch (err) {
	wann.sendMessage(`6285870824804@s.whatsapp.net`, {text: `*Bug Report From:* ${util.format(err)}` })
	}
}