function showReturn () {
  setTimeout(function () {
    $("#returnToTheSea").fadeIn(3000);

    setTimeout(function () {
      $("#returnToTheSea").fadeOut(3000);

      setTimeout(function () {
        if (cycleStore === "" || cycleStore === null || cycleStore === undefined) {
          $("#spring-vernal").fadeIn(3000);
          
          currentSeason = "spring";
          localStorage.setItem("cycleStore-vernal", "spring");
        }

        else if (cycleStore === "winter") {}
      }, 3000);
    }, 4000);
  }, 1000);
}

showReturn();