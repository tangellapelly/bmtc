// /**
//  * Moves the map to display over Berlin
//  *
//  * @param  {H.Map} map      A HERE Map instance within the application
//  */

function showMap(map) {
	map.setCenter({ lat: 12.96820330, lng: 77.70167984 });
	map.setZoom(13);
	//   var result = "Tin Factory|12.99697042|77.66929525|335|null|&#3231;&#3263;&#3240;&#3277; &#3243;&#3277;&#3247;&#3262;&#3221;&#3277;&#3231;&#3248;&#3263;||Approved||null|KR Puram Railway Station|||N|1|N|-1|N@@@Railway Station KR Puram|13.00021342|77.67596501|336|null|&#3248;&#3272;&#3250;&#3277;&#3253;&#3270; &#3256;&#3277;&#3231;&#3271;&#3255;&#3240;&#3277;  &#3221;&#3270; &#3206;&#3248;&#3277; &#3242;&#3265;&#3248;&#3202; ||Approved||null|Hope Farm|||N|1|Y|-1|N@@@Depot-25 Gate (Central Silk Board)|12.91967254|77.64301614|362|null|&#3233;&#3263;&#3242;&#3274;-&#3304;&#3307; &#3257;&#3277;&#3256;&#3277;&#3248;&#3277; &#3250;&#3271;&#3220;&#3231;&#3277;||Approved|Agara Village, Sector 1, HSR Layout, Bangalore, Karnataka, India|null|Central Silk Board|||N|1|Y|-1|N@@@Agara Junction (Towards Hebbala)|12.92453611|77.6503715|770|null|&#3206;&#3223;&#3248;||Approved|National Highway 4, Nanjappa Garden, Hormavu, Bangalore, Karnataka 560043, India|null|Hebbala|||N|1|Y|-1|N@@@SI Apartment HSR Layout|12.9167001|77.62928387|2227|null|&#3256;&#3263; &#3205;&#3242;&#3262;&#3248;&#3277;&#3231;&#3277; &#3246;&#3270;&#3202;&#3231;&#3277;||Approved|Sector 6, HSR Layout, Bangalore, Karnataka, India|null|Central Silk Board|||N|1|Y|-1|N@@@Central Silk Board (Towards BTM Layout)|12.91747831|77.62404046|2241|null|&#3256;&#3270;&#3202;&#3231;&#3277;&#3248;&#3250;&#3277; &#3256;&#3263;&#3250;&#3277;&#3221;&#3277; &#3244;&#3275;&#3248;&#3277;&#3233;&#3277;||Approved|Muneswara Nagar, Sector 6, HSR Layout, Bangalore, Karnataka, India|null|BTM Layout|||N|1|Y|-1|N@@@B Narayanapura Ring Road|12.99628394|77.68380695|2576|null|&#3244; &#3240;&#3262;&#3248;&#3262;&#3247;&#3235;&#3242;&#3265;&#3248; &#3248;&#3263;&#3202;&#3223;&#3277; &#3248;&#3275;&#3233;&#3277;||Approved|Kamdhenu Nagar, B Narayanapura, Mahadevapura, Bangalore, Karnataka, India|null|Marathihalli Bridge|||N|1|N|-1|N@@@Mahadevapura Ring Road|12.99116434|77.68756719|2578|null|&#3246;&#3257;&#3238;&#3271;&#3253;&#3242;&#3265;&#3248; &#3248;&#3263;&#3202;&#3223;&#3277; &#3248;&#3275;&#3233;&#3277;||Approved|Mahadevapura bus stop, B Chinappa Layout, Mahadevapura, Bangalore, Karnataka 560016, India|null|Marathihalli Bridge|||N|1|Y|-1|N@@@Dodda Nekkundi (Towards Marathahalli Bridge)|12.97898227|77.69516661|2580|null|&#3238;&#3274;&#3233;&#3277;&#3233;&#3240;&#3270;&#3221;&#3277;&#3221;&#3265;&#3202;&#3238;&#3263; ||Approved|Doddenekundi Bus Stop, Service Road, Ferns City, Doddanakundi, Kartik Nagar, Bangalore, Karnataka 560048, India|null|Marathihalli Bridge|||N|1|Y|-1|N@@@Karthik Nagara|12.9682033|77.70167984|2582|null|&#3221;&#3262;&#3248;&#3277;&#3236;&#3263;&#3221;&#3240;&#3223;&#3248; ||Approved||null|Marathahalli Bridge|||N|1|N|-1|N@@@Marathahalli Bridge|12.95984663|77.7013905|2584|null|&#3246;&#3248;&#3237;&#3257;&#3251;&#3277;&#3251;&#3263; &#3221;&#3250;&#3262;&#3246;&#3202;&#3238;&#3263;&#3248; (&#3246;&#3248;&#3237;&#3257;&#3251;&#3277;&#3251;&#3263; &#3244;&#3277;&#3248;&#3263;&#3228;&#3277;)||Approved|Kalamandir Bus Stop, Anand Nagar, Marathahalli, Bangalore, Karnataka 560037, India|null|Central Silk Board|||N|1|Y|-1|N@@@New Horizon College|12.93531828|77.69115796|2592|null|&#3240;&#3277;&#3247;&#3266; &#3257;&#3262;&#3248;&#3263;&#3228;&#3275;&#3240;&#3277; &#3221;&#3262;&#3250;&#3271;&#3228;&#3277;||Approved|Marathahalli-Sarjapur Outer Ring Road, Kaverappa Layout, Kadubeesanahalli, Bangalore, Karnataka 560103, India|null|Central Silk Board|||N|1|N|-1|Y@@@Devarabisanahalli (Towards Central Silk Board)|12.93143035|77.68688876|2593|null|&#3238;&#3271;&#3253;&#3248;&#3244;&#3263;&#3256;&#3240;&#3257;&#3251;&#3277;&#3251;&#3263;||Approved|Devarabeesana Halli, Bellandur, Bangalore, Karnataka 560103, India|null|Central Silk Board|||N|1|N|-1|N@@@Eco Space|12.9277504|77.68052028|2594|null|&#3207;&#3221;&#3275; &#3256;&#3277;&#3242;&#3271;&#3256;&#3277;||Approved|Eco Space Bus Stop, RMZ Ecospace Internal Road, Adarsh Palm Retreat, Bellandur, Bangalore, Karnataka 560103, India|null|Central Silk Board|||N|1|N|-1|N@@@Bellanduru City Light Appartment |12.92472569|77.67429431|2595|null|&#3244;&#3270;&#3251;&#3277;&#3251;&#3202;&#3238;&#3266; &#3248;&#3265;||Approved|National Highway 4, Nanjappa Garden, Hormavu, Bangalore, Karnataka 560043, India|null|Central Silk Board|||N|1|Y|-1|N@@@Jn of Sarjapura Ring Road |12.92092954|77.66603753|2597|null|&#3228;&#3202;&#3221;&#3277;&#3255;&#3240;&#3277; &#3206;&#3243;&#3277; &#3256;&#3248;&#3277;&#3228;&#3262;&#3242;&#3265;&#3248; (&#3248;&#3263;&#3202;&#3223;&#3277; &#3248;&#3275;&#3233;&#3277;)||Approved||null|Central Silk Board|||N|1|Y|-1|N@@@Multiplex Marathahalli|12.95228147|77.7000046|2618|null|&#3246;&#3250;&#3277;&#3231;&#3263;&#3242;&#3277;&#3250;&#3270;&#3221;&#3277;&#3256;&#3277; &#3246;&#3262;&#3248;&#3236;&#3257;&#3251;&#3277;&#3251;&#3263; (&#3246;&#3262;&#3248;&#3236;&#3257;&#3251;&#3277;&#3251;&#3263; &#3244;&#3277;&#3248;&#3263;&#3228;&#3277;)||Approved|Innovative Multiplex Bus Stop, Marathahalli village, Marathahalli, Bangalore, Karnataka 560037, India|null|Central Silk Board|||N|1|N|-1|N@@@EMC2|12.98283919|77.69276808|5555|null|&#3207;&#3214;&#3202;&#3256;&#3263;&#3304;||Approved|Laxmi Sagar Layout, Mahadevapura, Bangalore, Karnataka, India|null|Marathihalli Bridge|||N|1|N|-1|N@@@Kadabisanahalli|12.9417736|77.69673541|5557|null|&#3221;&#3262;&#3233;&#3244;&#3263;&#3256;&#3240;&#3257;&#3251;&#3277;&#3251;&#3263; ||Approved|National Highway 4, Nanjappa Garden, Hormavu, Bangalore, Karnataka 560043, India|null|Central Silk Board|||N|1|Y|-1|N@@@Petrol Bunk Bellanduru|12.92322016|77.67084002|5559|null|&#3242;&#3270;&#3231;&#3277;&#3248;&#3275;&#3250;&#3277; &#3244;&#3202;&#3221;&#3277;  &#3244;&#3270;&#3251;&#3277;&#3251;&#3202;&#3238;&#3266;&#3248;&#3265; ||Approved||null|Central Central Silk Board|||N|1|N|-1|N@@@Ibblur|12.92134441|77.66195789|5560|null|&#3207;&#3244;&#3277;&#3244;&#3250;&#3266;&#3248;&#3265; (&#3248;&#3263;&#3202;&#3223;&#3277; &#3248;&#3275;&#3233;&#3277;)||Approved||null|Central Silk Board|||N|1|N|-1|N@@@14th Main HSR Layout (Towards Silk Board)|12.91618767|77.63493597|5561|null|&#3303;&#3306;&#3240;&#3271; &#3246;&#3265;&#3222;&#3277;&#3247; &#3248;&#3256;&#3277;&#3236;&#3270; &#3257;&#3270;&#3226;&#3277; &#3214;&#3256;&#3277; &#3206;&#3248;&#3277; &#3244;&#3233;&#3262;&#3253;&#3235;&#3270; &#3244;&#3263; &#3233;&#3263; &#3214;||Approved||null|Central Central Silk Board|||N|1|N|-1|N@@@";

	// 			locations = result.split("@@@");
	// 			//clearMarkers();
	// 			var dloc;
	// 			var count=0;
	// 		for (i = 0; i < locations.length; i++) {
	// 				dloc = locations[i].split("|");
	// 				map.addObject(new H.map.Marker({lat:dloc[1], lng:dloc[2]}));
	// 		}
}

