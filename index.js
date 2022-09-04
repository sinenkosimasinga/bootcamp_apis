import express from 'express';
import longestWord from './bootcamp/longestword.js'
import shortestWord from './bootcamp/shortestword.js'
import wordLengths from './bootcamp/wordLengths.js'

import totalPhoneBill from './bootcamp/total_phone_bill.js'

const app = express();
app.use(express.static('public'));

app.get("/api/word_game", function(req, res){

     const sentence=req.query.sentence;

     if (!sentence){
      res.json({
        error:'please enter sentence'
      });
     };
  res.json({
    "longestWord" : longestWord(sentence),
    "shortestWord" : shortestWord(sentence),
    "sum" : wordLengths(sentence)
    
   });
});

app.get("/api/phonebill/total", function(req, res){

  const billStr = req.query.billStr;
  res.json({
    //call : 2.75,
    //sms : 0.65
    "bill": totalPhoneBill(billStr)
   });
});


const PORT = process.env.PORT || 5007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});