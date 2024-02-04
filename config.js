const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94706345938"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94706345938' 
global.devs = '94706345938';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.redd.it/cyberpunk-samurai-4k-3840x2160-by-a-i-v0-21as1xk1kzda1.jpg?s=6cbf3bf99feb933a7158705e1cefdec4046322c0'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0pYRExnNzZpcHdFUWZhVWY2UmpRbmhpNmpCL3hGZU56R2RUVWNUTENVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblBOcEoxY0FIOUtCL281MmpDcEZFTDVKL1MzVGNjRWFnNG1TN1h6TXZscz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTjVZTDMrR0FtcXp6eVVibXR6TFFtL1NHbGF2VFlYU3V5ZU5KZnNRRkdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5VVpCVlJxdEFBNUxFQWQ4QTZLd2NVZnhsQVdiOCtCRGk3WXNwSUloTlRFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCSXZqNGN1VmxxUlF4RUdYQTNRVWx1ZTgwR1k3ZmpDOHFmOXRWbnhhWDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBhV0k1TlZLQUx2YVFrdTFnRGFYVVR4am1scGVBT250T0Ftd2swL2MwbDA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RjU2TlZRVEh3UG12ck9pR3B6ZXA1TU50SHkyN0NqT3ZpNGRDcUtub1FQdGc5Y2ZCYVlXWGdnSGtxeWIxbHdtZzZpTWNDbFU5aHhwZjBrWU1uUjNEZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjc0LCJhZHZTZWNyZXRLZXkiOiJzOXdwMXZnU2xLc0RiZGljdmxqRHluNVYzdmcwNnh5Tm9mYWxiMHgvaGJRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDQ2ZYZzhKYVRwaTFMdFJrV1lKXzNRIiwicGhvbmVJZCI6IjY3YTExMGI0LWE0NDEtNDZjMi1iZTA5LTJkYmI5NWY0Yjk2OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUFdpVGVRcGhLTEpGTmZ3NktmZ1VlRTNyejQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFlc081dmdxalVXT1pzN2dOK0h4aG5jbE5hUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wycDhQY0dFUERzL0swR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkgxOHNsR3BTOTJudkxBVE9vaXJ2TEk5VjNpNFE0cmdmRjhBc3ZCdzgvaUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhmNkIwVDdVUkZ2ZkljNGg2NWh6cVNYb3ZFTDVzczgxbkQ0ZnlzVFRScFhnbHI4TVpXNXZNV2hMYUs5bFZoZk5paXFzRGFFT05FaUdoMjRoWDVxVkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2OWtQdWl5YUVRM1RlYkpMbUZNUzV0UFA1MnRFUjlLZFpGMEFMZzk2SWkxaEZHbkRGRitrUENJWnNqZkZMSDVpZThmdVN4SG53Qlk5cWEzb0EvaXJCZz09In0sIm1lIjp7ImlkIjoiOTQ3MDYzNDU5Mzg6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUXVlZW4tQW55YV9WMiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNjM0NTkzODoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSOWZMSlJxVXZkcDd5d0V6cUlxN3l5UFZkNHVFT0s0SHhmQUxMd2NQUDRoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA3MDMwMTMxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVAwViJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@CYBER KING',
  packname:  process.env.PACK_NAME || 'NT CYBER KING',
   
  botname:   process.env.BOT_NAME === undefined ? "CYBER KING" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'NT CYBER KING ' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbad word' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
