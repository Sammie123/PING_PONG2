function pP (userNum) {
  for (var index = 1; index <= userNum; index +=1 ) {
    if ((index % 3 === 0) && (index % 5 === 0)) {
      $("ul#results").append('<li>' + "pingpong" + '</li>');
    } else if (index % 5 === 0) {
      $("ul#results").append('<li>' + "pong" + '</li>');
    } else if (index % 3 === 0) {
      $("ul#results").append('<li>' + "ping" + '</li>');
    } else {
      $("ul#results").append('<li>' + index + '</li');
    };
  };
};


$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var userNum = parseInt($("input#userInput").val());
    $("#results").show();
    pP (userNum);
  });
});
