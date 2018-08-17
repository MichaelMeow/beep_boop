// Business Logic




// User Interface
$(function(){
  $(".userInput").submit(function(event){
    event.preventDefault();
      var numInput = $("#numInput").val();
      var result = ""
      if (numInput.includes("1")){
        result = "Boop!"
      } else if (numInput.includes("0")){
        result = "Beep!"
      }
      $(".result").text(result);
  })
})
