
export default function longestWord(sentence) {
    var wordArray = sentence.split(' ')
    var maxLength = 0
    var result = ''

    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length >= maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }
    return result
}

//...........................End of Word game...............................//