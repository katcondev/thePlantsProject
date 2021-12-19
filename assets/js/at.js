const token = 'keyrnJ3ystlKHJbYv'


const info = fetch('https://api.airtable.com/v0/appUEHCG0RnYm88pm/plant-mood', {
    headers: {
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`
      }
})
   .then(response => response.json())
   .then( json => console.log(json))
   .catch( error => console.error(error))


document.getElementById("plants").innerHTML = `${info}`

