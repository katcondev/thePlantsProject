var todayDate = document.querySelector('#dateToday');
var apiKey = 'AIzaSyApqth0vbKHzQ-UhIALlWSotQ_bqSJQ6Ls'
todayDate.textContent = moment().format("MM-Dd-YYYY")
// MAKE AN ARRAY with all of the videos ID's and Titles
var plantVideos = [
    {
        title: "Monstera",
        id: 'ffuqN54iono'
    }
]
$(document).ready(function(){
    function youtubCall() {
        $.ajax({
            type: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/videos?id=ffuqN54iono='+ apiKey,
            type: 'json',
            success: function(data) {
                console.log(data)
                // append video embedding script to HTML Page
                // div.appendChild(embedVideo);
            }
        })
    }

    youtubCall();
})

// function plantVideo() {
//     for(i=0; i<plantVideos.length; i++) {
//         if(quizResult == plantVideos[i].title){
//             $.ajax({
//                 type: 'GET',
//                 url: 'API TO YOTUBE URL' + plantVideos[i].id + apikey,
//                 type: 'video',
//                 success: function(data) {
//                     append video embedding script to HTML Page
//                     div.appendChild(embedVideo);
//                 }
//             })
//         }
//     }
// }
