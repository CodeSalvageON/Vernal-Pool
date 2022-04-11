const cycleStore = localStorage.getItem("cycleStore-vernal");
const algaeStore = localStorage.getItem("algaeStore-vernal");

let currentSeason = "";
let currentAlgae = 0;
let currentFrogs = 0;
let currentTadpoles = 0;
let currentSalamanders = 0;
let currentEfts = 0;
let currentWaterTigers = 0;
let currentLarvae = 0;
let currentFairyShrimps = 0;
let currentTadpoleShrimps = 0;
let currentFairyEggs = 0;
let currentTadpoleEggs = 0;

let frogs_stat = document.getElementById("frogs-stat");
let salamander_stat = document.getElementById("salamander-stat");
let water_tiger_stat = document.getElementById("water-tiger-stat");
let fairy_shrimp_stat = document.getElementById("fairy-shrimp-stat");
let tadpole_shrimp_stat = document.getElementById("tadpole-shrimp-stat");
let algae_stat = document.getElementById("algae-stat");

let rain_modal = document.getElementById("rain-modal");
let close_rain = document.getElementById("close-rain");

let salamander_modal = document.getElementById("salamander-modal");
let close_salamander = document.getElementById("close-salamander");

let sun_modal = document.getElementById("sun-modal");
let close_sun = document.getElementById("close-sun");

let species_modal = document.getElementById("species-modal");
let close_species = document.getElementById("close-species");
let species_form = document.getElementById("species-form");
let spec_spec = document.getElementById("spec-spec");
let spec_am = document.getElementById("spec-am");

species_form.onsubmit = function () {
  event.preventDefault();

  if (spec_spec.value === "algae") {
    currentAlgae += parseInt(spec_am.value);
  }

  else if (spec_spec.value === "tshrimp") {
    currentTadpoleShrimps += parseInt(spec_am.value);
  }

  else if (spec_spec.value === "fshrimp") {
    currentFairyShrimps += parseInt(spec_am.value);
  }

  else if (spec_spec.value === "wtiger") {
    currentWaterTigers += parseInt(spec_am.value);
  }

  else if (spec_spec.value === "salv") {
    currentSalamanders += parseInt(spec_am.value);
  }

  spec_am.value = "";
  species_modal.style.display = "none";
}

let season_deny = true;

function skipSeason () {
  if (season_deny === false) {
    return false;
  }
  
  if (currentSeason === "spring") {
    season_deny = false;

    currentSeason = "summer";
    localStorage.setItem("cycleStore-vernal", "summer");

    $("#spring-vernal").fadeOut(3000);
    
    setTimeout(function () {
      season_deny = true;
      $("#summer-vernal").fadeIn(3000);
    }, 3000);
  }

  else if (currentSeason === "summer") {
    season_deny = false;

    currentSeason = "fall";
    localStorage.setItem("cycleStore-vernal", "fall");

    $("#summer-vernal").fadeOut(3000);
    
    setTimeout(function () {
      season_deny = true;
      $("#fall-vernal").fadeIn(3000);
    }, 3000);
  }

  else if (currentSeason === "fall") {
    season_deny = false;

    currentSeason = "winter";
    localStorage.setItem("cycleStore-vernal", "winter");

    $("#fall-vernal").fadeOut(3000);
    
    setTimeout(function () {
      season_deny = true;
      $("#winter-vernal").fadeIn(3000);
    }, 3000);
  }

  else if (currentSeason === "winter") {
    season_deny = false;

    currentSeason = "spring";
    localStorage.setItem("cycleStore-vernal", "spring");

    $("#winter-vernal").fadeOut(3000);
    
    setTimeout(function () {
      season_deny = true;
      $("#spring-vernal").fadeIn(3000);
    }, 3000);
  }
}

function hideAllModals () {
  extinction_modal.style.display = "none";
  stat_modal.style.display = "none";
  rain_modal.style.display = "none";
  salamander_modal.style.display = "none";
  sun_modal.style.display = "none";
  species_modal.style.display = "none";
}

function updatePool () {
  salamander_stat.innerText = "Salamanders: " + currentSalamanders + ", Efts: " + currentEfts;
  water_tiger_stat.innerText = "Water Tiger Beetles: " + currentWaterTigers + ", Larvae: " + currentLarvae;
  fairy_shrimp_stat.innerText = "Fairy Shrimp: " + currentFairyShrimps + ", Eggs: " + currentFairyEggs;
  tadpole_shrimp_stat.innerText = "Tadpole Shrimp: " + currentTadpoleShrimps + ", Eggs: " + currentTadpoleEggs;
  algae_stat.innerText = "Algae: " + currentAlgae;
}

