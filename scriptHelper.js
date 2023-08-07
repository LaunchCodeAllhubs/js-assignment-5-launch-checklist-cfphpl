
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    const missionTarget = document.getElementById("missionTarget");
       missionTarget.innerHTML = `
           <h2>Mission Destination</h2>
              <ol>
                  <li>Name: ${name}</li>
                  <li>Diameter: ${diameter} </li>
                  <li>Star: ${star}</li>
                  <li>Distance from Earth: ${distance}</li>
                  <li>Number of Moons: ${moons}</li>
             </ol>
             <img src=${imageUrl}>
           `;
 }
 
 
 function validateInput(testInput) {  
    try {
       if (testInput === "") {
          console.log("Empty");
          return "Empty";
        } 
        else if (isNaN(Number(testInput))) { 
             console.log("Not a Number");
             return "Not a Number";
        } 
        else { (!isNaN(Number(testInput)))
             return "Is a Number";
        }
    } catch(error) {
        console.error(error);
    }
 }
 
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let faultyItems = list; 
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus"); 
    let launchStatus = document.getElementById("launchStatus"); 
 
  
     if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
         list.style.visibility = "hidden"; 
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "black";
         alert("All fields are required before submiting.");
     }
     else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
         list.style.visibility = "hidden"; 
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "black";
         alert("Enter only letters for the Pilot and Co-Pilot fields.");
     }
     else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
         list.style.visibility = "hidden"; 
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "black";
         alert("Enter only numbers for the Fuel Level and Cargo Mass fields.");
     } 
 

 
        
     else {
        if (fuelLevel < 10000 && cargoLevel > 10000) { 
             faultyItems.style.visibility = "visible"; 
             pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
             copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
             fuelStatus.innerHTML = "Fuel level too low for launch"; 
             cargoStatus.innerHTML = "Cargo mass too heavy for launch" 
             launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
             launchStatus.style.color = "rgb(199, 37, 78)"; 
         } 
     
         
         else if (fuelLevel < 10000 && cargoLevel <= 10000) { 
             faultyItems.style.visibility = "visible"; 
             pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
             copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
             fuelStatus.innerHTML = "Fuel level too low for launch"; 
             cargoStatus.innerHTML = "Cargo mass low enough for launch" 
             launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
             launchStatus.style.color = "rgb(199, 37, 78)"; 
         }
     
         
         else if (fuelLevel >= 10000 && cargoLevel > 10000) { 
             faultyItems.style.visibility = "visible"; 
             pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
             copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
             fuelStatus.innerHTML = "Fuel level high enough for launch" 
             cargoStatus.innerHTML = "Cargo mass too heavy for launch";
             launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
             launchStatus.style.color = "rgb(199, 37, 78)"; 
         } 
 
         
         else {  
             faultyItems.style.visibility = "visible";  
             pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
             copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
             fuelStatus.innerHTML = "Fuel level high enough for launch"; 
             cargoStatus.innerHTML = "Cargo mass low enough for launch";
             launchStatus.innerHTML = "Shuttle is Ready for Launch"; 
             launchStatus.style.color = "rgb(65, 159, 106)"; 
         }
 
     } 
         
 } 
 
 
 async function myFetch() {
     let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
     .then(function(response) {
         if (response.status >= 400) { 
             throw new Error ("Error: bad fetch response");
         } else {
             let data = response.json();
             console.log(data);
             return data;
         }
     });
     return planetsReturned;
 }
 
 
 function pickPlanet(planets) {
     let randomSelectedPlanet = planets[Math.floor(Math.random() * planets.length)];
     return randomSelectedPlanet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
 