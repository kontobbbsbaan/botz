let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'DONATE BOT'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi 〕
├ Pulsa : ${pulsa}
└────
Berapapun donasi kalian akan sangat berarti 👍

Terimakasih yang sudah mendonasikan untuk bot

Contact person Owner:
wa.me/${numberowner} (Owner)

*donasi via follow Github juga boleh*`
  conn.sendButtonImg(m.chat, fla + teks, anu, web, 'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
