$(document).ready(function() {

  $('#inputNum').focus();
  $(document).on('submit', '.num-form', function(event) {
    event.preventDefault();
    $('.numbers').empty();
    var userNumber = $('input[name="user-num"]').val();
    for(var n=1;n<=userNumber;n++) {
      if(n % 3 === 0 && n % 5 === 0) {
        $(".numbers").append('<li>FizzBuzz</li>');
      }else if(n % 3 === 0) {
        $(".numbers").append('<li>Fizz</li>');
      }else if(n % 5 === 0) {
        $(".numbers").append('<li>Buzz</li>');
      }else {
        $(".numbers").append('<li>' + n + '</li>');
      }
    }
  });

});