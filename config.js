const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://20062006mam:20062006mam@cluster0.fsl38so.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Tanzania";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255745950018";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_07_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk0LFxuICAgICAgICA2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA1MixcbiAgICAgICAgMTczLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxLFxuICAgICAgICA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDcDdNYzh6Rk55amdraFRjTE9yR3psY1gvUHE3cVMvanpwaTVKaWV4S1U4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc0NTk1MDAxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzU2OTBDRjU0QzgxRkMwNTRBRTI4MEQwRDcyRDk4RUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NzgwODI5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzQ1OTUwMDE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRThDMjc0REJGNkVBMjE0QjU5MTYwNThDRUYxMDA1M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg3ODA4MzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTzFVcFRoS2VUYjI2am9lWTIxVmluQVwiLFxuICBcInBob25lSWRcIjogXCJmM2MyOGM3MC0xN2I5LTQzZTItODE1Ni1lN2EyNmM2ZTkzODZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAyLFxuICAgICAgMjM0LFxuICAgICAgMTUyLFxuICAgICAgMzYsXG4gICAgICAyMDksXG4gICAgICAxMDAsXG4gICAgICAxOTQsXG4gICAgICAyMjYsXG4gICAgICAyNyxcbiAgICAgIDk3LFxuICAgICAgMTc4LFxuICAgICAgNjIsXG4gICAgICAxNzUsXG4gICAgICAxOTIsXG4gICAgICAxNzEsXG4gICAgICAxMDMsXG4gICAgICA5OCxcbiAgICAgIDIzMixcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDU4LFxuICAgICAgMTg1LFxuICAgICAgNzEsXG4gICAgICAxNjIsXG4gICAgICAyMDAsXG4gICAgICAyMTQsXG4gICAgICAxNzEsXG4gICAgICAxMjIsXG4gICAgICA2NCxcbiAgICAgIDIwLFxuICAgICAgNDgsXG4gICAgICA1MixcbiAgICAgIDEyMCxcbiAgICAgIDMxLFxuICAgICAgMjA0LFxuICAgICAgODAsXG4gICAgICAxNDksXG4gICAgICAyNDQsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUQ2RFhSWkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc0NTk1MDAxODoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcxOTczNTEwODQxMDk6MTZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi44Ok44OzREXjgrBDVUxUVVJF44Oc44KkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE9XcWpZUWxZZktzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRTVdLVVMxRzBSY2xGNzdPREVpbXBxd0s2TDhvRWVIRkg3dmJoNUJlMEFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRCeWQxaGczTmp0OGxwSm5FZ3JydzJUSEN3bTVLMjJGUUIxRDhidE53TThVYzdVOXU3clM5TDg4a0dueTNmYzdOd1RqRjYvY2xlMi9vQnUxYjRqTkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi91U0dVSGtzRUZpMllGRWZudzRrRGo5emNSbnNLdGQraTJ0UCtiQ2hQTmtUcFZta1VZSERKUExkRHFWYkhKc1FjNGF5S1c2czJWZjZpZ1gxUW5NWEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc0NTk1MDAxODoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzgwODI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlNyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKU3IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvVjZGeVFhb3JMdEFLUDNCMHBFcDJpejZVQ0hBK2pVOUZ4QVlRUUh0TUlVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMzkzNzI2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4NzgwODI2NTMyXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DECULTURE",
  packname: process.env.PACK_NAME || "MOSES",
  botname : process.env.BOT_NAME  || "itz deculture",
  ownername:process.env.OWNER_NAME|| "itz moses",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb =.true; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
