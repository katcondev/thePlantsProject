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
   .then(data => console.log(data))
  //  .then(function (data) {
  //   //Using console.log to examine the data
  //   console.log(data.records[1]);
  //   console.log(data.records[1].fields.Name);
  //   for (var i = 0; i < data.length; i++) {
  //     //Creating a h3 element and a p element
  //     var plantName = document.createElement('h3');
  //     var plantId = document.createElement('p');

  //     //Setting the text of the h3 element and p element.
  //     plantName.textContent = data.records[i].fields.Name;
  //     plantId.textContent = data.records[i].id;

  //     //Appending the dynamically generated html to the div associated with the id="users"
  //     //Append will attach the element as the bottom most child.
  //     plantsContainer.append(plantName);
  //     plantsContainer.append(plantId)
      
    
      
      
  //   }
  // })
  .catch(error => console.log('error', error));


};




