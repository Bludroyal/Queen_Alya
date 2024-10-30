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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BRTTRmQTZFaFpnb2I1SVlxWUgrbUt4R3VrSE4vWlVNcDM2YU90Y0ozcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHJTRGwvd1JDMkt4NHl2QXI4QjVGRVFUd2IzZStGWG5qREJTdnlRVXNEMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTDZFK2hWYzhrVmJjWGVDdjI5eFF4Sk1sMFhxZ3Jlc2szOERCbVM2QW1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzMkRDSlA4aUt3RHRVcHYxUnhUU3FuRGNvN3pYSDJ0NnNORzNUTHFhR2lJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDWVBHVEFWcjJBNlRGWFZNa2gyWjdqZmtLV0JMckJMeURiTlBRTlcxbEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFlMXRhcVVIR0l1YXJ0c1NLR3BFZEk3djY5THU5RW50ellOMWZHblFwUW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia090OWRWOE9DU3FDS2NSYTRHVFBZOE9CdWFQM0l3Q0dHa3E2dlBxYllFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjU0eE00WEI2c1ZPSEM1TXUyRWhDc2RiaGFpcUl4T0tmSDRjWm5NV2d5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN3eUNpTTE5NnFRS3RkZXV5cU4vK0tQaktrb0VYQUdUUEdzVDliYWgzWFZGZGhQMGw0WVVpVndtK2NIemh1M0hrQjB5UGJtd0ZPYnJkeXVrdmduWkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJVRFE2QURXNlprUlVPbUNKRy9DbEw2eTNQRW5KUUZ2dnhvUWE1YzZCTFJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5Qi1TQ2xoSlM2cUkzLW8zbFJtWHNRIiwicGhvbmVJZCI6ImYwODM1ZDg5LTg3MjgtNGY1MC04YzcyLTZlZTk5N2FkZDM4OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQnhWRGZiR1dkMHhOanp4dEhSYVVMTS94OEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGo1dTg3NmdHUm5GNmFHNWZrK0VSaWJaQ0xvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNONkJDWkE5IiwibWUiOnsiaWQiOiIyMzQ4MTU4ODcyODMxOjExQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNN3gwWjRERU5QNWlMa0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJENUZJa3h5eFVXck9ITmczbjZBdWozZUh4QXJzOVBnVEpMNTZqYmRSVUhrPSIsImFjY291bnRTaWduYXR1cmUiOiI3aXVzejdOejNLekU0YTQyS2IxOFIzSTFCSWxvekZSWEFBMDlrZERSVHIvT3o2MVMvNEJZd0NKQVdvZENDTXd0KzI3TE9wYzdwVmpRSXZEMEdmTEtEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicExCckhFVnRTN0ZvTGVCaXlhcWdGWHU3OENiOXQrMWwzRC8vNDRMTE1tOER5TVM0dnJCQVg2bXltK3Q0THZobTNjTm1UNUE5OGV6bXhhSUhvVlphQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTU4ODcyODMxOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlErUlNKTWNzVkZxemh6WU41K2dMbzkzaDhRSzdQVDRFeVMrZW8yM1VWQjUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAyOTcwNTZ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
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
