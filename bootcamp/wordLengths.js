export default function wordLengths(sentence){
    var mysentence = sentence.split(" ");
    var len= mysentence.map(w => w.length);
    let sum = 0;
  
      for (let i = 0; i < len.length; i++) {
       sum += len[i];
  }
    return sum;
  }