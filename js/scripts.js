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




// User Interface
$(function(){
  $(".userInput").submit(function(event){
    event.preventDefault();
    var numInput = $("#numInput").val();
    var userName = firstName($("#userName").val());
    $(".result").text(result(numInput, userName));
  })
})
