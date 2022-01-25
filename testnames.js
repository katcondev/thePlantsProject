<h1>Name: ${record.records[i].fields.Name} </h1>
     </br> 
      <h1> Plant Personality: ${plant.records[i].fields['Plant Personality']} </h1>
      <h1> Plant Scientific Name: ${plant.records[i].fields['Scientific Name']} </h1>
      <h1> Type of Lighting: ${plant.records[i].fields['Type of lighting']} </h1>
      <h1> Water Care: ${plant.records[i].fields['Water Care']} </h1>
      <h1> Soil Care: ${plant.records[i].fields['Soil Care']} </h1>
      <h1> Care Instructions: ${plant.records[i].fields['Care Instructions']} </h1>


      `<img src="${plant.fields.Attachments[0].url}" alt="${plant.fields.Name}" width="${plant.fields.Attachments[0].width}">
