$(document).ready(function () {
  $('#triangle-form').submit(function (event) {
    event.preventDefault();
    const side1Input = parseInt($('#side1').val());
    const side2Input = parseInt($('#side2').val());
    const side3Input = parseInt($('#side3').val());

    //add if-else branching here

    //depending on the result, add text to the span element to complete the message
    //$('#triangle-type-text').text('');

  })
})