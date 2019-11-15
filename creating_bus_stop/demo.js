

function showMap(map) {
	map.setCenter({ lat: 12.96820330, lng: 77.70167984 });
	map.setZoom(13);
}

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
	apikey: window.apikey
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
	defaultLayers.vector.normal.map, {
	center: { lat: 12.96820330, lng: 77.70167984 },
	zoom: 4,
	pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
	//moveMapToBerlin(map);
	showMap(map);
}





// add long click in map event listener
map.addEventListener('dbltap', handleLongClickInMap);

function handleLongClickInMap(currentEvent) {
	var lastClickedPos = map.screenToGeo(currentEvent.currentPointer.viewportX, currentEvent.currentPointer.viewportY);
	console.log("last clicked point", lastClickedPos)
	var marker = new H.map.Marker(lastClickedPos)
	let html = `
	Latitude: ${lastClickedPos.lat}<br>
	<hr>
	Longitude: ${lastClickedPos.lng}
	<hr>
	<button>Create</button>
	<button>Delete</button>
	
	`
	
	marker.setData(html);
	map.addObject(marker)
	addInfoBubble(marker)
}



function addInfoBubble(marker) {


	// add 'tap' event listener, that opens info bubble, to the group
	marker.addEventListener('tap', function (evt) {
		// event target is the marker itself, group is a parent event target
		// for all objects that it contains

		console.log(`this is the event binging`, evt)
		var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
			// read custom data
			content: evt.target.getData()
		});
		console.log(`This is bubble itself`, bubble)
		// show info bubble
		ui.addBubble(bubble);
	}, false);

	
  }




// var bubble =  new H.ui.InfoBubble(Marker.getGeometry(), {
// 	// read custom data
// 	content: evt.target.getData()
//   });
//   // show info bubble
//   ui.addBubble(bubble);
