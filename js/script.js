$(document).ready(function() {

  for(var n=1;n<=100;n++) {
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