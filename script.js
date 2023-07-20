var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  
  if (n == (x.length - 1)) {
    document.getElementsByTagName("button")[0];
  } else {
    document.getElementsByTagName("button")[0];
  }
  
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  
  // Hide the current tab:
  x[currentTab].style.display = "none";
  
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

// Define the state preferences with initial arrays of IDs
var statePreferences = {
  "Alabama": [
  "yesOcean",
  "smallMtns",
  "noDesert",
  "noForests",
  "noPrairie",
  "conservative",
  "veryRainy",
  "highHumid",
  "moderateSun",
  "noSnow",
  "hotSummer",
  "hotSpring",
  "warmFall",
  "warmWinter",
  "sparselyPopulated"],

  "Alaska": [
  "yesOcean",
  "largeMtns",
  "noDesert",
  "yesForests",
  "noPrairie",
  "conservative",
  "noRain",
  "moderateHumid",
  "noSun",
  "highSnow",
  "mildSummer",
  "mildSpring",
  "chillyFall",
  "freezingWinter",
  "sparselyPopulated"
],
    "Arizona": [
    "noOcean",
    "largeMtns",
    "yesDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "noRain",
    "noHumid",
    "highSun",
    "moderateSnow",
    "hotSummer",
    "warmSpring",
    "warmFall",
    "warmWinter",
    "bigCities"
  ],

  "Arkansas": [
    "noOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "veryRainy",
    "highHumid",
    "moderateSun",
    "noSnow",
    "hotSummer",
    "hotSpring",
    "warmFall",
    "warmWinter",
    "sparselyPopulated"
  ],

  "California": [
    "yesOcean",
    "largeMtns",
    "noDesert",
    "yesForests",
    "noPrairie",
    "liberal",
    "noRain",
    "noHumid",
    "highSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "warmFall",
    "warmWinter",
    "bigCities"
  ],
  
    "Colorado": [
    "noOcean",
    "largeMtns",
    "yesDesert",
    "yesForests",
    "yesPrairie",
    "mix",
    "noRain",
    "noHumid",
    "highSun",
    "highSnow",
    "warmSummer",
    "mildSpring",
    "chillyFall",
    "mildWinter",
    "bigCities"
  ],

  "Connecticut": [
    "yesOcean",
    "noMtns",
    "noDesert",
    "yesForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],
  
    "Delaware": [
    "yesOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "highHumid",
    "moderateSun",
    "noSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],

   "Florida": [
    "yesOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "mix",
    "veryRainy",
    "highHumid",
    "highSun",
    "noSnow",
    "hotSummer",
    "hotSpring",
    "warmFall",
    "warmWinter",
    "bigCities"
  ],

  "Georgia": [
    "yesOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "veryRainy",
    "highHumid",
    "moderateSun",
    "noSnow",
    "hotSummer",
    "hotSpring",
    "warmFall",
    "warmWinter",
    "bigCities"
  ],

  "Hawaii": [
    "yesOcean",
    "largeMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "liberal",
    "veryRainy",
    "highHumid",
    "moderateSun",
    "noSnow",
    "warmSummer",
    "hotSpring",
    "mildFall",
    "warmWinter",
    "sparselyPopulated"
  ],
  
  "Idaho": [
    "noOcean",
    "largeMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "noRain",
    "noHumid",
    "moderateSun",
    "highSnow",
    "mildSummer",
    "mildSpring",
    "chillyFall",
    "mildWinter",
    "sparselyPopulated"
  ],

  "Illinois": [
    "noOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],

  "Indiana": [
    "noOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "moderateRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],

  "Iowa": [
    "noOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "yesPrairie",
    "mix",
    "moderateRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "chillyFall",
    "freezingWinter",
    "sparselyPopulated"
  ],

  "Kansas": [
    "noOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "yesPrairie",
    "conservative",
    "noRain",
    "moderateHumid",
    "highSun",
    "moderateSnow",
    "hotSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "sparselyPopulated"
  ],

  "Kentucky": [
    "noOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "moderateRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "sparselyPopulated"
  ],

  "Louisiana": [
    "yesOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "veryRainy",
    "highHumid",
    "moderateSun",
    "noSnow",
    "hotSummer",
    "hotSpring",
    "warmFall",
    "warmWinter",
    "bigCities"
  ],

  "Maine": [
    "yesOcean",
    "smallMtns",
    "noDesert",
    "yesForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "moderateHumid",
    "noSun",
    "highSnow",
    "mildSummer",
    "mildSpring",
    "chillyFall",
    "freezingWinter",
    "sparselyPopulated"
  ],

  "Maryland": [
    "yesOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "highHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],

  "Massachusetts": [
    "yesOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],
  
  "Michigan": [
    "noOcean",
    "noMtns",
    "noDesert",
    "yesForests",
    "noPrairie",
    "mix",
    "moderateRain",
    "moderateHumid",
    "noSun",
    "moderateSnow",
    "warmSummer",
    "mildSpring",
    "chillyFall",
    "freezingWinter",
    "bigCities"
  ],

  "Minnesota": [
    "noOcean",
    "noMtns",
    "noDesert",
    "yesForests",
    "yesPrairie",
    "liberal",
    "noRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "mildSpring",
    "chillyFall",
    "freezingWinter",
    "bigCities"
  ],

  "Mississippi": [
    "yesOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "veryRainy",
    "highHumid",
    "moderateSun",
    "noSnow",
    "hotSummer",
    "hotSpring",
    "warmFall",
    "warmWinter",
    "sparselyPopulated"
  ],

  "Missouri": [
    "noOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "moderateRain",
    "highHumid",
    "moderateSun",
    "moderateSnow",
    "hotSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],

  "Montana": [
    "noOcean",
    "largeMtns",
    "noDesert",
    "noForests",
    "yesPrairie",
    "conservative",
    "noRain",
    "noHumid",
    "noSun",
    "highSnow",
    "mildSummer",
    "mildSpring",
    "chillyFall",
    "freezingWinter",
    "sparselyPopulated"
  ],

  "Nebraska": [
    "noOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "yesPrairie",
    "conservative",
    "noRain",
    "moderateHumid",
    "highSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "chillyFall",
    "mildWinter",
    "sparselyPopulated"
  ],

  "Nevada": [
    "noOcean",
    "largeMtns",
    "yesDesert",
    "noForests",
    "noPrairie",
    "liberal",
    "noRain",
    "noHumid",
    "highSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "sparselyPopulated"
  ],

  "New Hampshire": [
    "yesOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "moderateHumid",
    "noSun",
    "highSnow",
    "warmSummer",
    "mildSpring",
    "chillyFall",
    "freezingWinter",
    "sparselyPopulated"
  ],

  "New Jersey": [
    "yesOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],

  "New Mexico": [
    "noOcean",
    "largeMtns",
    "yesDesert",
    "noForests",
    "yesPrairie",
    "liberal",
    "noRain",
    "noHumid",
    "highSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "sparselyPopulated"
  ],

  "New York": [
    "yesOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "moderateHumid",
    "noSun",
    "moderateSnow",
    "warmSummer",
    "mildSpring",
    "chillyFall",
    "freezingWinter",
    "bigCities"
  ],

  "North Carolina": [
    "yesOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "moderateRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "hotSummer",
    "warmSpring",
    "warmFall",
    "warmWinter",
    "bigCities"
  ],

 "North Dakota": [
    "noOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "yesPrairie",
    "conservative",
    "noRain",
    "noHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "mildSpring",
    "chillyFall",
    "freezingWinter",
    "sparselyPopulated"
  ],

  "Ohio": [
    "noOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "noRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],

  "Oklahoma": [
    "noOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "yesPrairie",
    "conservative",
    "moderateRain",
    "moderateHumid",
    "highSun",
    "moderateSnow",
    "hotSummer",
    "warmSpring",
    "warmFall",
    "mildWinter",
    "sparselyPopulated"
  ],

  "Oregon": [
    "yesOcean",
    "largeMtns",
    "noDesert",
    "yesForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "noHumid",
    "noSun",
    "moderateSnow",
    "mildSummer",
    "warmSpring",
    "chillyFall",
    "mildWinter",
    "bigCities"
  ],

  "Pennsylvania": [
    "noOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "mix",
    "moderateRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],

 "Rhode Island": [
    "yesOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "sparselyPopulated"
  ],

  "South Carolina": [
    "yesOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "veryRainy",
    "highHumid",
    "highSun",
    "noSnow",
    "hotSummer",
    "hotSpring",
    "warmFall",
    "warmWinter",
    "sparselyPopulated"
  ],

  "South Dakota": [
    "noOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "yesPrairie",
    "conservative",
    "noRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "mildSpring",
    "chillyFall",
    "freezingWinter",
    "sparselyPopulated"
  ],
  
  "Tennessee": [
    "noOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "veryRainy",
    "highHumid",
    "highSun",
    "moderateSnow",
    "hotSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],

 "Texas": [
    "yesOcean",
    "smallMtns",
    "yesDesert",
    "noForests",
    "yesPrairie",
    "conservative",
    "noRain",
    "moderateHumid",
    "moderateSun",
    "noSnow",
    "hotSummer",
    "hotSpring",
    "warmFall",
    "warmWinter",
    "bigCities"
  ],

  "Utah": [
    "noOcean",
    "largeMtns",
    "yesDesert",
    "noForests",
    "noPrairie",
    "conservative",
    "noRain",
    "noHumid",
    "highSun",
    "highSnow",
    "warmSummer",
    "warmSpring",
    "chillyFall",
    "mildWinter",
    "sparselyPopulated"
  ],

  "Vermont": [
    "noOcean",
    "smallMtns",
    "noDesert",
    "yesForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "moderateHumid",
    "noSun",
    "highSnow",
    "warmSummer",
    "mildSpring",
    "chillyFall",
    "freezingWinter",
    "sparselyPopulated"
  ],

  "Virginia": [
    "yesOcean",
    "smallMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "mix",
    "moderateRain",
    "highHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "bigCities"
  ],

  "Washington": [
    "yesOcean",
    "largeMtns",
    "noDesert",
    "yesForests",
    "noPrairie",
    "liberal",
    "moderateRain",
    "moderateHumid",
    "noSun",
    "highSnow",
    "mildSummer",
    "warmSpring",
    "chillyFall",
    "mildWinter",
    "bigCities"
  ],

  "West Virginia": [
    "noOcean",
    "smallMtns",
    "noDesert",
    "yesForests",
    "noPrairie",
    "conservative",
    "moderateRain",
    "moderateHumid",
    "moderateSun",
    "moderateSnow",
    "warmSummer",
    "warmSpring",
    "mildFall",
    "mildWinter",
    "sparselyPopulated"
  ],

  "Wisconsin": [
    "noOcean",
    "noMtns",
    "noDesert",
    "noForests",
    "noPrairie",
    "mix",
    "noRain",
    "moderateHumid",
    "noSun",
    "moderateSnow",
    "warmSummer",
    "mildSpring",
    "chillyFall",
    "freezingWinter",
    "bigCities"
  ],

  "Wyoming": [
    "noOcean",
    "largeMtns",
    "noDesert",
    "noForests",
    "yesPrairie",
    "conservative",
    "noRain",
    "noHumid",
    "moderateSun",
    "highSnow",
    "mildSummer",
    "mildSpring",
    "chillyFall",
    "freezingWinter",
    "sparselyPopulated"
  ]

};

// Array to store the clicked option IDs
var clickedIDs = [];

// Update the state preferences based on the user's answers
document.getElementById("yesOcean").addEventListener("click", function() {
  clickedIDs.push("yesOcean");
  calculateResult();
});
document.getElementById("noOcean").addEventListener("click", function() {
  clickedIDs.push("noOcean");
  calculateResult();
});

document.getElementById("largeMtns").addEventListener("click", function() {
  clickedIDs.push("largeMtns");
  calculateResult();
});

document.getElementById("smallMtns").addEventListener("click", function() {
  clickedIDs.push("smallMtns");
  calculateResult();
});

document.getElementById("noMtns").addEventListener("click", function() {
  clickedIDs.push("noMtns");
  calculateResult();
});

document.getElementById("yesDesert").addEventListener("click", function() {
  clickedIDs.push("yesDesert");
  calculateResult();
});

document.getElementById("noDesert").addEventListener("click", function() {
  clickedIDs.push("noDesert");
  calculateResult();
});

document.getElementById("yesForests").addEventListener("click", function() {
  clickedIDs.push("yesForests");
  calculateResult();
});

document.getElementById("noForests").addEventListener("click", function() {
  clickedIDs.push("noForests");
  calculateResult();
});

document.getElementById("noPrairie").addEventListener("click", function() {
  clickedIDs.push("noPrairie");
  calculateResult();
});

document.getElementById("yesPrairie").addEventListener("click", function() {
  clickedIDs.push("yesPrairie");
  calculateResult();
});

document.getElementById("liberal").addEventListener("click", function() {
  clickedIDs.push("liberal");
  calculateResult();
});

document.getElementById("mix").addEventListener("click", function() {
  clickedIDs.push("mix");
  calculateResult();
});

document.getElementById("conservative").addEventListener("click", function() {
  clickedIDs.push("conservative");
  calculateResult();
});

document.getElementById("veryRainy").addEventListener("click", function() {
  clickedIDs.push("veryRainy");
  calculateResult();
});

document.getElementById("moderateRain").addEventListener("click", function() {
  clickedIDs.push("moderateRain");
  calculateResult();
});

document.getElementById("noRain").addEventListener("click", function() {
  clickedIDs.push("noRain");
  calculateResult();
});

document.getElementById("highHumid").addEventListener("click", function() {
  clickedIDs.push("highHumid");
  calculateResult();
});

document.getElementById("moderateHumid").addEventListener("click", function() {
  clickedIDs.push("moderateHumid");
  calculateResult();
});

document.getElementById("noHumid").addEventListener("click", function() {
  clickedIDs.push("noHumid");
  calculateResult();
});

document.getElementById("highSun").addEventListener("click", function() {
  clickedIDs.push("highSun");
  calculateResult();
});

document.getElementById("moderateSun").addEventListener("click", function() {
  clickedIDs.push("moderateSun");
  calculateResult();
});

document.getElementById("noSun").addEventListener("click", function() {
  clickedIDs.push("noSun");
  calculateResult();
});

document.getElementById("highSnow").addEventListener("click", function() {
  clickedIDs.push("highSnow");
  calculateResult();
});

document.getElementById("moderateSnow").addEventListener("click", function() {
  clickedIDs.push
});

document.getElementById("noSnow").addEventListener("click", function() {
  clickedIDs.push("noSnow");
  calculateResult();
});

document.getElementById("hotSummer").addEventListener("click", function() {
  clickedIDs.push("hotSummer");
  calculateResult();
});

document.getElementById("warmSummer").addEventListener("click", function() {
  clickedIDs.push("warmSummer");
  calculateResult();
});

document.getElementById("mildSummer").addEventListener("click", function() {
  clickedIDs.push("mildSummer");
  calculateResult();
});

document.getElementById("hotSpring").addEventListener("click", function() {
  clickedIDs.push("hotSpring");
  calculateResult();
});

document.getElementById("warmSpring").addEventListener("click", function() {
  clickedIDs.push("warmSpring");
  calculateResult();
});

document.getElementById("mildSpring").addEventListener("click", function() {
  clickedIDs.push("mildSpring");
  calculateResult();
});

document.getElementById("warmFall").addEventListener("click", function() {
  clickedIDs.push("warmFall");
  calculateResult();
});

document.getElementById("mildFall").addEventListener("click", function() {
  clickedIDs.push("mildFall");
  calculateResult();
});

document.getElementById("chillyFall").addEventListener("click", function() {
  clickedIDs.push("chillyFall");
  calculateResult();
});

document.getElementById("warmWinter").addEventListener("click", function() {
  clickedIDs.push("warmWinter");
  calculateResult();
});

document.getElementById("mildWinter").addEventListener("click", function() {
  clickedIDs.push("mildWinter");
  calculateResult();
});

document.getElementById("freezingWinter").addEventListener("click", function() {
  clickedIDs.push("freezingWinter");
  calculateResult();
});

document.getElementById("bigCities").addEventListener("click", function() {
  clickedIDs.push("bigCities");
  calculateResult();
});

document.getElementById("sparselyPopulated").addEventListener("click", function() {
  clickedIDs.push("sparselyPopulated");
  calculateResult();
});

// Add images and state food for each state
var stateDetails = {
  "Alabama": {
    image1: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/05/ccimage-shutterstock_528865210.jpg",
    image2: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f1/f4/e5/gulf-state-park-fis.jpg?w=700&h=500&s=1",
    image3: "https://image.cnbcfm.com/api/v1/image/105189731-GettyImages-487027082.jpg?v=1573745931&w=929&h=523&vtcrop=y",
    image4: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/cover-for-Places-to-visit-in-Alabama.jpg",
    stateFood: "Fried Green Tomatoes",
    statefoodImage: "https://cookingwithcocktailrings.com/wp-content/uploads/2021/07/Fried-Green-Tomatoes-with-Comeback-Sauce-42.jpg"
  },
  "Alaska": {
    image1: "https://img.theculturetrip.com/wp-content/uploads/2021/05/w6hdw2-e1621004765854.jpg",
    image2: "https://a.cdn-hotels.com/gdcs/production167/d1836/926c2e3b-cff2-452a-ac2d-35a5de175fc3.jpg",
    image3: "https://kelleyandcanterbury.com/wp-content/uploads/2016/10/winter-fun-1024x667.jpg",
    image4: "https://i.pinimg.com/originals/1a/63/34/1a6334e4dedfaa2a082e5b2964c3a931.jpg",
    stateFood: "King Crab",
    statefoodImage: "https://cdn1.matadornetwork.com/blogs/1/2020/11/alaskan-king-crab.jpg"
  },
  "Arizona": {
    image1: "https://www.ourescapeclause.com/wp-content/uploads/2021/03/shutterstock_691184395-768x512.jpg",
    image2: "https://fullsuitcase.com/wp-content/uploads/2021/05/Best-places-to-visit-in-Arizona-USA.jpg.webp",
    image3: "https://blog-www.pods.com/wp-content/uploads/2023/02/resized_FI_GettyImages-1288752517_Phoenix-AZ-skyline.jpg",
    image4: "https://cdn.outsideonline.com/wp-content/uploads/2018/11/20/outside-guide-grand-canyon_h.jpg",
    stateFood: "Sonoran Hot Dogs",
    statefoodImage: "https://culinaryginger.com/wp-content/uploads/Southwest-Sonoran-Hot-Dogs-8-720x720.jpg"
  },
    "Arkansas": {
    image1: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_102440464.jpg",
    image2: "https://lp-cms-production.imgix.net/2021-05/Arkansas_Buffalo_River.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
    image3: "https://img.theculturetrip.com/wp-content/uploads/2021/06/2d8fkwf.jpg",
    image4: "https://www.innoftheozarks.com/resourcefiles/mainimages/ozark-mountains-in-eureka-springs-top.jpg?version=7162022020502",
    stateFood: "Possum Pie",
    statefoodImage: "https://passthedessert.com/wp-content/uploads/2022/07/Arkansas-Possum-Pie-Recipe-Card.jpg"
  },
  "California": {
    image1: "https://www.travelinusa.us/wp-content/uploads/sites/3/2021/03/california-coast-road-trip.jpeg",
    image2: "https://www.planetware.com/wpimages/2019/12/california-in-pictures-beautiful-places-to-photograph-yosemite-valley.jpg",
    image3: "https://www.travelinusa.us/wp-content/uploads/sites/3/2015/12/citta-della-california.jpg",
    image4: "https://californiacrossings.com/wp-content/uploads/2021/10/california-redwood-parks-humboldt-sp-light.jpg",
    stateFood: "In-N-Out Burgers",
    statefoodImage: "https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/cttc160422074632_019.jpg?itok=EbAVToNT"
  },
  "Colorado": {
    image1: "https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2020/07/1140-rocky-mountain-national-park.jpg",
    image2: "https://www.mercedesoflittleton.com/blogs/1765/wp-content/uploads/2018/10/skiing.jpg",
    image3: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c7/27/eb/caption.jpg?w=700&h=500&s=1",
    image4: "https://www.worldatlas.com/upload/f1/78/14/shutterstock-1537552868.jpg",
    stateFood: "Rocky Mountain Oysters",
    statefoodImage: "https://www.gannett-cdn.com/-mm-/333c1271c2393e4d5375c5f38ce5fedd5ad275a2/c=0-122-2400-1478/local/-/media/2017/09/05/FortCollins/FortCollins/636401796624523144-FTC904-RockyMountainOysters011.JPG?width=2400&height=1356&fit=crop&format=pjpg&auto=webp"
  },
  "Connecticut": {
    image1: "https://bandwidthent.com/wp-content/uploads/2022/01/Explore-the-beauty-of-Connecticut.jpg",
    image2: "https://selectregistry.com/wp-content/uploads/2022/04/shutterstock_196029485.jpg",
    image3: "https://www.planetware.com/wpimages/2019/09/connecticut-in-pictures-most-beautiful-places-to-visit-downtown-hartford.jpg",
    image4: "https://www.roadaffair.com/wp-content/uploads/2021/08/west-cornwall-covered-bridge-connecticut-usa-shutterstock_1304309857.jpg",
    stateFood: "Lobster Rolls",
    statefoodImage: "https://drivemehungry.com/wp-content/uploads/2022/05/connecticut-lobster-roll-warm-lobster-roll-8.jpg"
  },
    "Delaware": {
    image1: "https://upload.travelawaits.com/ta/uploads/2021/04/bethany-beach-in-delaware6a3ee0-1024x657.jpg",
    image2: "https://www.cityofrehoboth.com/sites/default/files/beachboardwalk_intro.jpg",
    image3: "https://vdsbucket757.s3.amazonaws.com/wp-content/uploads/dbvg/aws/2019/02/23124002/Bethany-Beach-boardwalk_1.jpg",
    image4: "https://img.theculturetrip.com/wp-content/uploads/2015/04/14682810569_d9b1df4da2_k.jpg",
    stateFood: "Thrasher's Fries",
    statefoodImage: "https://visitsoutherndelaware.com/media/markets/so-del/images/listings/16/3f7c45ab9a9864028c45ff99c52fbdee.jpg?w=880&h=660&zoomfit=1"
  },
      "Florida": {
    image1: "https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/2016-10/HERO%201_shutterstock_153029399_Web72DPI.jpg?itok=RO5ip8r2",
    image2: "https://www.state.gov/wp-content/uploads/2022/01/shutterstock_469708088.jpg",
    image3: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/471000/471674-Miami.jpg",
    image4: "https://media.npr.org/assets/img/2021/09/29/ap21267733350977_custom-2b2cc5e99bc275d65d88afc250366b1d66edc569-s1100-c50.jpg",
    stateFood: "Key Lime Pie",
    statefoodImage: "https://www.bustlingabroad.com/wp-content/uploads/2019/03/Key-Lime-Pie-Wallpaper-For-Desktop.jpg"
  },
        "Georgia": {
    image1: "https://specials-images.forbesimg.com/imageserve/966370788/Savannah--Georgia--USA-Historic-Road/960x0.jpg?fit=scale",
    image2: "https://www.onlyinyourstate.com/wp-content/uploads/2020/01/46546902064_6d3f080ed7_k.jpg",
    image3: "https://a.cdn-hotels.com/gdcs/production114/d1629/63a8dbe5-e678-4fe4-957a-ad367913a3fa.jpg",
    image4: "https://savannahfirsttimer.com/wp-content/uploads/2021/11/SS_GA-Georgia-Coast_1200x630_TNY-1024x538.jpg",
    stateFood: "Peaches",
    statefoodImage: "https://www.pittmandavis.com/images/xl/pd-buy-georgia-peaches-022522.jpg?v=1"
  },
          "Hawaii": {
    image1: "https://i.natgeofe.com/k/f576c284-661a-4046-ba51-fa95699e1a8b/hawaii-beach_16x9.png",
    image2: "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Napali_0_1.jpg?itok=S0scQXWt",
    image3: "https://www.worldatlas.com/upload/9e/02/ab/shutterstock-273156107.jpg",
    image4: "https://www.andrewshoemaker.com/images/640/kaanapali-nights-sunset-palm-trees.jpg",
    stateFood: "Spam Musubi",
    statefoodImage: "https://takestwoeggs.com/wp-content/uploads/2022/05/Hawaiian-Spam-Musubi-Takestwoeggs-Final-Photography-1.jpg"
  },
"Idaho": {
    image1: "https://img-aws.ehowcdn.com/1280x/www.onlyinyourstate.com/wp-content/uploads/2022/09/Saddleback-Lakes.jpg",
    image2: "https://www.fodors.com/wp-content/uploads/2020/01/IdahoNaturalWonders__HERO_180614jjw-0984.jpg",
    image3: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/12/Wallace-Idaho-with-snow-and-mountain-in-background.jpg",
    image4: "https://visitidaho.org/content/uploads/2019/01/180616jjw-0711.jpg",
    stateFood: "Potatoes",
    statefoodImage: "https://www.allrecipes.com/thmb/fme42jb2JyVMGWrUBiYl5p_Lw8Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8637378-605e049301e9459ca6755c52196f98c7.jpg"
  },
    "Illinois": {
    image1: "https://media.timeout.com/images/105658075/image.jpg",
    image2: "https://www.ilfarmandrecland.com/wp-content/uploads/2015/08/aboutus1.jpg",
    image3: "https://publish.purewow.net/wp-content/uploads/sites/2/2021/06/most-beautiful-places-in-illinois-cat.jpg",
    image4: "https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/09/19114902/Screen-Shot-2020-09-22-at-10.24.44-AM.png",
    stateFood: "Deep Dish Pizza",
    statefoodImage: "https://www.simplyrecipes.com/thmb/0pVK4YpDJNoXPEAchI_OSDE0UZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chicago-Deep-Dish-Pizza-LEAD-5-f8c04d3d77b24e479bbb1502758a5ed1.jpg"
  },
"Indiana": {
    image1: "https://www.onlyinyourstate.com/wp-content/uploads/2020/05/Flickr_Rain0975-1.jpg",
    image2: "https://lp-cms-production.imgix.net/2019-06/GettyImages-184978280_medium.jpg",
    image3: "https://localist-images.azureedge.net/photos/36889176346674/card/d06243c9c73e4a6feb97687920961e115c8d72cd.jpg",
    image4: "https://cdn.recreation.gov/public/2022/03/02/16/49/2767_3e5a24d7-9851-47b1-a4ee-aa136d36cfaa_1440.jpg",
    stateFood: "Hoosier Pie",
    statefoodImage: "https://goldbelly.imgix.net//uploads/showcase_media_asset/image/134872/hoosier-sugar-cream-pie.7d5a730ccac566ff6c2073bf632c1d31.jpg"
  },
  "Iowa": {
    image1: "https://rogersphotography.com/wp-content/uploads/2014/04/773A5700-1.jpg",
    image2: "https://keepiowabeautiful.org/wp-content/uploads/2020/01/Justin-Rogers-2017-3.jpg",
    image3: "https://www.busytourist.com/wp-content/uploads/2021/07/Things-To-Do-In-Iowa.jpg",
    image4: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/iowa-beauty-at-sunset-mountain-dreams.jpg",
    stateFood: "Pork Tenderloin Sandwiches",
    statefoodImage: "https://www.iowafoodandfamily.com/filesimages/Recipes/classic_iowa_pork_tenderloin.jpg"
  },
"Kansas": {
    image1: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_53911743_4000x2200.jpg?crop=0%2C0%2C4000%2C2200&wid=4000&hei=2200&scl=1.0",
    image2: "https://www.worldatlas.com/r/w1200/upload/ad/4b/f3/shutterstock-655162615.jpg",
    image3: "https://fox4kc.com/wp-content/uploads/sites/16/2022/02/GettyImages-536748783.jpg?w=2560&h=1440&crop=1",
    image4: "https://globalgrasshopper.com/wp-content/uploads/2020/11/Castle-Rock-State-Park-kansas.jpg",
    stateFood: "Kansas City BBQ",
    statefoodImage: "https://www.joeskc.com/cdn/shop/products/Send-Joes-KC-burnt-ends-and-pulled-pork_2048x2048.jpg?v=1573238438"
  },
  "Kentucky": {
    image1: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_158580764.jpg",
    image2: "https://www.onlyinyourstate.com/wp-content/uploads/2021/04/GettyImages-1146250209-1.jpg",
    image3: "https://1.img-dpreview.com/files/p/TS560x560~forums/54268718/36203ca5d3234b238b0360c2fd7c1b25",
    image4: "https://www.letsgolouisville.com/wp-content/uploads/2021/08/Clock-and-Street-View-in-Downtown-Louisville-Kentucky.jpg",
    stateFood: "Hot Brown",
    statefoodImage: "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/6/15/0/CC_Kentucky-Hot-Brown-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1358448753567.jpeg"
  },
"Louisiana": {
    image1: "https://a.cdn-hotels.com/gdcs/production29/d939/13039eb6-70c6-4448-b0b4-1b5902919486.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    image2: "https://static.wixstatic.com/media/43ed3e_708a99f805a94f22a46eeb2754aea8a0~mv2_d_4200_2800_s_4_2.jpg/v1/fill/w_2500,h_1666,al_c/43ed3e_708a99f805a94f22a46eeb2754aea8a0~mv2_d_4200_2800_s_4_2.jpg",
    image3: "https://riversidelimos.com/wp-content/uploads/2016/10/louisiana.jpg.webp",
    image4: "https://i.iheart.com/v3/re/new_assets/63d0253d7d2be17a0b8b6b76?ops=contain(1480,0)",
    stateFood: "Gumbo",
    statefoodImage: "https://www.thespruceeats.com/thmb/dheYRSNYAXCaNCmEYLJ_ypP3TRg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/louisiana-creole-gumbo-5210060-hero-01-4308b1a68e0d4d799c2e0b872ea6e331.jpg"
  },
  "Maine": {
    image1: "https://npr.brightspotcdn.com/dims4/default/e675372/2147483647/strip/true/crop/2000x1333+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fmpbn%2Ffiles%2F201908%2Fwest_quoddy_head_light.jpg",
    image2: "https://cdn.britannica.com/92/152792-050-8E4B485F/Bar-Harbor-Maine.jpg",
    image3: "https://cdn.elebase.io/dbcc75a2-4b9f-4a0e-8e4b-cfa273624e10/27340e3f-c735-4ff2-a36d-58bb4b6fcdbc-vtm701882dd5eb7c2a3b.jpg",
    image4: "https://m.psecn.photoshelter.com/img-get/I0000kFLYpJ7cJCc/s/1200/I0000kFLYpJ7cJCc.jpg",
    stateFood: "Lobster",
    statefoodImage: "https://spoonuniversity.com/wp-content/uploads/sites/81/2016/06/l-1024x10221-1024x10222-1024x764.jpg"
  },
  "Maryland": {
    image1: "https://www.visitmaryland.org/sites/default/files/styles/feature_video_s/public/legacy_images/motoxdms-instagram-4774451330.jpg?itok=CsZdyCF8",
    image2: "https://www.historicinnsofannapolis.com/resourcefiles/mainimages/downtown-annapolis.jpg?version=4092023221338",
    image3: "https://assets3.thrillist.com/v1/image/3058363/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg",
    image4: "https://i0.wp.com/morethanjustparks.com/wp-content/uploads/2022/12/Shutterstock_723391945.jpg?resize=1100%2C733&ssl=1",
    stateFood: "Crab Cakes",
    statefoodImage: "https://hostthetoast.com/wp-content/uploads/2013/05/Maryland-Crab-Cakes-022.jpg"
  },
  "Massachusetts": {
    image1: "https://www.emeraldcoastmagazine.com/content/uploads/data-import/sh/shutterstock316730897cc.jpg",
    image2: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_1038059083.jpg",
    image3: "https://www.tripsavvy.com/thmb/2Mc26hcTFHdL4TIhbDppkU0OX9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/autumn-in-the-berkshires-region-of-massachusetts-487506926-320f78e82a044a2d8a97610adfd3b82d.jpg",
    image4: "https://www.allpointslimoservice.com/assets/5-best-winter-day-trips-to-take-in-massachusetts.jpg",
    stateFood: "Clam Chowder",
    statefoodImage: "https://newengland.com/wp-content/uploads/legacy_cms_images/8725.jpg"
  },
"Michigan": {
    image1: "https://www.michigan.org/sites/default/files/styles/image_main_content_desktop/public/legacy_images/20SMT002_0.jpg?itok=J3qvGwTn",
    image2: "https://wallpaperaccess.com/full/1362308.jpg",
    image3: "https://www.awesomemitten.com/wp-content/uploads/2021/03/About-Mackinac-Island-Michigan.png",
    image4: "https://upload.travelawaits.com/ta/uploads/2021/04/d0e5d5877cc6534a0f3ff64943115d0e5d5-800x667.jpg",
    stateFood: "Coney Dogs",
    statefoodImage: "https://www.tasteatlas.com/images/dishes/99b5d8e51f1d4ccab2a68159ce976e66.jpg"
  },
  "Minnesota": {
    image1: "https://www.exploreminnesota.com/sites/default/files/listing_images/921ddb67fc4bad9b81110300919ec6c3260d3ce5_4.jpg",
    image2: "https://tourscanner.com/blog/wp-content/uploads/2022/01/things-to-do-in-Minneapolis.jpg",
    image3: "https://img.apmcdn.org/b774acae503de755f916b63809de58ad787e0934/widescreen/5a4125-20130124-cold-wx1.jpg",
    image4: "https://cdn.minnesotamonthly.com/wp-content/uploads/sites/85/2017/10/Autumn-Road.jpg",
    stateFood: "Hotdish",
    statefoodImage: "https://www.emmymade.com/wp-content/uploads/2021/09/hot_dish_closeup2-scaled.jpeg"
  },
"Mississippi": {
    image1: "https://traveltipsguides.com/wp-content/uploads/2021/04/missisiapi.jpg",
    image2: "https://i.pinimg.com/originals/bb/fd/7b/bbfd7b83ad0118ae9102b750ab3864c7.jpg",
    image3: "https://www.planetware.com/wpimages/2020/01/mississippi-in-pictures-beautiful-places-to-photograph-natchez-trace-cypress-swamp.jpg",
    image4: "https://assets.vogue.com/photos/593ebaa6b2e48a70b166c571/master/w_2000,h_2000,c_limit/00-tout-mississippi-gulf-coast-travel-guide.jpg",
    stateFood: "Fried Catfish",
    statefoodImage: "https://www.sidechef.com/recipe/2af08a90-0366-4940-a087-8eb04bdb337a.jpeg?d=1408x1120"
  },
"Missouri": {
    image1: "https://www.extraspace.com/wp-content/uploads/2020/06/best-neighborhoods-st-louis-singles-young-professionals.jpg",
    image2: "https://images.contentstack.io/v3/assets/bltba617d00249585dc/bltb1a2d87f88d97bec/60ef6b8e2a120025e5846f6c/hartfordbranson-heromobile-1440x1440.jpg?format=pjpg&auto=webp&disable=upscale&quality=70&width=960&height=960&fit=crop",
    image3: "https://globalgrasshopper.com/wp-content/uploads/2020/11/Table-Rock-Lake.jpg",
    image4: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_504117472.jpg",
    stateFood: "Toasted Ravioli",
    statefoodImage: "https://static.onecms.io/wp-content/uploads/sites/39/2012/06/20222115/R160110_3.jpg"
  },
"Montana": {
    image1: "https://globalgrasshopper.com/wp-content/uploads/2020/12/The-most-beautiful-places-to-visit-in-Montana.jpg",
    image2: "https://cdn.skimag.com/wp-content/uploads/2018/01/ski_spo_montana_wf_mt.jpg?width=730",
    image3: "https://img.theculturetrip.com/wp-content/uploads/2020/08/b6jt7x.jpg",
    image4: "https://s27363.pcdn.co/wp-content/uploads/2019/09/Glacier-for-Facebook.jpg.optimal.jpg",
    stateFood: "Huckleberry Pie",
    statefoodImage: "https://cdn.shopify.com/s/files/1/1013/1574/t/2/assets/homepage_featured_box_2_image.jpg?v=86818090188052704531445967996"
  },
"Nebraska": {
    image1: "https://globalgrasshopper.com/wp-content/uploads/2021/01/Chimney-Rock-National-Historic-Site.jpg",
    image2: "https://www.onlyinyourstate.com/wp-content/uploads/2015/11/9950194525_ae99dd95e4_h.jpg",
    image3: "https://www.planetware.com/wpimages/2019/12/nebraska-in-pictures-beautiful-places-to-photograph-scotts-bluff-national-monument.jpg",
    image4: "https://www.nebraskatravelerguide.com/wp-content/uploads/2017/12/170811_Sandhills-Open-Road-Challenge_AJD_8635_desktop.jpg",
    stateFood: "Runzas",
    statefoodImage: "https://visitnebraska.com/sites/default/files/listing_images/profile/1057/runza.png"
  },
"Nevada": {
    image1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/01/00/2b/the-strip.jpg?w=400&h=300&s=1",
    image2: "https://cdn.britannica.com/74/116674-050-011FCB62/Wheeler-Peak-Great-Basin-National-Park-Nev.jpg",
    image3: "https://globalgrasshopper.com/wp-content/uploads/2021/01/The-most-beautiful-places-to-visit-in-Nevada.jpg",
    image4: "https://assets3.thrillist.com/v1/image/3115708/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
    stateFood: "Prime Rib",
    statefoodImage: "https://www.reviewjournal.com/wp-content/uploads/2018/04/10395624_web1_thinkstockphotos-525626245.jpg"
  },
"New Hampshire": {
    image1: "https://newenglandwithlove.com/wp-content/uploads/2021/04/shutterstock_1195418272.jpg",
    image2: "https://www.worldatlas.com/upload/31/55/67/shutterstock-646111237-1.jpg",
    image3: "https://www.carryonchronicles.com/wp-content/uploads/2021/02/new-hampshire-in-winter.png",
    image4: "https://www.tripsavvy.com/thmb/UdqDCu4kX0lCfZBsFe15yOlf3f0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/autumn-sunrise-95724134-4b85a2164e1a4c0a86a7b89c40d86495.jpg",
    stateFood: "Apple Cider Donuts",
    statefoodImage: "https://img-aws.ehowcdn.com/700x/www.onlyinyourstate.com/wp-content/uploads/2022/08/cider-bellies-doughnuts.v1.jpg"
  },
"New Jersey": {
    image1: "https://publish.purewow.net/wp-content/uploads/sites/2/2021/10/most-beautiful-places-in-new-jersey-paterson-great-falls.jpg?fit=728%2C921",
    image2: "https://cdn.thecrazytourist.com/wp-content/uploads/2015/09/Ventnor-City-Beach-New-Jersey.jpg",
    image3: "https://img.money.com/2022/09/BPL22-Jersey-City-New-Jersey-10.jpg?quality=85",
    image4: "https://s7.bluegreenvacations.com/is/image/BGV/new-jersey-atlantic-city-steel-pier-ferris-wheel?$bg2-hero-lg$&crop=0,0,2000,1289&anchor=1000,644",
    stateFood: "Pork Roll",
    statefoodImage: "https://www.seriouseats.com/thmb/eUeEqZHW6ESUau5Co5Xc9lMd-X4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__09__20140921-pork-roll-white-rose-complete-drew-lazor-1059973ffb97410e821451ebab017119.jpg"
  },
"New Mexico": {
    image1: "https://i.pinimg.com/736x/96/9a/48/969a483035c726b8dc053bc5e27e972c--navajo-nation-san-juan.jpg",
    image2: "https://www.worldatlas.com/upload/2a/b3/09/shutterstock-1462333493.jpg",
    image3: "https://www.jasminealley.com/wp-content/uploads/2022/08/bandelier-national-monument-cliff-dwellings.jpg",
    image4: "https://www.onlyinyourstate.com/wp-content/uploads/2020/04/GettyImages-590099681.jpg",
    stateFood: "Enchiladas",
    statefoodImage: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/newmexico/True_Recipes_Hero_Image_16x9_Fixed_Ratio_ebfb0b7c-92cf-4b16-8181-48c723e7c68e.png"
  },
"New York": {
    image1: "https://cdn.luxatic.com/wp-content/uploads/2020/11/Most-Beautiful-New-York-Parks.jpg",
    image2: "https://globalgrasshopper.com/wp-content/uploads/2020/12/The-most-beautiful-places-to-visit-in-New-York-State.jpg",
    image3: "https://www.planetware.com/wpimages/2021/11/new-york-catskills-things-to-do-north-south-lake-view.jpg",
    image4: "https://static.wixstatic.com/media/dec73f_19ed616d156143748a3e80cf0aed5494~mv2.jpeg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dec73f_19ed616d156143748a3e80cf0aed5494~mv2.jpeg",
    stateFood: "Pastrami",
    statefoodImage: "https://d2zyb4ugwufqpc.cloudfront.net/media/catalog/product/cache/dbb20457cdcf4cbec19d1c19a7360279/p/a/pastramitight.jpg"
  },
"North Carolina": {
    image1: "https://backroadramblers.com/wp-content/uploads/2021/10/things-to-do-on-the-blue-ridge-parkway-dp.jpeg",
    image2: "https://a.cdn-hotels.com/gdcs/production163/d1637/d88182c6-36a9-4dd3-8bd1-59cc55c9352c.jpg",
    image3: "https://share.america.gov/wp-content/uploads/2016/02/North-Carolina-Outer-Banks-at-sunrise-ThinkstockPhotos-465546636.jpg",
    image4: "https://www.onlyinyourstate.com/wp-content/uploads/2016/06/13173203_1740001066222790_3586605053563407052_o.jpg",
    stateFood: "Pulled Pork BBQ",
    statefoodImage: "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/6/15/1/CC_North-Carolina-Pulled-Pork-BBQ-Sandwich-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1358448752253.jpeg"
  },
"North Dakota": {
    image1: "https://www.planetware.com/wpimages/2019/07/north-dakota-in-pictures-most-beautiful-places-to-visit-theodore-roosevelt-national-park.jpg",
    image2: "https://365traveler.com/wp-content/uploads/2022/05/NORTH-DAKOTA-NPS-1274x850.jpeg",
    image3: "https://cdn.britannica.com/85/115485-050-91FE0364/Little-Missouri-River-Theodore-Roosevelt-National-Park.jpg",
    image4: "https://www.shopnd.com/wp-content/uploads/2022/03/1A3A0947.jpg",
    stateFood: "Cheese Buttons",
    statefoodImage: "https://prairiecalifornian.com/wp-content/uploads/2020/04/North-Dakota-German-Food-2-960x640-1.jpg"
  },
"Ohio": {
    image1: "https://www.ohiorealtitle.com/wp-content/uploads/2022/05/visiting-ohio-1.jpg",
    image2: "https://thelakehouseinn.com/wp-content/uploads/2020/09/GettyImages-647455588-1500x609.jpg",
    image3: "https://cdn.outsideonline.com/wp-content/uploads/2022/04/brandywine-falls-cuyahoga_h.jpg",
    image4: "https://img.theculturetrip.com/wp-content/uploads/2015/11/Ohio-%C2%A9-Kenneth-Sponsler-Shutterstock.com_.jpg",
    stateFood: "Cincinnati Chili",
    statefoodImage: "https://i.insider.com/5d8923d82e22af29445c2562?width=600&format=jpeg&auto=webp"
  },
"Oklahoma": {
    image1: "https://www.oklahoman.com/gcdn/authoring/2016/01/26/NOKL/ghnewsok-OK-5474860-6b349818.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp",
    image2: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-08/a5b3afbf601c9b7cdd51f9390ec04621.jpeg?h=e07dedd2&itok=u39hYxg5",
    image3: "https://d1pk12b7bb81je.cloudfront.net/thumbor/ZbRs967NI195EWyD4nBXsIv_YRw=/adaptive-fit-in/800x800/https://d1pk12b7bb81je.cloudfront.net/images/photos/1289047083-riverrapids.jpg",
    image4: "https://www.onlyinyourstate.com/wp-content/uploads/2017/07/ok706-talimena.jpg",
    stateFood: "Fried Onion Burgers",
    statefoodImage: "https://www.seriouseats.com/thmb/naUL3asafVlR1YnTi2uCpgPAdQM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210607-OKONIONBURGERS-JANJIGIAN-seriouseats-1ff54150234c421fa78a71da44ef1f6d.jpg"
  },
"Oregon": {
    image1: "https://media.architecturaldigest.com/photos/57bb22cdc7a54e3f0c117904/16:9/w_2560%2Cc_limit/portland-travel-guide.jpg",
    image2: "https://travelmedford.objects.liquidweb.services/photos/3072-shutterstock_111639713.jpg",
    image3: "https://i0.wp.com/embracesomeplace.com/wp-content/uploads/2020/09/DSC00753-1.jpg?w=1100&ssl=1",
    image4: "https://publish.purewow.net/wp-content/uploads/sites/2/2021/06/most-beautiful-places-in-oregon-cat.jpg",
    stateFood: "Marionberry Pie",
    statefoodImage: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Oregon-s-Best-Marionberry-Pie_EXPS_FTTMZJ21_62173_E03_04_9b.jpg"
  },
"Pennsylvania": {
    image1: "https://www.planetware.com/wpimages/2020/01/pennsylvania-in-pictures-beaufiful-places-to-photograph-delaware-water-gap.jpg",
    image2: "https://blog-www.pods.com/wp-content/uploads/2023/03/resized_FI_GettyImages-1340242872_view-overlooking-Benjamin-Franklin-Parkway-in-Philadelphia-PA.jpg",
    image3: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xMDk2MDQyMC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcyNTAyNTEyN30.QZLaO3CnLp96v_09wfeY4IMTCjzdwi_BR1azSrH-woM/img.jpg?width=980",
    image4: "https://www.aroundtheworldl.com/wp-content/uploads/2019/01/DSC05271.jpg.webp",
    stateFood: "Cheesesteak",
    statefoodImage: "https://www.onlyinyourstate.com/wp-content/uploads/2021/02/1-42.jpg"
  },
"Rhode Island": {
    image1: "https://img.theculturetrip.com/wp-content/uploads/2021/05/2aycnxn-e1625478233154.jpg",
    image2: "https://www.worldatlas.com/r/w768/upload/c1/ec/3b/shutterstock-498383869.jpg",
    image3: "https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/2018-09/ccba5b524123dd832ca95f8b6542f597.jpeg?itok=W0SaAVQq",
    image4: "https://www.visitri.com/adservimage/14011.jpg",
    stateFood: "Clam Cakes",
    statefoodImage: "https://www.saveur.com/uploads/2019/03/18/23INXIQ5OEYTZ5JWZYIRRIBKU4.jpg?auto=webp"
  },
"South Carolina": {
    image1: "https://a.cdn-hotels.com/gdcs/production146/d1309/4eea23eb-94f9-4369-8a52-2f9d41682fe7.jpg",
    image2: "https://selectregistry.com/wp-content/uploads/2021/05/shutterstock_576533359.jpg",
    image3: "https://www.onlyinyourstate.com/wp-content/uploads/2015/03/Screen-Shot-2015-03-23-at-9.22.42-AM.png",
    image4: "https://www.charlestoncvb.com/assets/images/home/slider/history.jpg",
    stateFood: "Shrimp & Grits",
    statefoodImage: "https://www.cameronsseafood.com/wp-content/uploads/2019/02/shrimpandgrits.jpg"
  },
"South Dakota": {
    image1: "https://fullsuitcase.com/wp-content/uploads/2019/06/Mount-Rushmore-National-Memorial.jpg",
    image2: "https://cdn.britannica.com/31/220731-050-46C0411B/sunset-Badlands-National-Park-South-Dakota.jpg",
    image3: "https://www.planetware.com/wpimages/2023/04/south-dakota-top-attractions-intro-paragraph-bison-custer-hills.jpg",
    image4: "https://assets-global.website-files.com/6197b10b76367efbca805cf2/6197b10b76367e1ef5805e71_North%20Dakota.png",
    stateFood: "Chislic",
    statefoodImage: "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/6/15/0/CC_Chislic-South-Dakota-Cubed-Meat-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1358448858797.jpeg"
  },
"Tennessee": {
    image1: "https://www.visitmysmokies.com/wp-content/uploads/2019/05/sunrise-in-the-smoky-mountains.jpg",
    image2: "https://media.istockphoto.com/id/694064514/photo/nashville-tennessee-usa.jpg?s=612x612&w=0&k=20&c=a-pw9x5tVcLMFyo1LdvrETOvBAzkH0rhl2rMn9xHYtM=",
    image3: "https://globalgrasshopper.com/wp-content/uploads/2021/01/Big-South-Fork.jpg",
    image4: "https://www.planetware.com/wpimages/2022/01/tennessee-best-waterfalls-fall-creek-falls.jpg",
    stateFood: "Hot Chicken",
    statefoodImage: "https://cdn.vox-cdn.com/thumbor/LtGCISZrGbQdvblGKOb1BS2poyE=/64x89:1676x1147/1200x900/filters:focal(777x873:1051x1147)/cdn.vox-cdn.com/uploads/chorus_image/image/59031287/hattiebs_chicken1.0.0.20.jpg"
  },
"Texas": {
    image1: "https://media.istockphoto.com/id/949337264/photo/texas-bluebonnet-field-blooming-in-the-spring-by-a-lake-at-sunset.jpg?s=612x612&w=0&k=20&c=x8Sdaq-UlFhJBqhgHZpp61U3YSS9qfzgSFlVNcdgdn0=",
    image2: "https://static.spacecrafted.com/cc4af4857a464d0783fef63a8e3708e7/i/f1968813b6b243c5879b9e1688ab3581/1/4SoifmQp45JMgBnHp7ed2/caprock.jpg",
    image3: "https://www.busytourist.com/wp-content/uploads/2020/06/river-walk-san-antonio.jpg.webp",
    image4: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-05/e754226186cd76f256d8d8c95232bec7.jpeg?h=4362216e&itok=ucBTpMBL",
    stateFood: "BBQ Brisket",
    statefoodImage: "https://www.tasteofthesouthmagazine.com/wp-content/uploads/2014/05/TexasStyleBeefBrisketR.jpg"
  },
"Utah": {
    image1: "https://d11vyokdyewbcr.cloudfront.net/2168785_large_8e87ceeb.jpg",
    image2: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_766585558.jpg",
    image3: "https://img.theculturetrip.com/wp-content/uploads/2021/04/sunset-at-bryce-canyon-national-park-utah.jpg",
    image4: "https://cdn.skimag.com/wp-content/uploads/2020/10/ski1120-rgw11-parkcity-courtesyjohnentwistle.jpg",
    stateFood: "Utah Scones",
    statefoodImage: "https://hips.hearstapps.com/hmg-prod/images/delish-23-03-29-utahscones-243-ls-lead-64343cbaee7d6.jpg?resize=1200:*"
  },
"Vermont": {
    image1: "https://globalgrasshopper.com/wp-content/uploads/2021/01/Montpelier.jpg",
    image2: "https://newengland.com/wp-content/uploads/legacy_media_photos/26444.jpg",
    image3: "https://vagabondish.com/wp-content/uploads/stowe-winter-lodge.jpg",
    image4: "https://edsonhill.com/wp-content/uploads/2019/01/stowe-skiing.jpg",
    stateFood: "Maple Syrup",
    statefoodImage: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F02%2F13%2Fmaple-sugar-candy-video-hero-2000.jpg"
  },
"Virginia": {
    image1: "https://i.pinimg.com/originals/33/a7/d4/33a7d4ca9e9a30c6d3810ccaef1b1e08.jpg",
    image2: "https://visitalexandria.com/wp-content/uploads/2022/10/Holiday-Magic-CREDIT-Chris-Bridner-for-Visit-Alexandria-2-2100x1400-d1ef1140-0cea-4552-8e0c-78460cce79d7.jpg",
    image3: "https://res.cloudinary.com/simpleview/image/upload/v1521559866/clients/virginiabeachva/144_3_2190_jpeg_8ad0a32a-68f9-498f-a056-e59b7c9c452b.jpg",
    image4: "https://www.arlingtonmagazine.com/content/uploads/2020/04/Old-Rag-View-Overlook_Lukas-Schlagenhauf.jpg",
    stateFood: "Virginia Ham",
    statefoodImage: "https://s3.amazonaws.com/cdn.smithfieldmarketplace.com/images/uploads/category_81_8150.jpg"
  },
"Washington": {
    image1: "https://assets3.thrillist.com/v1/image/3049056/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg",
    image2: "https://www.jasminealley.com/wp-content/uploads/2019/07/kerry-park-view-1440x961.jpg",
    image3: "https://img.theculturetrip.com/wp-content/uploads/2020/07/leavenworth-washington-state.jpg",
    image4: "https://explorenowornever.com/wp-content/uploads/2021/07/snoqualmie-falls-washington.jpg",
    stateFood: "Cedar Planked Salmon",
    statefoodImage: "https://media1.popsugar-assets.com/files/thumbor/V9cFdlahHV6Nr0xE3AgZcc8rpSU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/06/19/817/n/1922195/82e88d0ee86eb49d_washington-cedar-plank-salmon/i/Washington-Cedar-Plank-Grilled-Salmon.jpg"
  },
"West Virginia": {
    image1: "https://www.onlyinyourstate.com/wp-content/uploads/2017/11/new-river-gorge-1377061_960_720.jpg",
    image2: "https://a.cdn-hotels.com/gdcs/production97/d1270/6d881c80-cfa9-4564-abce-bb31588c1446.jpg",
    image3: "https://globalgrasshopper.com/wp-content/uploads/2021/01/Babcock-State-Park.jpg",
    image4: "https://www.planetware.com/wpimages/2020/01/west-virginia-in-pictures-beautiful-places-to-photograph-potomac-river.jpg",
    stateFood: "Pepperoni Rolls",
    statefoodImage: "https://www.allrecipes.com/thmb/TYlII6UjjYSISWrWJi2DxN6UNq8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/187812-pepperoni-rolls-mfs-4x3-085--141f8c9cea29451c98e9413654bbf1fc.jpg"
  },
"Wisconsin": {
    image1: "https://img.theculturetrip.com/wp-content/uploads/2020/08/devils-lake-state-park-wisconsin.jpg",
    image2: "https://fwiw.imgix.net/wp-content/uploads/sites/3/2023/03/UNN-FEATURED-IMAGE-2-1.png?w=1400&fm=webp",
    image3: "https://paulinaontheroad.com/wp-content/uploads/2019/09/wisonsin-An-Early-Winter-Wonderland-Morning.jpg",
    image4: "https://media.istockphoto.com/id/963549134/photo/milwaukee-wisconsin-usa-skyline.jpg?s=612x612&w=0&k=20&c=cAOi63s-PYhRignps1k8JyH-s04r0QAR-3bUWTDxkaw=",
    stateFood: "Cheese Curds",
    statefoodImage: "https://d1f28u9l1tudce.cloudfront.net/menu-stories/beb-int-curds.jpg"
  },
"Wyoming": {
    image1: "https://img-aws.ehowcdn.com/1280x/www.onlyinyourstate.com/wp-content/uploads/2016/01/315-e1458990339270.jpg",
    image2: "https://www.kunde.com/assets/client/Image/istock-1162854296.jpg",
    image3: "https://travelwyoming.com/wp-content/uploads/2014/03/WOT_shutterstock_40074295.jpg",
    image4: "https://www.researchgate.net/publication/51563252/figure/fig1/AS:267396984340510@1440763817885/Mixed-grass-prairie-This-grassland-in-Wyoming-is-covered-by-a-variety-of-plants-that-use.png",
    stateFood: "Bison",
    statefoodImage: "https://mybighornbasin.com/wp-content/uploads/2022/03/SousVideBisonBurgers-6.jpg"
  },
  // Add more states and their image and state food information here
};

// Get the element where you want to display the results
var scoreDisplay = document.getElementById("scoreDisplay");
// Get the element where you want to display food message
var statefoodmessage = document.getElementById("statefoodmessage");

function calculateResult() {
  var maxMatchCount = -Infinity;
  var maxState = "";

  for (var state in statePreferences) {
    var stateArray = statePreferences[state];
    var matchCount = stateArray.filter(id => clickedIDs.includes(id)).length;

    if (matchCount === stateArray.length) {
      maxState = state;
      break; // Exit the loop since an exact match is found
    }

    if (matchCount > maxMatchCount) {
      maxMatchCount = matchCount;
      maxState = state;
    }
  }

  scoreDisplay.textContent = "You belong in " + maxState + "!";
  var stateFood = stateDetails[maxState].stateFood;
  statefoodmessage.textContent = "Hope you like " + stateFood + "!";

var img1 = document.getElementById("img1");
  img1.src = stateDetails[maxState].image1;

  var img2 = document.getElementById("img2");
  img2.src = stateDetails[maxState].image2;

  var img3 = document.getElementById("img3");
  img3.src = stateDetails[maxState].image3;

  var img4 = document.getElementById("img4");
  img4.src = stateDetails[maxState].image4;

  var imgstatefood = document.getElementById("statefood");
  imgstatefood.src = stateDetails[maxState].statefoodImage;

}

calculateResult();