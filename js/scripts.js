// Business Logic

// Original assignment

// I originally used the .includes method, and then I realized you wanted us to show our knowledge of loops, so I created my own includes function
function includes(string, search){
  var characters = string.split("");
  for (i=0; i<characters.length; i++);
  var character = characters[i];
  if (character == search){
    return "true";
  }
}

function result(number, name){
  if (includes(number, "3")){
    if (name){
      return "I\'m sorry, " + name + ". I\'m afraid I can\'t do that.";
    } else {
      return "I\'m sorry, Dave. I\'m afraid I can\'t do that.";
    }
  } else if (includes(number, "1")){
    return "Boop!";
  } else if (includes(number,"0")){
    return "Beep!";
  } else {
    if(name){
      return "What are you doing, " + name + "?";
    }else {
      return "What are you doing, Dave?";
    }
  }
}

function firstName(name){
  nameArray = name.split(" ");
  return nameArray [0];
}

// I finished very early, and I've decided to build a binary and hexidecimal converter as per further exploration assignment.

// Binary translator - proud of this one

function binaryConverter(number){
  if (number == 0){
    return "0";
  }else if(number){
    var binaryLog = Math.floor(Math.log2(number));
    var binaryArray = new Array(binaryLog).fill(0);
    while(number>0){
      binaryLog = Math.floor(Math.log2(number));
      binaryArray[binaryLog] = 1;
      number = number - Math.pow(2,binaryLog);
    }
    var reversedArray = binaryArray.reverse();
    var result = reversedArray.join("");
    return result;
  }
}

// Now to hexidecimal

function hexConverter(number){
  if (number == 0){
    return "0";
  }else if(number){
    var binaryArray = binaryConverter(number).split("");
    var addZeroes = 4 - (binaryArray.length % 4);
    var hexDigitBinary = [];
    var hexDigitDecimal = 0;
    var decimals = [];
    for (;addZeroes>0; addZeroes -= 1){
      binaryArray.unshift(0);
    }
    // this converts every four digits of the binary to a decimal value under 16
    for (i=4;i<=binaryArray.length; i+=4){
      hexDigitBinary = binaryArray.slice(i-4,i);
      for (j=0; j<4; j++){
        if (hexDigitBinary[j] == 1) {
          hexDigitDecimal += Math.pow(2, (4-(j+1)));
        }
      }
      decimals.push(hexDigitDecimal);
      hexDigitDecimal = 0;
    }
    // this converts the decimal value into hexidecimal
    var hex = decimals.map(function(decimal){
      var letters = ["A", "B", "C", "D", "E", "F"];
      if (decimal > 9){
        return letters[decimal - 10];
      } else {
        return decimal;
      }
    })
    var result = hex.join("");
    return result;
  }
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
