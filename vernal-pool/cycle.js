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

function updatePool () {
  frogs_stat.innerText = "Frogs: " + currentFrogs + ", Tadpoles: " + currentTadpoles;
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
    let randomDisaster = Math.floor(Math.random() * 5);

    if (randomDisaster === 1) {
      
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