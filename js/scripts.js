$(document).ready(function(){
  $("#add-value").hide();
  $(".add-form form").submit(function(event){
    var numOneInput = parseInt($("input#num1").val());
    var numTwoInput = parseInt($("input#num2").val());

    var addedNums = function(numberOne, numberTwo) {
      return numberOne + numberTwo;
    };

    $(".add-total").text(addedNums(numOneInput, numTwoInput));

    $("#add-value").show();

    event.preventDefault();
  });
});
