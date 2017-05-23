var Twit = require(‘twit’);
var TwitterBot = require(‘node-twitterbot’).TwitterBot;

var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

var lyrics = ['A', 'man', 'walks', 'down', 'the', 'street',
'He', 'says', 'why', 'am', 'I', 'soft', 'in', 'the', 'middle', 'now',
'Why', 'am', 'I', 'soft', 'in', 'the', 'middle',
'The', 'rest', 'of', 'my', 'life', 'is', 'so', 'hard',
'I', 'need', 'a', 'photo-opportunity',
'I', 'want', 'a', 'shot', 'at', 'redemption',
"Don't", 'want', 'to', 'end', 'up', 'a', 'cartoon',
'In', 'a', 'cartoon', 'graveyard',
'Bonedigger', 'Bonedigger',
'Dogs', 'in', 'the', 'moonlight',
'Far', 'away', 'my', 'well-lit', 'door',
'Mr.', 'Beerbelly', 'Beerbelly',
'Get', 'these', 'mutts', 'away', 'from', 'me',
'You', 'know', 'I', "don't",'find', 'this', 'stuff', 'amusing', 'anymore',

"If", "you'll", "be", "my", "bodyguard",
"I", "can", "be", "your", "long", "lost", "pal",
"I", "can", "call", "you", "Betty",
"And", "Betty", "when", "you", "call", "me",
"You", "can", "call", "me", "Al",

"A", "man", "walks", "down", "the", "street",
"He", "says", "why", "am", "I", "short", "of", "attention",
"Got", "a", "short", "little", "span", "of", "attention",
"And", "wo", "my", "nights", "are", "so", "long",
"Where's", "my", "wife", "and", "family",
"What", "if", "I", "die", "here",
"Who'll", "be", "my", "role-model",
"Now", "that", "my", "role-model", "is",
"Gone", "Gone",
"He", "ducked", "back", "down", "the", "alley",
"With", "some", "roly-poly", "little", "bat-faced", "girl",
"All", "along", "along",
"There", "were", "incidents", "and", "accidents",
"There", "were", "hints", "and", "allegations",

"If", "you'll", "be", "my", "bodyguard",
"I", "can", "be", "your", "long", "lost", "pal",
"I", "can", "call", "you", "Betty",
"And", "Betty", "when", "you", "call", "me",
"You", "can", "call", "me", "Al",
"Call", "me", "Al",

"A", "man", "walks", "down", "the", "street",
"It's", "a", "street", "in", "a", "strange", "world",
"Maybe", "it's", "the", "Third", "World",
"Maybe", "it's", "his", "first", "time", "around",
"He", "doesn't", "speak", "the", "language",
"He", "holds", "no", "currency",
"He", "is", "a", "foreign", "man",
"He", "is", "surrounded", "by", "the", "sound",
"The", "sound",
"Cattle", "in", "the", "marketplace",
"Scatterlings", "and", "orphanages",
"He", "looks", "around", "around",
"He", "sees", "angels", "in", "the", "architecture",
"Spinning", "in", "infinity",
"He", "says", "Amen!", "and", "Hallelujah!",

"If", "you'll", "be", "my", "bodyguard",
"I", "can", "be", "your", "long", "lost", "pal",
"I", "can", "call", "you", "Betty",
"And", "Betty", "when", "you", "call", "me",
"You", "can", "call", "me", "Al",
"Call", "me", "Al"]

function getWord(lyrics) {
    return lyrics[Math.floor(Math.random() * lyrics.length)]
}

var line1 = getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics) + ' / '

var line2 = getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics) + ' / '

var line3 = getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics) + ' / '

var line4 = getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics) + ' ' + getWord(lyrics)

var result = line1 + line2 + line3 + line4

Bot.tweet(result.toUpperCase())
