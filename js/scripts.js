// Business Logic
function firstName(name){
  nameArray = name.split(" ")
  return nameArray [0]
}
// Method .includes contains the business logic I needed to meet the expectations

// User Interface
$(function(){
  $(".userInput").submit(function(event){
    event.preventDefault();
      var numInput = $("#numInput").val();
      var result = ""
      var userName = firstName($("#userName").val());
      if (numInput.includes("3")){
        if (userName){
        result = "I\'m sorry, " + userName + ". I\'m afraid I can\'t do that."
        } else {
        result = "I\'m sorry, Dave. I\'m afraid I can\'t do that."
        }
      } else if (numInput.includes("1")){
        result = "Boop!"
      } else if (numInput.includes("0")){
        result = "Beep!"
      }
      $(".result").text(result);
  })
})
