var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;

var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

var one =[
  'A', 'the', 'I', 'am', 'in', 'now', 'of', 'my', 'so', 'at', 'Mr.',
  'these', 'You', 'this', "Al", "you'll", "here", 'he', "Hallelujah!", "Amen!", "wo", "when", "you'll",
  "who'll", "no"
]

var two = [
  'walks', 'down', 'soft', 'middle', 'now', 'rest', 'so', 'hard',
  "Don't", 'want', 'shot', 'redemption', 'in', 'find', "long", "lost", "can", "call",
  "why", "am", "short", "of", "long",  "roly-poly", "little", "bat-faced", "ducked",
  "holds", "surrounded", 'looks', "Spinning", "doesn't", 'says', 'why', 'am', "in",
  "end", "up", "well-lit", "get", "away", "from", "know", "amusing", "anymore",
  "die", "sees", "speak", "no"
]

var three = [
  'man', 'street', 'middle', 'rest', 'life', 'need', 'photo-opportunity', 'want',
  'shot', 'redemption', 'end', 'cartoon', 'graveyard', 'Bonedigger',
  'Dogs', 'moonlight', 'well-lit', 'door', 'Mr.', 'Beerbelly', 'mutts', 'stuff',
  "bodyguard", "pal", "Betty", "Al", "attention", "span", "wo", "nights", "wife",
  "family", "role-model", "alley", "back", "girl", "incidents", "accidents",
  "hints", "allegations", "world", "Third", "time", "language", "currency", "sound",
  "Cattle", "marketplace", "Scatterlings", "orphanages", "angels", "architecture", "infinity"
]

function getWord(array) {
    return array[Math.floor(Math.random() * array.length)]
}

var line1 = getWord(one)  + ' ' + getWord(two) + ' ' + getWord(three) + " / "
var line2 = getWord(three)  + ' ' + getWord(two) + ' ' + getWord(three) + " / "
var line3 = getWord(one)  + ' ' + getWord(three) + ' ' + getWord(two) + " / "
var line4 = getWord(one)  + ' ' + getWord(two) + ' ' + getWord(three)

var result = line1 + line2 + line3 + line4

Bot.tweet(result.toUpperCase())
// console.log(result.toUpperCase())
