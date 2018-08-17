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

// User Interface
$(function(){
  $(".userInput").submit(function(event){
    event.preventDefault();
    var numInput = $("#numInput").val();
    var userName = firstName($("#userName").val());
    $(".result").text(result(numInput, userName));
  })
})
