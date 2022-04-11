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
    }

    else if (currentSeason === "summer") {
      currentAlgae -= 1;
    }

    else if (currentSeason === "fall") {
      let randomFall = Math.floor(Math.random() * 1);

      if (randomFall === 0) {
        currentAlgae += 1;
      }

      else {
        currentAlgae += 0;
      }
    }

    else if (currentSeason === "winter") {
      // Do nothing; 
    }
  }

  updatePool();
}