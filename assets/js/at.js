const token = process.env.AT_token
const plantsContainer = document.getElementById("plants")
require('dotenv').config();



function getApi(){
    const requestUrl = 'https://api.airtable.com/v0/appUEHCG0RnYm88pm/plant-mood';


   fetch(requestUrl, {
        headers: {
          "Content-Type" : "application/json",
          "Authorization": `Bearer ${token}`
        }
   })
   .then(response => response.json())
   .then(records => { 
    const plant = records;
    var output = [];
    for (var i = 0; i < records.length; i++){
       output.push();
       
      } 

      console.log(output);

      plantsContainer.innerHTML = 
     `<img src="${plant.records[i].fields.Attachments[0].url}" alt="${plant.records[i].fields.Name}" width="${plant.records[i].fields.Attachments[0].width}">
     </br> 
     <h1 class="text-gray-dark text-3xl font-roboto mt-5">${plant.records[i].fields.Name} </h1>
     </br> 
      <p class="mt-2 text-l"><span style="font-weight:bold">Personality:</span> ${plant.records[i].fields['Plant Personality']} </p>
      <p class="mt-2 text-l"><span style="font-weight:bold">Scientific Name:</span> ${plant.records[i].fields['Scientific Name']} </p>
      <p class="mt-2 text-l"><span style="font-weight:bold"> Type of Lighting:</span> ${plant.records[i].fields['Type of lighting']} </p>
      <p class="mt-2 text-l"><span style="font-weight:bold"> Water Care:</span> ${plant.records[i].fields['Water Care']} </p>
      <p class="mt-2 text-l"><span style="font-weight:bold"> Soil Care:</span> ${plant.records[i].fields['Soil Care']} </p>
      <p class="mt-2 text-l"><span style="font-weight:bold"> Care Instructions:</span> ${plant.records[i].fields['Care Instructions']} </p>

     `;
     
     console.log(plant)
     
   })
  
   
  .catch(error => console.log('error', error));
};


getApi();





