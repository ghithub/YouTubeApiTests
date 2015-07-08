// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML = responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', function(){		
		gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');
	});
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');
	//gapi.client.setApiKey('AI39si7k0NRF9Tih3NIwaAndEDrMQUyO3yj3hVqbGcps1vDzJH4JZg9e7FaMBsBwBl-i01hl1zP1VHfNF62ckGeNNtu214G4Xg');

    //search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
	gapi.client.load('youtube', 'v3', function(){
		gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');		
	});
	
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: $("#query").val()
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}

$(function(){
	$("#search").on("click", function(){
		search();
		$("body").append($("<div>heyhey hey</div>"));
	}
	
	);
	
	
})