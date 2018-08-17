// Business Logic
function firstName(name){
  nameArray = name.split(" ");
  return nameArray [0];
}

function result(number, name){
  if (number.includes("3")){
    if (name){
      return "I\'m sorry, " + name + ". I\'m afraid I can\'t do that.";
    } else {
      return "I\'m sorry, Dave. I\'m afraid I can\'t do that.";
    }
  } else if (number.includes("1")){
    return "Boop!";
  } else if (number.includes("0")){
    return "Beep!";
  } else {
    if(name){
      return "What are you doing, " + name + "?";
    }else {
      return "What are you doing, Dave?";
    }
  }
}

// I finished very early, and my program is clearer and more efficient without any loops (I'm guessing the assignment was designed for us to loop through the numbers in the input in order to find our 0's, 1's and 3's?  The .includes method is much simpler and allows priority for 3 over 1 over 0 a lot easier.)  So I decided to try the binary and hexidecimal translator, which I can use loops to program and show I have understood the concepts.

// Binary translator - proud of this one

function binaryConverter(number){
  if(number){
  var binaryLog = Math.floor(Math.log2(number))
  var binaryArray = new Array(binaryLog).fill(0);
    while(number>0){
      binaryLog = Math.floor(Math.log2(number))
      binaryArray[binaryLog] = 1
      number = number - Math.pow(2,binaryLog)
    }
  var reversedArray = binaryArray.reverse();
  var result = reversedArray.join("");
  return result
}
}

// Now to hexidecimal

function hexConverter(number){
  var binaryArray = binaryConverter(number).split("");
  var addZeroes = 4 - (binaryArray.length % 4)
  var hexDigitBinary = []
  var hexDigitDecimal = 0
  var decimals = []
    for (;addZeroes>0; addZeroes -= 1){
    binaryArray.unshift(0);
  }
  for (i=4;i<=binaryArray.length; i+=4){
    hexDigitBinary = binaryArray.slice(i-4,i)
    for (j=0; j<4; j++){
      console.log(hexDigitBinary[j]);
      if (hexDigitBinary[j] == 1) {
        hexDigitDecimal += Math.pow(2, (4-(j+1)))
      }
    }
    decimals.push(hexDigitDecimal)
    hexDigitDecimal = 0
    }
    var hex = decimals.map(function(decimal){
      if (decimal == 10){
        return "A";
      } else if (decimal == 11){
        return "B";
      } else if (decimal == 12){
        return "C";
      } else if (decimal == 13){
        return "D";
      } else if (decimal == 14){
        return "E";
      } else if (decimal == 15){
        return "F";
      } else {
        return decimal;
      }
    })
    var result = hex.join("")
    return result;
  }





// User Interface
$(function(){
  $(".userInput").submit(function(event){
    event.preventDefault();
    var numInput = $("#numInput").val();
    var userName = firstName($("#userName").val());
    $(".result").text(result(numInput, userName));
    $(".binary").text(binaryConverter(numInput));
    $(".hex").text(hexConverter(numInput));
  })
})
