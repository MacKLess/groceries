$(document).ready(function(){
    $("#groceriesList").submit(function(event){
      var blanks = ["list", "list1", "list2", "list3", "list4", "list5"]
      var result = [];

      blanks.forEach(function(blank){
        var userInput = $("input#" + blank).val().toUpperCase();
        result.push(userInput);
      });
      result.sort();
      $("#output").append(result);
      console.log(result);
    event.preventDefault();
  });
});
