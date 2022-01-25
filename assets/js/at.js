const token = 'keyrnJ3ystlKHJbYv'
const plantsContainer = document.getElementById("plants")
getApi();

function getApi(){
    const requestUrl = 'https://api.airtable.com/v0/appUEHCG0RnYm88pm/plant-mood';


   fetch(requestUrl, {
        headers: {
          "Content-Type" : "application/json",
          "Authorization": `Bearer ${token}`
        }
   })
   .then(response => response.json())
   .then(data => { 
    const plant = data;
    // var output = "";
    for (var i = 0; i < data.length; i++){
      console.log(data)
      //  output +=
      }
      plantsContainer.innerHTML = 
     `<img src="${plant.records[i].fields.Attachments[0].url}" alt="${plant.records[i].fields.Name}" width="${plant.records[i].fields.Attachments[0].width}">
     </br> 
     <h1>Name: ${plant.records[i].fields.Name} </h1>
     </br> 
      <h1> Plant Personality: ${plant.records[i].fields['Plant Personality']} </h1>
      <h1> Plant Scientific Name: ${plant.records[i].fields['Scientific Name']} </h1>
      <h1> Type of Lighting: ${plant.records[i].fields['Type of lighting']} </h1>
      <h1> Water Care: ${plant.records[i].fields['Water Care']} </h1>
      <h1> Soil Care: ${plant.records[i].fields['Soil Care']} </h1>
      <h1> Care Instructions: ${plant.records[i].fields['Care Instructions']} </h1>

     ` 
  
     ;
     
     console.log(plant)
   })
      
    
      
      
  //   }
  // })
  .catch(error => console.log('error', error));


};




