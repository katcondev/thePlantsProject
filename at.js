const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyrnJ3ystlKHJbYv'}).base('appUEHCG0RnYm88pm');
const table = base('plant-mood')

const getRecords = async () => {
    const records = await table
        .select({ maxRecords: 3, view: 'Grid view' })
        .firstPage();
     

    console.log(records);
    // return records;
         
};

getRecords();



// var loadPlants = function() {
//     // $('#plants').empty();

//     base('plant-mood').select({
//          maxRecords: 2,
//          view: "Grid view"
//     }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//        records.forEach(function(record) {   
//         //    console.log(record.get('Name'));

    
//         //    const Name = [record.get('Name')];
//         //    const sciName = [record.get('Scientific Name')];
//         //    return Name;
//         //    console.log(Name);
//         //    console.log(sciName);
        
        
//         });

//         fetchNextPage();
//         console.log(records);
        
//     }, function done(err) {
//        if (err) { console.error(err); return; }
//        }
//   );
  
// };

// loadPlants();







