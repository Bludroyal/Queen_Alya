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
global.devs = "2349164718113";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2348158872831";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhQeS95TlRCZzZ5aVdKaXJDUWtEZURtQU9CeFJJUjQ0Uk5lUGRTdFZXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQStXR3cwUVo4Mkc4Z3IvMHErK3RlRmZpb0dOVDJ0TkU4dmFXTVQ3d1NRdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTXpxL3NpNFlwWGhFOFN4VTB1T3FZRGlUeXAvK1phRlZJODdvblhncm1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvMERKYlMyZFVYN2x6TkN6R0owU1ZUck1KZXp3Z3NnOTd0K21wc09OOTBFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNWEZCTW9KTWtXNFdSVXYxdGc4b1h1M3BhMkRwTmxIRVVtVzJ6UXJ2VkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZVSmdveVE0dnVnaUJ3YjJYZDlOZmdNSE9HSHF6Mm9UNUlBWml4REVZbXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT05hQ1pEcTFxQ3Z3UmlJY0hKcjhqVXJPWU9oeW00b0JhemxNYkFFaHZuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0MvUXEvL0tOalAvU1l2TkFhOUdkUVROMk5tWHVYaDN5ZGpGTjhDZXozUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk3ZDhuK3Y1dEcrQmxjN2kxdm9zTEpXK3ZTVXFwWVBzQ25FaG5DZTVrcXMrYVBHaFVvV1dxaFJPell3cnR4cnAvRWNrVktsTjhjNjhaR1JZRDBhR0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiI5WnFlWElFS3hvNjJjT2VjUmp6aE44SjBqVGpReG15ZzY1MTdYdFhKb1c4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4OUk5OVFReFNvMmkzRTEyWWIteTBnIiwicGhvbmVJZCI6IjIxMjcxMmYyLWY3NTQtNGJmYS05OTAxLTMzMDc1ZjFjYzdmYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVdm9tWFBOZ29IMWRCQ3U1QUZyK1FYRFcrUUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2hqc0psSEdsZTFPOEp1Wm11bFhSZnBCbDlzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY0S1NGVEJaIiwibWUiOnsiaWQiOiIyMzQ4MTU4ODcyODMxOjEyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNL3gwWjRERUo2S2lia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJENUZJa3h5eFVXck9ITmczbjZBdWozZUh4QXJzOVBnVEpMNTZqYmRSVUhrPSIsImFjY291bnRTaWduYXR1cmUiOiJ6SUNkazl3WDlZWnprc25aQXdveW56WDlaakl1UnY5djlFeG5INHdvbmJueFQ3YmhjRGVMZHJRRWVzN3hpNmphbFlPUzc5UUJhMG1WcmJTY042TE5EQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVzQxSlZIZ2MyTW1SMEgrQllkbkVmcmFMUld4U25jUExUUzk1azAwcHQ2NG91UmNqL3ZHWHMxQTEzNnJvNENoS0JWWHhpdnMzZHBub1RCYWpIVlNxQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTU4ODcyODMxOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlErUlNKTWNzVkZxemh6WU41K2dMbzkzaDhRSzdQVDRFeVMrZW8yM1VWQjUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAyOTkxODB9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "══❏❃ 𝙴ᴍᴍᴀ𝚇𝚇 1_0❃❏══",
  author: process.env.PACK_AUTHER || "══❏❃ 𝙴ᴍᴍᴀ𝚇𝚇 1_0❃❏══",
  packname: process.env.PACK_NAME || "══❏❃ 𝙴ᴍᴍᴀ𝚇𝚇 1_0❃❏══",
  botname: process.env.BOT_NAME || "══❏❃ 𝙴ᴍᴍᴀ𝚇𝚇 1_0❃❏══",
  ownername: process.env.OWNER_NAME || "══❏❃ 𝙴ᴍᴍᴀ𝚇𝚇 1_0❃❏══",
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
  LANG: (process.env.THEME || "══❏❃ 𝙴ᴍᴍᴀ𝚇𝚇 1_0❃❏══").toUpperCase(),
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
