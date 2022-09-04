//..........................Total phone bill.............................//
export default function totalPhoneBill(billStr){
    let count = 0;
    var newItem = billStr.split(",");
    for (var i=0; i<newItem.length; i++){
      var currentItem = newItem[i].trim();
      if (currentItem.startsWith("s")){
        count += 0.65;
      }else if(currentItem.startsWith("c")){
        count += 2.75; //count = count +2.75;
      }else{
        return "please enter string, eg: call,sms";
      }
    }
    return "R"+count.toFixed(2);
    //console.log("R"+count.toFixed(2))
  }
  //......................End of Total phone bill......................//