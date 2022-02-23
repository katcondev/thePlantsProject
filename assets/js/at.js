const token = "keyrnJ3ystlKHJbYv";
const plantsContainer = document.getElementById("plants");
getApi();

function getApi() {
  const requestUrl = "https://api.airtable.com/v0/appUEHCG0RnYm88pm/plant-mood";

  fetch(requestUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const plant = data.records;
      for (var i = 0; i < plant.length; i++) {
        console.log(plant[i]);
        plantsContainer.innerHTML += `
     <div class="max-w-md rounded shadow-md shadow-green mb-4">
          <div class="p-4">
     <img src="${plant[i].fields.Attachments[0].thumbnails.large.url}" alt="${plant[i].fields.Name}" width="${plant[i].fields.Attachments[0].width}">
     </br> 
     <h1 class="text-gray-dark text-3xl font-roboto mt-5">${plant[i].fields.Name} </h1>
     </br> 
     <p class="mt-2 text-l"><span style="font-weight:bold">Personality:</span> ${plant[i].fields["Plant Personality"]} </p>
     <p class="mt-2 text-l"><span style="font-weight:bold">Scientific Name:</span> ${plant[i].fields["Scientific Name"]} </p>
     <p class="mt-2 text-l"><span style="font-weight:bold"> Type of Lighting:</span> ${plant[i].fields["Type of lighting"]} </p>
     <p class="mt-2 text-l"><span style="font-weight:bold"> Water Care:</span> ${plant[i].fields["Water Care"]} </p>
     <p class="mt-2 text-l"><span style="font-weight:bold"> Soil Care:</span> ${plant[i].fields["Soil Care"]} </p>
     <p class="mt-2 text-l"><span style="font-weight:bold"> Care Instructions:</span> ${plant[i].fields["Care Instructions"]} </p>
           </div>
          
     `;
      }
    })

    .catch((error) => console.log("error", error));
}