// function addMarkersToMap(map) {
// 		var result = "Tin Factory|12.99697042|77.66929525|335|null|&#3231;&#3263;&#3240;&#3277; &#3243;&#3277;&#3247;&#3262;&#3221;&#3277;&#3231;&#3248;&#3263;||Approved||null|KR Puram Railway Station|||N|1|N|-1|N@@@Railway Station KR Puram|13.00021342|77.67596501|336|null|&#3248;&#3272;&#3250;&#3277;&#3253;&#3270; &#3256;&#3277;&#3231;&#3271;&#3255;&#3240;&#3277;  &#3221;&#3270; &#3206;&#3248;&#3277; &#3242;&#3265;&#3248;&#3202; ||Approved||null|Hope Farm|||N|1|Y|-1|N@@@Depot-25 Gate (Central Silk Board)|12.91967254|77.64301614|362|null|&#3233;&#3263;&#3242;&#3274;-&#3304;&#3307; &#3257;&#3277;&#3256;&#3277;&#3248;&#3277; &#3250;&#3271;&#3220;&#3231;&#3277;||Approved|Agara Village, Sector 1, HSR Layout, Bangalore, Karnataka, India|null|Central Silk Board|||N|1|Y|-1|N@@@Agara Junction (Towards Hebbala)|12.92453611|77.6503715|770|null|&#3206;&#3223;&#3248;||Approved|National Highway 4, Nanjappa Garden, Hormavu, Bangalore, Karnataka 560043, India|null|Hebbala|||N|1|Y|-1|N@@@SI Apartment HSR Layout|12.9167001|77.62928387|2227|null|&#3256;&#3263; &#3205;&#3242;&#3262;&#3248;&#3277;&#3231;&#3277; &#3246;&#3270;&#3202;&#3231;&#3277;||Approved|Sector 6, HSR Layout, Bangalore, Karnataka, India|null|Central Silk Board|||N|1|Y|-1|N@@@Central Silk Board (Towards BTM Layout)|12.91747831|77.62404046|2241|null|&#3256;&#3270;&#3202;&#3231;&#3277;&#3248;&#3250;&#3277; &#3256;&#3263;&#3250;&#3277;&#3221;&#3277; &#3244;&#3275;&#3248;&#3277;&#3233;&#3277;||Approved|Muneswara Nagar, Sector 6, HSR Layout, Bangalore, Karnataka, India|null|BTM Layout|||N|1|Y|-1|N@@@B Narayanapura Ring Road|12.99628394|77.68380695|2576|null|&#3244; &#3240;&#3262;&#3248;&#3262;&#3247;&#3235;&#3242;&#3265;&#3248; &#3248;&#3263;&#3202;&#3223;&#3277; &#3248;&#3275;&#3233;&#3277;||Approved|Kamdhenu Nagar, B Narayanapura, Mahadevapura, Bangalore, Karnataka, India|null|Marathihalli Bridge|||N|1|N|-1|N@@@Mahadevapura Ring Road|12.99116434|77.68756719|2578|null|&#3246;&#3257;&#3238;&#3271;&#3253;&#3242;&#3265;&#3248; &#3248;&#3263;&#3202;&#3223;&#3277; &#3248;&#3275;&#3233;&#3277;||Approved|Mahadevapura bus stop, B Chinappa Layout, Mahadevapura, Bangalore, Karnataka 560016, India|null|Marathihalli Bridge|||N|1|Y|-1|N@@@Dodda Nekkundi (Towards Marathahalli Bridge)|12.97898227|77.69516661|2580|null|&#3238;&#3274;&#3233;&#3277;&#3233;&#3240;&#3270;&#3221;&#3277;&#3221;&#3265;&#3202;&#3238;&#3263; ||Approved|Doddenekundi Bus Stop, Service Road, Ferns City, Doddanakundi, Kartik Nagar, Bangalore, Karnataka 560048, India|null|Marathihalli Bridge|||N|1|Y|-1|N@@@Karthik Nagara|12.9682033|77.70167984|2582|null|&#3221;&#3262;&#3248;&#3277;&#3236;&#3263;&#3221;&#3240;&#3223;&#3248; ||Approved||null|Marathahalli Bridge|||N|1|N|-1|N@@@Marathahalli Bridge|12.95984663|77.7013905|2584|null|&#3246;&#3248;&#3237;&#3257;&#3251;&#3277;&#3251;&#3263; &#3221;&#3250;&#3262;&#3246;&#3202;&#3238;&#3263;&#3248; (&#3246;&#3248;&#3237;&#3257;&#3251;&#3277;&#3251;&#3263; &#3244;&#3277;&#3248;&#3263;&#3228;&#3277;)||Approved|Kalamandir Bus Stop, Anand Nagar, Marathahalli, Bangalore, Karnataka 560037, India|null|Central Silk Board|||N|1|Y|-1|N@@@New Horizon College|12.93531828|77.69115796|2592|null|&#3240;&#3277;&#3247;&#3266; &#3257;&#3262;&#3248;&#3263;&#3228;&#3275;&#3240;&#3277; &#3221;&#3262;&#3250;&#3271;&#3228;&#3277;||Approved|Marathahalli-Sarjapur Outer Ring Road, Kaverappa Layout, Kadubeesanahalli, Bangalore, Karnataka 560103, India|null|Central Silk Board|||N|1|N|-1|Y@@@Devarabisanahalli (Towards Central Silk Board)|12.93143035|77.68688876|2593|null|&#3238;&#3271;&#3253;&#3248;&#3244;&#3263;&#3256;&#3240;&#3257;&#3251;&#3277;&#3251;&#3263;||Approved|Devarabeesana Halli, Bellandur, Bangalore, Karnataka 560103, India|null|Central Silk Board|||N|1|N|-1|N@@@Eco Space|12.9277504|77.68052028|2594|null|&#3207;&#3221;&#3275; &#3256;&#3277;&#3242;&#3271;&#3256;&#3277;||Approved|Eco Space Bus Stop, RMZ Ecospace Internal Road, Adarsh Palm Retreat, Bellandur, Bangalore, Karnataka 560103, India|null|Central Silk Board|||N|1|N|-1|N@@@Bellanduru City Light Appartment |12.92472569|77.67429431|2595|null|&#3244;&#3270;&#3251;&#3277;&#3251;&#3202;&#3238;&#3266; &#3248;&#3265;||Approved|National Highway 4, Nanjappa Garden, Hormavu, Bangalore, Karnataka 560043, India|null|Central Silk Board|||N|1|Y|-1|N@@@Jn of Sarjapura Ring Road |12.92092954|77.66603753|2597|null|&#3228;&#3202;&#3221;&#3277;&#3255;&#3240;&#3277; &#3206;&#3243;&#3277; &#3256;&#3248;&#3277;&#3228;&#3262;&#3242;&#3265;&#3248; (&#3248;&#3263;&#3202;&#3223;&#3277; &#3248;&#3275;&#3233;&#3277;)||Approved||null|Central Silk Board|||N|1|Y|-1|N@@@Multiplex Marathahalli|12.95228147|77.7000046|2618|null|&#3246;&#3250;&#3277;&#3231;&#3263;&#3242;&#3277;&#3250;&#3270;&#3221;&#3277;&#3256;&#3277; &#3246;&#3262;&#3248;&#3236;&#3257;&#3251;&#3277;&#3251;&#3263; (&#3246;&#3262;&#3248;&#3236;&#3257;&#3251;&#3277;&#3251;&#3263; &#3244;&#3277;&#3248;&#3263;&#3228;&#3277;)||Approved|Innovative Multiplex Bus Stop, Marathahalli village, Marathahalli, Bangalore, Karnataka 560037, India|null|Central Silk Board|||N|1|N|-1|N@@@EMC2|12.98283919|77.69276808|5555|null|&#3207;&#3214;&#3202;&#3256;&#3263;&#3304;||Approved|Laxmi Sagar Layout, Mahadevapura, Bangalore, Karnataka, India|null|Marathihalli Bridge|||N|1|N|-1|N@@@Kadabisanahalli|12.9417736|77.69673541|5557|null|&#3221;&#3262;&#3233;&#3244;&#3263;&#3256;&#3240;&#3257;&#3251;&#3277;&#3251;&#3263; ||Approved|National Highway 4, Nanjappa Garden, Hormavu, Bangalore, Karnataka 560043, India|null|Central Silk Board|||N|1|Y|-1|N@@@Petrol Bunk Bellanduru|12.92322016|77.67084002|5559|null|&#3242;&#3270;&#3231;&#3277;&#3248;&#3275;&#3250;&#3277; &#3244;&#3202;&#3221;&#3277;  &#3244;&#3270;&#3251;&#3277;&#3251;&#3202;&#3238;&#3266;&#3248;&#3265; ||Approved||null|Central Central Silk Board|||N|1|N|-1|N@@@Ibblur|12.92134441|77.66195789|5560|null|&#3207;&#3244;&#3277;&#3244;&#3250;&#3266;&#3248;&#3265; (&#3248;&#3263;&#3202;&#3223;&#3277; &#3248;&#3275;&#3233;&#3277;)||Approved||null|Central Silk Board|||N|1|N|-1|N@@@14th Main HSR Layout (Towards Silk Board)|12.91618767|77.63493597|5561|null|&#3303;&#3306;&#3240;&#3271; &#3246;&#3265;&#3222;&#3277;&#3247; &#3248;&#3256;&#3277;&#3236;&#3270; &#3257;&#3270;&#3226;&#3277; &#3214;&#3256;&#3277; &#3206;&#3248;&#3277; &#3244;&#3233;&#3262;&#3253;&#3235;&#3270; &#3244;&#3263; &#3233;&#3263; &#3214;||Approved||null|Central Central Silk Board|||N|1|N|-1|N@@@";

// 			locations = result.split("@@@");
// 			//clearMarkers();
// 			var dloc;
// 			var count=0;
// 		for (i = 0; i < locations.length; i++) {
// 				dloc = locations[i].split("|");
// 				map.addObject(new H.map.Marker({lat:dloc[1], lng:dloc[2]}));
// 		}


// }


/**
 * Boilerplate map initialization code starts below:
 */

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
