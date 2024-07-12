const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254711645930";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_43_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NixcbiAgICAgICAgMjUxLFxuICAgICAgICA3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1LFxuICAgICAgICA5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBTUHgvR1JiUWJ1eFRBUmZEZFpaWk9kM0Nja2NhZURtVk91N3lUQmkzaGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllDY1loREVLUzYyZWxPOUNTQVVkUGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjIxZTlhMzItYWQyNS00Y2ZkLWI5MTAtN2I4ZWMyOGRlZWY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgNTMsXG4gICAgICAxNzMsXG4gICAgICA3MSxcbiAgICAgIDY0LFxuICAgICAgMTI3LFxuICAgICAgMTkzLFxuICAgICAgMjE5LFxuICAgICAgMTcyLFxuICAgICAgMTY0LFxuICAgICAgMjI2LFxuICAgICAgMjIsXG4gICAgICAxNzQsXG4gICAgICA0NCxcbiAgICAgIDIwNCxcbiAgICAgIDU3LFxuICAgICAgMTQsXG4gICAgICAxMjgsXG4gICAgICAxMjAsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxNzcsXG4gICAgICAyMjksXG4gICAgICA3LFxuICAgICAgNDcsXG4gICAgICAyMTAsXG4gICAgICAyMSxcbiAgICAgIDg3LFxuICAgICAgODgsXG4gICAgICAxNjEsXG4gICAgICA5OCxcbiAgICAgIDEyMixcbiAgICAgIDMyLFxuICAgICAgOTcsXG4gICAgICAyMDcsXG4gICAgICAxNDMsXG4gICAgICA4NyxcbiAgICAgIDEyNSxcbiAgICAgIDEzLFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0EyRVhLM01cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxMTY0NTkzMDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Rs/CdkprwnZKK8J2Sj/CdkoguLi5cIixcbiAgICBcImxpZFwiOiBcIjM4NjI5MzM4NTY2ODQ1OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnpWaVhFUTg4Ykd0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUbEdXMFIrSXBiLzFjdTJLN1ZveXgyUFBHaEpzbTJPN3M2VW91b0dyckY0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImIzdklsR2ZlZWxiN01MQjNhNjFpTnU4V3U0OURTdHVMWnpYbHBuV2lQOWR0d0JxdGRMLzg1djY4b1ZvQTFRR09hTXNnU2ZsNmxJWEQyeFZNckpGMUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitPbXBCODJlSjhWVlpTL2pLalZtMldwM2NOTldOMkpXQk04bXFwT3VFVkZDYmRPY0s5RXMvamJkNHdNaFVpajdFQ0NyYWU4VkxBSVNCdXNicUtBNWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxMTY0NTkzMDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgyMDU5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp1elwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnV6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTWVJdksxdEpEcGZManlaNnVKeTNOZ2UzRFBwOVJOWnVYUEYwcnhqRUtGTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzcxMzY1MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
