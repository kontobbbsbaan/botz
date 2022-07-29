let handler = async (m, { conn }) => {
let caption = `*HEMM*`

conn.sendButton( m.chat, caption, `©️ KianBotz`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
