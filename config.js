//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2347053192517";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMklnQW5KeXNqbUo0cldQMWxLVTlrWHM1c3dRMGhyc2VKNVdTeDlpZldtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjUwZG9jUlhKT3pFZEh2Um5mRU5aQU5WZjhOcEZlb0h2N3JiTzFtZklpVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTnUrWUlVQVZwdVVHOGNIamtUNzkwOEIrM3dkVFRGZ2Y3WTd6c2xDWms4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTVdrNmJSSUs5aVRVMTNSK0lkL1lDNUVJbGZvMUZTbUJWWnY0clN3dmhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJOOStRTEZ0ektqZ3M3U2xsOHY5VjBuR3E2S2piQVZra1V0dFQxQzF2bWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndlSzF5S0pTK3VpR3dqTUdoSHo2NHVPY291MjYvMnU4M1B0WVYwK0ZXekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1AwMk00SHZjUTViR1FRVkF0RDg4UkJ2TTNyalB4NUg2S2pNWnFTWWxGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXQ2eHdQNzI0Z2xqR3NOVVhPQ09LcHd6WGhkd3loVk8yZ1A1TW04UWJIVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR2UjJnYUliMDlFTm9qcnE3QVI3b04wUktRUUEybEFqQ2dmdkhZcTB1OGhnbUlPT1JjdndaUnBNMFJYcWRVUkJteDFhaTRteWtjT1ZYbVRwU1NmSmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6IllPRmlGemZTaDM5RTgvY3AwRDB5eTdzbUl5L3BvMVpJMTBXT25aWU55VW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNlOTV1NGk1U0gyZTk4cDBYYlR2c2ciLCJwaG9uZUlkIjoiNmQyM2VjMmMtOTk0Yy00OWJjLWIwZGQtNmZhZTA4OWEzYzkyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpOeU81V0xnUk5oLzQ2YUo1Um40NUkvREdKcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWeWV1cWFCeGFpV1RxdDlFSndiT09vbjA3WGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRjFMS0tMRlciLCJtZSI6eyJpZCI6IjIzNDcwNTMxOTI1MTc6NzBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tDeXVNWUhFTysvaUxrR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtVNVBxMWN6M3dQaWlvWG5GdWxkUjJBbE1rK2lEREJrb2lzdk4zeHpsaXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRseno2UnNlam5JTUoyNUdCMVZiWUNUL2FNRGI4QWw3VU9ZV0JRZzVxSXo3WWw1K1FKTEpSSFRDaXRWZkhZcTc5cy9mL3IzWWo3S1lYS0J1OWRHQ0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2ZDFYT2VyUjkvV0R5bjNWREZ6MWVHZWNOUkJTRE4zb0c3WC92OG95dzJVbEtwMDJ4dUx2U3k3bWhpZUNFd1Y5TDNSZ0szeVpxeEhmbjAycXNDeW9qdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNTMxOTI1MTc6NzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkZPVDZ0WE05OEQ0b3FGNXhicFhVZGdKVEpQb2d3d1pLSXJMemQ4YzVZciJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDI4OTY2MH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  author: process.env.PACK_AUTHER || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  packname: process.env.PACK_NAME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  botname: process.env.BOT_NAME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
