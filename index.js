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

function getNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var line1 = lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' / '

var line2 = lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' / '

var line3 = lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' / '

var line4 = lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)] + ' ' + lyrics[getNum(0, 316)]

var result = line1 + line2 + line3 + line4

console.log(result.toUpperCase(), result.length)
