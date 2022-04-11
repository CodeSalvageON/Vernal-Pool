let extinction_event = document.getElementById("extinction-event");
let extinction_modal = document.getElementById("extinction-modal");
let close_emodal = document.getElementById("close-emodal");

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

extinction_event.onclick = function () {
  extinction_modal.style.display = "block";
}

close_emodal.onclick = function () {
  extinction_modal.style.display = "none";
}