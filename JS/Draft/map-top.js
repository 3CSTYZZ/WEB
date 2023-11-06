let maxPick = [
  "nuke",
  "ancient",
  "anubis",
  "inferno",
  "mirage",
  "vertigo",
  "overpass",
];

let mishaPick = [
  "nuke",
  "mirage",
  "anubis",
  "vertigo",
  "ancient",
  "overpass",
  "inferno",
];

let egorPick = [
  "nuke",
  "overpass",
  "anubis",
  "mirage",
  "inferno",
  "ancient",
  "vertigo",
];

function mapsCompare(picks) {
  if (picks[0].includes("nuke")) {
    console.log(`${picks[0]} - 7 point`);
  } else if (picks[1].includes("nuke")) {
    console.log(`${picks[1]} - 6 point`);
  } else if (picks[2].includes("nuke")) {
    console.log(`${picks[2]} - 5 point`);
  } else if (picks[3].includes("nuke")) {
    console.log(`${picks[3]} - 4 point`);
  } else if (picks[4].includes("nuke")) {
    console.log(`${picks[4]} - 3 point`);
  } else if (picks[5].includes("nuke")) {
    console.log(`${picks[5]} - 2 point`);
  } else if (picks[6].includes("nuke")) {
    console.log(`${picks[6]} - 1 point`);
  }
}

function mapsCompareFunc(picksFunc) {
  for (i = o; i < picksFunc.length; i++) {
    picksFunc.includes('nuke')
  }
}

mapsCompare(maxPick);
mapsCompare(mishaPick);
mapsCompare(egorPick);
