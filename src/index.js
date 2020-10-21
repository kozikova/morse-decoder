const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    return expr.split('**********').reduce((decodedWords, encodedWord) => {
		let morseWord = '';
		let word = [];
		for (let i=encodedWord.length; i >= 2; i = i - 2) {
			let pair = encodedWord.substring(i - 2, i);
			morseWord =  (pair == '11' ? '-' : (pair == '10' ? '.' : '')) + morseWord;
			
			if (/*i == 49 || i == 39 || i == 29 || i == 19 || i == 9*/ i % 10 == 2) {
				word.push(MORSE_TABLE[morseWord]);
				morseWord = '';
			}
		}
		decodedWords.push(word.reverse().join(''));
		return decodedWords;
		}, []).join(' ');
}

module.exports = {
    decode
}