import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

// Global variables
global.owner = [
  ['94765714446', '𝕯𝖆𝖘𝖚𝖓 𝕯𝖚𝖑𝖆𝖗𝖆𝖐𝖆', true], 
  ['94757537121', '𝕯𝖆𝖘𝖚𝖓 𝕯𝖚𝖑𝖆𝖗𝖆𝖐𝖆', false], 
  ['94750393482', '𝕴𝖒𝖊𝖘𝖍𝖆 𝕹𝖊𝖙𝖍𝖒𝖎𝖓𝖎', false]
] 

global.mods = ['94765714446','94757537121', '94750393482', '94761613353'] 
global.prems = ['923184070915', '94789481495', '918360234087', '233268374753']
global.allowed = ['infinite']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = global.keysZens[Math.floor(global.keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = global.keysxteammm[Math.floor(global.keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = global.keysneoxrrr[Math.floor(global.keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = {
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { 
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': global.keysneoxr,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': global.keysxxx, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝚉𝙴𝚁𝙾-𝚇𝙼𝙳'
global.premium = 'true'
global.packname = '𝚉𝙴𝚁𝙾-𝚇𝙼𝙳' 
global.author = '𝕯𝖆𝖘𝖚𝖓 𝕯𝖚𝖑𝖆𝖗𝖆𝖐𝖆' 
global.menuvid = 'https://files.catbox.moe/kg6guw.jpg'
global.igfg = '▢✓ Follow US \n https://www.facebook.com/dasundularaka\n' 
global.dygp = 'https://chat.whatsapp.com/BfH0KLkICn2BjmGFMRcGMW'
global.fgsc = 'https://github.com/dasundularaka/XLICON-V2-MD' 
global.fgyt = 'https://youtube.com/@s4salmanyt'
global.fgpyp = 'https://youtube.com/@s4salmanyt'
global.fglog = 'https://files.catbox.moe/kg6guw.jpg' 
global.thumb = 'https://files.catbox.moe/kg6guw.jpg'

global.wait = '*🕣 _𝚉𝙴𝚁𝙾-𝚇𝙼𝙳 IS LOADING..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
