var Airtable = require('airtable');
// Get a base ID for an instance of art gallery example
var base = new Airtable({ apiKey: 'keyrnJ3ystlKHJbYv' }).base('appUEHCG0RnYm88pm');


var loadPlants = function() {
    $('#plants').empty();

    base('plant-mood').select({
        sort: [
            {field: 'Name', direction: 'asc'}
        ]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            console.log('Retrieved ', record.get('Name'));

            var $plantInfo = $('<div>');
            $plantInfo.append($('<h3>').text(record.get('Name')));
            $plantInfo.append($('<div>').text(record.get('Attachments')));
            $plantInfo.append($('<div>').text(record.get('Plant Personality')));
            $plantInfo.attr('data-record-id', record.getId());
            $('#plants').append($plantInfo);
        });

        fetchNextPage();
    }, function done(error) {
        console.log(error);
    });
};



loadPlants();