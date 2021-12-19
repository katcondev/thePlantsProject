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

   .then(function (data) {
    //Using console.log to examine the data
    console.log(data.records);
    for (var i = 0; i < data.length; i++) {
      //Creating a h3 element and a p element
      var plantName = document.createElement('h3');
      var plantId = document.createElement('p');

      //Setting the text of the h3 element and p element.
      plantName.textContent = data[i].records.fields.Name;
      plantId.textContent = data[i].records.id;

      //Appending the dynamically generated html to the div associated with the id="users"
      //Append will attach the element as the bottom most child.
      // plantsContainer.append(plantName);
      // plantsContainer.append(plantId);
      
      
      console.log(plantId.textContent)
      
      
    }
  })
   .catch( error => console.error(error))

  //  document.getElementById("plants").innerHTML = `
  //     Just a quick test! `

};



