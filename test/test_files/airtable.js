
var loadArtists = function() {
    $('#artists').empty();

    base('plant-mood').select({
        sort: [
            {field: 'Name', direction: 'asc'}
        ]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            console.log('Retrieved ', record.get('Name'));

            var $artistInfo = $('<div>');
            $artistInfo.append($('<h3>').text(record.get('Name')));
            $artistInfo.append($('<div>').text(record.get('Bio')));
            var x = $('<button>').text('Delete').click(function() {
                deleteArtist(record);
            });
            $artistInfo.append(x)
            $artistInfo.attr('data-record-id', record.getId());

            $('#artists').append($artistInfo);
        });

        fetchNextPage();
    }, function done(error) {
        console.log(error);
    });
};

$('#create').click(function(){
    base('plant-mood').create({
        "Name": "Al Held",
    }, function(err, record) {
        if (err) { console.log(err); return; }
        loadArtists();
    });
});

loadArtists();