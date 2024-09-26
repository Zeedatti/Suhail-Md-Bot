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

  sessionName:process.env.SESSION_ID || "SUHAIL_10_41_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTk0LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQyLFxuICAgICAgICA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgODQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM1LFxuICAgICAgICA4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg0LFxuICAgICAgICA2MSxcbiAgICAgICAgNjksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXVGR3blBxSjU4TVpOQjVvYVY4b3ppSWo1NlhVRkhRMzVLOXl6blFTRmlFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGNm16ak0wblRhNkk1NlZQRGsyenlnXCIsXG4gIFwicGhvbmVJZFwiOiBcImNkZTYxZTAyLWU5MzEtNDM1ZS1hNjg2LTgyYWI1YWIzZDQ4NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAyMDgsXG4gICAgICA1OSxcbiAgICAgIDIxNCxcbiAgICAgIDE1NixcbiAgICAgIDI0NSxcbiAgICAgIDIzMCxcbiAgICAgIDAsXG4gICAgICAxMzUsXG4gICAgICAyMTcsXG4gICAgICAxMDEsXG4gICAgICAxNDIsXG4gICAgICAxOTYsXG4gICAgICAxNDMsXG4gICAgICAyMzksXG4gICAgICAxMzMsXG4gICAgICAxMzEsXG4gICAgICAyMzQsXG4gICAgICAyLFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDgsXG4gICAgICAxNDUsXG4gICAgICAxMTIsXG4gICAgICAyNDAsXG4gICAgICAyOSxcbiAgICAgIDE3NixcbiAgICAgIDIzNSxcbiAgICAgIDk2LFxuICAgICAgMjksXG4gICAgICAxNDgsXG4gICAgICAxMTAsXG4gICAgICAzOSxcbiAgICAgIDE5NSxcbiAgICAgIDEzNixcbiAgICAgIDQ1LFxuICAgICAgOTIsXG4gICAgICAyMzIsXG4gICAgICAxMSxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzOTc4NVI4SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMDAwOTYwMDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiemFpbmFiZGF0dGkwMlwiLFxuICAgIFwibGlkXCI6IFwiMjA4Mzc4OTc4NjcyODEzOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZwcVpzS0VPVDAxTGNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzVnVNbjBDNU1WUkdHTWRKOGNuTFJ2WnhtSFVkbkFCaDl3KytrR20vYW1JPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRlMHIxZ1RhNWNrOUlLbFBLYlgvOWVFQ1hkeHV3N0w5d0h1RGNpZGRFa1JhaUhBSGFIVC9vaitOQk5iTWp4dytvMEFmY2F1Qml0QTE5cThjYzhVd0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdoSU8wbVVyb2M1K1c0ZVVYaWhWNDNMWWFoNHZTa1NrZHd2ZEtManAvV2ZJdDFHQi9Sd2pPdFhGMitpeXFLUW5oemkySHpuM3J0bWJ3ejZ2WkM2T2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDAwMDk2MDA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjczNDczMDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
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
 
