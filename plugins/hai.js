let handler = async (m, { conn }) => {
let caption = `*HALLO KAK SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ KianBotz`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(Hallo|Hay|Bot|Haibot|Hai|Hay|menu)/i
handler.command = new RegExp
module.exports = handler
