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
          $("#spring-vernal").fadeIn(3000);
          
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
          setInterval(growthCycle, 5000);
          setInterval(deathCycle, 7000);
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

close_rain.onclick = function () {
  rain_modal.style.display = "none";
}

close_salamander.onclick = function () {
  salamander_modal.style.display = "none";
}

close_sun.onclick = function () {
  sun_modal.style.display = "none";
}

let viewport = document.getElementById("viewport");
let enlargeMass = document.getElementById("enlarge-mass");
let shrinkMass = document.getElementById("shrink-mass");

enlargeMass.onclick = function () {
  if (currentSeason === "") {
    return false;
  }
  
  viewport.style.boxShadow = "0px 0px 40px 15px green";
  currentAlgae += 5;

  setTimeout(function () {
    viewport.style.boxShadow = "none";
  }, 200);
}

shrinkMass.onclick = function () {
  if (currentSeason === "") {
    return false;
  }
  
  viewport.style.boxShadow = "0px 0px 40px 15px red";
  currentAlgae -= 5;

  setTimeout(function () {
    viewport.style.boxShadow = "none";
  }, 200);
}