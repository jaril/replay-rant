const short = require('short-uuid');

// Quick start with flickrBase58 format
// short.generate(); // 73WakrfVbNJBaAmhQtEeDv
// console.log(">>>", short.generate());

const translator = short();
const gen = translator.fromUUID("7b651c81-45ab-4ebc-88b0-7f4ccb4e984e");
console.log(">>gen:", gen);

const cookieTranslator = short(short.constants.cookieBase90);
const gen2 = cookieTranslator.fromUUID("7b651c81-45ab-4ebc-88b0-7f4ccb4e984e");
console.log(">>gen2:", gen2);

