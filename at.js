var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyrnJ3ystlKHJbYv'}).base('appUEHCG0RnYm88pm');
// const plantsdata = record.get("Name")

base('plant-mood').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
        console.log('Retrieved', record.get('Attachments'));
        console.log('Retrieved', record.get('Scientific Name'));
        console.log('Retrieved', record.get('Plant Personality'));
    });
    console.log(records)
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});




