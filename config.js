const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU8vc3h4UDRBTnhBcnhOV0RNNjRXWlozSnZoNU9IdTF5M1hHZ1EvVjZuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGdzcU1WcUdMcGNiWHlMUHdLSkE1c2Q3RkdXcENvQisvc2xKNU04RFp6RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TmxRK0V0U2Uyc2RmT2pHTG1wM3lSbExFeXhMVno3N0x5cjg1NmQ3azBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZFI2UVlYSDR2NnRQVzZWQlBhY01CdHRPNC90U0tXOVBPWEJmankwYldNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MV2kyMzJDenVnL2hSeE8wR0c2U01vUXJrVkdJM2szSVdnUEM5bjlMbVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNuSEhucnRSeFc4d2FIeXNGdTVrZ2RSTDQraGVDZitQWUM2elozWDkybkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkM3anc2bkxtSms1dTF3T2RGaU5jK1djVEE2TS8wTWhWSDZvaE85d0cwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblhUaHcxc0c0UldyL1FkUjFFNnRvaExyS1FaSlprOEIrcGZacEZKV2JsST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QaU8yR2FEWE5jMjZlQmxoMGtGVERNTWo4WVpKYndNWUxHRjFkU1c4L0lBd2lVM3FjUmxJTkVxakNvci9ncXhEM3FWckxpcVlBb1lGblBuZFJ3WmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiJOQWhDcTA3Uzhxa3ZJVlJ2YkVxQzFYYlRiR3h5NlcrNXF5ekhIVC9VMU9vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBMjhKQjVSTSIsIm1lIjp7ImlkIjoiOTIzNDUwMDczNDY1OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOGqfCdmY/wnZmd2LlcIvCdmLzwnZmh8J2ZniDwnZmN8J2ZlvCdma/wnZmW8JOGqiAgIFxu8JOGqfCTg6zwk4aqICAgXG7wk4ap8JODrPCThqogICBcbvCThqnwk4Os8JOGqiAgIFxu8JOGqfCTg6zwk4aqICAgXG7wk4ap8JODrPCThqogICBcbvCThqnwk4Os8JOGqiAgIFxu8JOGqfCTg6zwk4aqICAgIFxu8JOGqfCdkJTwnZCN8J2QiPCdkJDwnZCU8J2QhCIsImxpZCI6IjI0ODIwNjc4MDgxNzQ4Mzo2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTG1VNGRNR0VLZVJyY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNTRJV2h6QUVHaElRTWVxV3JyK25CQXRrL0MwN0NUTHI3dWxiWnpYVndHUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoid3hKbkJBRTJnTEVuRVNOM0xhZkhReTdpNWJrVGdGeElJR1FXTzVzUVk2OVJkZnNSTTVZN1l4Z3RpamROQ2JiSXRQWFpMdkx6WXRrSGQwYUxmOTlJRFE9PSIsImRldmljZVNpZ25hdHVyZSI6InFURmh2QjkyT1VzODEyNHphWDZ2UFhHdEhwSXY3WGE3d1lvMW5KUEd4RFFtZ2VSb3BmUVdBVkJzd2JDK0JuNmZsZUcwQ2U2U2ltVFN6SWd4NXU3NWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDUwMDczNDY1OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWVDRm9jd0JCb1NFREhxbHE2L3B3UUxaUHd0T3dreTYrN3BXMmMxMWNCayJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDU1NzI0LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yj7zp0.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yj7zp0.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