function noFreakyMath () {
  if (currentAlgae < 1) {
    currentAlgae = 0;
  }

  if (currentFairyEggs < 1) {
    currentFairyEggs = 0;
  }

  if (currentTadpoleEggs < 1) {
    currentTadpoleEggs = 0;
  }

  if (currentEfts < 1) {
    currentEfts = 0;
  }

  if (currentLarvae < 1) {
    currentLarvae = 0;
  }

  if (currentFairyShrimps < 1) {
    currentFairyShrimps = 0;
  }

  if (currentTadpoleShrimps < 1) {
    currentTadpoleShrimps = 0;
  }

  if (currentSalamanders < 1) {
    currentSalamanders = 0;
  }

  if (currentWaterTigers < 1) {
    currentWaterTigers = 0;
  }
}

function thinGrowPopMath () {
  for (i = 0; i < currentAlgae/2; i++) {
    noFreakyMath();
    
    let netFairyRandom = Math.floor(Math.random() * 10);
    let netTadpoleRandom = Math.floor(Math.random() * 10);

    if (netFairyRandom === 0) {
      currentFairyEggs += 1;
      currentAlgae -= 1;
    }

    if (netTadpoleRandom === 0) {
      currentTadpoleEggs += 1;
      currentAlgae -= 1;
    }

    if (currentAlgae < currentFairyEggs) {
      currentFairyEggs -= 1;
    }

    if (currentTadpoleEggs > currentAlgae) {
      currentTadpoleEggs -= 1;
    }
  }

  let halved_shrimp = currentTadpoleShrimps + currentFairyShrimps;

  for (i = 0; i < halved_shrimp/2; i++) {
    noFreakyMath();

    let netFairyRandom = Math.floor(Math.random() * 100) - currentFairyShrimps;
    let netTadpoleRandom = Math.floor(Math.random() * 100) - currentTadpoleShrimps;

    if (netFairyRandom === 0) {
      currentEfts += 1;
      currentFairyShrimps -= 1;
      currentLarvae += 1;
      currentFairyShrimps -= 1;
    }

    if (netTadpoleRandom === 0) {
      currentEfts += 1;
      currentFairyShrimps -= 1;
      currentLarvae += 1;
      currentFairyShrimps -= 1;
    }

    if (currentFairyEggs < currentEfts) {
      currentEfts -= 1;
    }

    if (currentFairyEggs < currentLarvae) {
      currentLarvae -= 1;
    }

    if (currentTadpoleEggs < currentEfts) {
      currentEfts -= 1;
    }

    if (currentTadpoleEggs < currentLarvae) {
      currentLarvae -= 1;
    }
  }
}

function growthCycle () {
  if (currentTadpoleEggs > 0) {
    currentTadpoleEggs -= 1;
    currentTadpoleShrimps += 1;
  }

  if (currentFairyEggs > 0) {
    currentFairyEggs -= 1;
    currentFairyShrimps += 1;
  }

  if (currentEfts > 0) {
    currentEfts -= 1;
    currentSalamanders += 1;
  }

  if (currentLarvae > 0) {
    currentLarvae -= 1;
    currentWaterTigers += 1;
  }
}

function deathCycle () {
  currentTadpoleShrimps -= 1;
  currentFairyShrimps -= 1;
  currentSalamanders -= 1;
  currentWaterTigers -= 1;
}

function growPool () {
  let randomPool = Math.floor(Math.random() * 100);
  
  if (randomPool === 0) {
    let randomDisaster = Math.floor(Math.random() * 3);

    if (randomDisaster === 0) {
      hideAllModals();
      currentAlgae += 10;
      rain_modal.style.display = "block";
    }

    else if (randomDisaster === 1) {
      hideAllModals();
      currentSalamanders += 5;
      salamander_modal.style.display = "block";
    }

    else {
      hideAllModals();
      currentAlgae -= 5;
      sun_modal.style.display = "block";
    }
  }

  else {
    if (currentSeason === "spring") {
      currentAlgae += 1;
      thinGrowPopMath();
    }

    else if (currentSeason === "summer") {
      currentAlgae -= 1;
      thinGrowPopMath();
    }

    else if (currentSeason === "fall") {
      let randomFall = Math.floor(Math.random() * 3);

      if (randomFall === 0) {
        currentAlgae += 1;
        thinGrowPopMath();
      }

      else {
        currentAlgae += 0;
        thinGrowPopMath();
      }
    }

    else if (currentSeason === "winter") {
      // Do nothing; 
    }
  }

  updatePool();
}