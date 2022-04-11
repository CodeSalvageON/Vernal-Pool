let extinction_event = document.getElementById("extinction-event");
let extinction_modal = document.getElementById("extinction-modal");
let close_emodal = document.getElementById("close-emodal");

let stats = document.getElementById("stats");
let stat_modal = document.getElementById("stat-modal");
let close_stat = document.getElementById("close-stat");

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

        else if (cycleStore === "spring") {
          currentSeason = "spring";
        }

        else if (cycleStore === "summer") {
          currentSeason = "summer";
        }

        else if (cycleStore === "fall") {
          currentSeason = "fall";
        }

        else if (cycleStore === "winter") {
          currentSeason = "winter";
        }

        else {
          
        }

        setTimeout(function () {
          setInterval(growPool, 1000);
        }, 1000);
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

stats.onclick = function () {
  stat_modal.style.display = "block";
}

close_stat.onclick = function () {
  stat_modal.style.display = "none";
}