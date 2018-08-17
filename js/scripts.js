// Business Logic

// Method .includes contains the business logic I needed to meet the expectations

// User Interface
$(function(){
  $(".userInput").submit(function(event){
    event.preventDefault();
      var numInput = $("#numInput").val();
      var result = ""
      var userName = $("#userName").val();
      if (numInput.includes("3")){
        result = "I\'m sorry, " + userName + ". I\'m afraid I can\'t do that."
      } else if (numInput.includes("1")){
        result = "Boop!"
      } else if (numInput.includes("0")){
        result = "Beep!"
      }
      $(".result").text(result);
  })
})
