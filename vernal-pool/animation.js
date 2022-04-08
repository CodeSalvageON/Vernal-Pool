function showReturn () {
  setTimeout(function () {
    $("#returnToTheSea").fadeIn(3000);

    setTimeout(function () {
      $("#returnToTheSea").fadeOut(3000);
    }, 4000);
  }, 1000);
}

showReturn();