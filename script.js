window.addEventListener("load", function() {

  let list = document.getElementById("faultyItems"); 
  let form = document.querySelector("form"); 
 
 form.addEventListener("submit", function(event) { 
      event.preventDefault();

     let document = window.document
     let pilot= document.querySelector("input[name=pilotName]").value; 
     let copilot = document. querySelector("input[name=copilotName]").value;
     let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
     let cargoLevel = document.querySelector("input[name=cargoMass]").value; 

     formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel); 

  }) 

  
    let listedPlanets;
    let listedPlanetsResponse = myFetch(); 

  listedPlanetsResponse.then(function (response) {
    listedPlanets = response; 
    console.log(listedPlanets); 
  })
   .then(function() {
      console.log(listedPlanets);

    let randomSelectedPlanet = pickPlanet(listedPlanets);
    console.log(randomSelectedPlanet);
    
    addDestinationInfo(document, randomSelectedPlanet.name, randomSelectedPlanet.diameter, randomSelectedPlanet.star, randomSelectedPlanet.distance, randomSelectedPlanet.moons, randomSelectedPlanet.image); 
 })

}); 
  