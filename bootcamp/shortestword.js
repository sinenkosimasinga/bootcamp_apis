export default function shortestWord(sentence){
    var wordArray = sentence.split(' ')
    //var manLength = 0
    var result = wordArray[0]

    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length <= result.length) {
            //result = wordArray[i].length
            result = wordArray[i]
        }
    }
    return result
}