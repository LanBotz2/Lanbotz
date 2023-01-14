const fs = require('fs')
const chalk = require('chalk')

//api
global.xteam = 'apivproject'
global.lolhuman = 'yourkey'

//stick
global.author = 'Follow Instagram\n  @lanaygy_08  '
global.packname = 'ʟᴀɴʙᴏᴛᴢ\n'

//Link
global.gc = 'https://bit.ly/3KMlmv2'
global.linkyt = 'https://www.youtube.com/@LanzxModderr'
global.linkgc = 'https://chat.whatsapp.com/CT68t6RmDES9hw4c6LH39W'

// Othr
global.owner = ['6288298582710']
global.premium = ['6288298582710']
global.ownername = 'ʟᴀɴᴢx'
global.botname = 'ʟᴀɴʙᴏᴛᴢ'
global.wm = '© ʟᴀɴᴢx'
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ʟᴀɴᴢx ッ'
global.sessionName = 'lanbotz'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '∘'
global.mess = {
    success: 'Berhasil',
    eror: 'Error',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//gambar
global.thumb = 'https://telegra.ph/file/cebf5f985c77a722b14fa.mp4'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
