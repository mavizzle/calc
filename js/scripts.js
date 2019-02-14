$(document).ready(function(){
  $("#add-value").hide();
  $("#sub-value").hide();
  $("#mult-value").hide();
  $("#div-value").hide();


  $(".add-form form").submit(function(event){
    var numOneInput = parseInt($("input#addNum1").val());
    var numTwoInput = parseInt($("input#addNum2").val());

    var addedNums = function(numberOne, numberTwo) {
      return numberOne + numberTwo;
    };

    $("#add-total").text(addedNums(numOneInput, numTwoInput));

    $("#add-value").show();

    event.preventDefault();
  });

  $(".sub-form form").submit(function(event){
    var numOneInput = parseInt($("input#subNum1").val());
    var numTwoInput = parseInt($("input#subNum2").val());

    var subbedNums = function(numberOne, numberTwo) {
      return numberOne - numberTwo;
    };

    $("#sub-total").text(subbedNums(numOneInput, numTwoInput));

    $("#sub-value").show();

    event.preventDefault();
  });

  $(".mult-form form").submit(function(event){
    var numOneInput = parseInt($("input#multnum1").val());
    var numTwoInput = parseInt($("input#multnum2").val());

    var multNums = function(numberOne, numberTwo) {
      return numberOne * numberTwo;
    };

    $("#mult-total").text(multNums(numOneInput, numTwoInput));

    $("#mult-value").show();

    event.preventDefault();
  });

  $(".divi-form form").submit(function(event){
    var numOneInput = parseInt($("input#divNum1").val());
    var numTwoInput = parseInt($("input#divNum2").val());

    var divNums = function(numberOne, numberTwo) {
      return numberOne / numberTwo;
    };

    $("#div-total").text(divNums(numOneInput, numTwoInput));

    $("#div-value").show();

    event.preventDefault();
  });
});
