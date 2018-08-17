// Business Logic




// User Interface
$(function(){
  $(".userInput").submit(function(event){
    event.preventDefault();
      var numInput = $("#numInput").val();
      var result = ""
      if (numInput.includes("3")){
        result = "I\'m sorry, Dave. I\'m afraid I can\'t do that."
      } else if (numInput.includes("1")){
        result = "Boop!"
      } else if (numInput.includes("0")){
        result = "Beep!"
      }
      $(".result").text(result);
  })
})
