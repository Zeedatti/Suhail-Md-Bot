const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348100009600";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_13_16_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODksXG4gICAgICAgIDYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDExNixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM1LFxuICAgICAgICA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgNSxcbiAgICAgICAgNyxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxLFxuICAgICAgICA5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTExLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYzBmSGxhTEp0RkFHR3NZUVFxblRFdlFIbStZRkx1K1I3VTBhMG5CZ1BMdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZjhzdVRuUDhUQ0M0blp1TFBsbDF6QVwiLFxuICBcInBob25lSWRcIjogXCJmNWU3NmEzZi1iODE5LTQzYWItOTIzMy05OWRjNTAyNWNlZThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMTEsXG4gICAgICAxODAsXG4gICAgICAxODUsXG4gICAgICA4MCxcbiAgICAgIDE1OCxcbiAgICAgIDIyMCxcbiAgICAgIDQxLFxuICAgICAgMjQ4LFxuICAgICAgMTk5LFxuICAgICAgMTMwLFxuICAgICAgMjgsXG4gICAgICAxOTEsXG4gICAgICAxMjMsXG4gICAgICAyMzYsXG4gICAgICA3MixcbiAgICAgIDIwMyxcbiAgICAgIDE2NCxcbiAgICAgIDE0LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICA4OSxcbiAgICAgIDIzOSxcbiAgICAgIDU1LFxuICAgICAgMTM2LFxuICAgICAgNzIsXG4gICAgICAzNyxcbiAgICAgIDc0LFxuICAgICAgMTA2LFxuICAgICAgMTAwLFxuICAgICAgMTk3LFxuICAgICAgMjM2LFxuICAgICAgMTA1LFxuICAgICAgMjM5LFxuICAgICAgMjQ3LFxuICAgICAgMjIzLFxuICAgICAgNDAsXG4gICAgICA1NCxcbiAgICAgIDIxLFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1dWSk1KUDFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDAwMDk2MDA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInphaW5hYmRhdHRpMDJcIixcbiAgICBcImxpZFwiOiBcIjIwODM3ODk3ODY3MjgxMzo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xmNjRwSUdFTGpKNnJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM1Z1TW4wQzVNVlJHR01kSjhjbkxSdlp4bUhVZG5BQmg5dysra0dtL2FtST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1SXo2a3FkbGE3SmZadVJiNWxTREtjNmlWRGtxZ1dhVld1bGc4UUVKM3FIN0hNUEgwN1pudHFlSWZ4L2FSWG8yTnNsb1d4Q3dSQjhXUks4VHJ6TUZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1VndMWTJFS2lXMHhyUGhOSW9xR3ZkNkdiRWgyUlVNTE5kV1hVbGxOTVVrOVltTkpzZkJiNUtxS3pvdzBHaXVPU0RUSE1OT3FrYXdZWWVRYlpiYzdEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAwMDA5NjAwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3NzAyMjA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnFLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOcUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsbW9SZnYyRndQakowZXUySThrY0FVLzgzZVhBZXNWVzZUV0M0RlhBSGgwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDk5ODI3NzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzcwMjIwNjQyNVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
