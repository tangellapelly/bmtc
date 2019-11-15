
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
	zoom: 13,
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


// Adding the bus stop
 var busStop_1_location = {lat: 12.98217823509806,lng: 77.63235278359205}
 var busStop_1 = new H.map.Marker(busStop_1_location)
 
 var point1;
 var point2;
 busStop_1.addEventListener('tap', function (evt) {
	// event target is the marker itself, group is a parent event target
	// for all objects that it contains
	point1 = `${evt.target.getGeometry().lat},${evt.target.getGeometry().lng}`
	console.log(`this is the event busStop_1`, evt.target.getGeometry())

	routeOptions = evt.target.getGeometry()
	
}, false);

//  ========================== middle stop
var busStop_middle_location = {lat: 12.994279801249832 , lng: 77.66301177373678}
 var busStop_middle = new H.map.Marker(busStop_middle_location)
 busStop_middle.addEventListener('tap', function (evt) {
	// event target is the marker itself, group is a parent event target
	// for all objects that it contains
	point2 = `${evt.target.getGeometry().lat},${evt.target.getGeometry().lng}`
	console.log(`this is the event busStop_2`, evt.target.getGeometry().lat)
	
let waypoint0 = `geo!${point1}`
let waypoint1 = `geo!${point2}`

// Create the parameters for the routing request:
var routingParameters = {
	// The routing mode:
	'mode': 'fastest;car',
	// The start point of the route:
	'waypoint0': waypoint0,
	// The end point of the route:
	'waypoint1': waypoint1,
	// To retrieve the shape of the route we choose the route
	// representation mode 'display'
	'representation': 'display'
  };
   // Get an instance of the routing service:
   var router = platform.getRoutingService();
  
   // Call calculateRoute() with the routing parameters,
   // the callback and an error callback function (called if a
   // communication error occurs):
   router.calculateRoute(routingParameters, onResult,
	 function(error) {
	 alert(error.message);
	 });
 
 }, false);
// =========================== middle stop end

// =========================== second stop 
 var busStop_2_location = {lat: 12.982485992397676,lng: 77.6928617425874}
 var busStop_2 = new H.map.Marker(busStop_2_location)
 
 map.addObjects([busStop_1,busStop_2,busStop_middle])

 busStop_2.addEventListener('tap', function (evt) {
	// event target is the marker itself, group is a parent event target
	// for all objects that it contains
	point2 = `${evt.target.getGeometry().lat},${evt.target.getGeometry().lng}`
	console.log(`this is the event busStop_2`, evt.target.getGeometry().lat)
	
let waypoint0 = `geo!${point1}`
let waypoint1 = `geo!${point2}`

// Create the parameters for the routing request:
var routingParameters = {
	// The routing mode:
	'mode': 'fastest;car',
	// The start point of the route:
	'waypoint0': waypoint0,
	// The end point of the route:
	'waypoint1': waypoint1,
	// To retrieve the shape of the route we choose the route
	// representation mode 'display'
	'representation': 'display'
  };

   // Get an instance of the routing service:
  var router = platform.getRoutingService();
  
  // Call calculateRoute() with the routing parameters,
  // the callback and an error callback function (called if a
  // communication error occurs):
  router.calculateRoute(routingParameters, onResult,
	function(error) {
	alert(error.message);
	});

}, false);

// =========================== second stop end
  
  // Define a callback function to process the routing response:
  var onResult = function(result) {
	var route,
	routeShape,
	startPoint,
	endPoint,
	linestring;
	if(result.response.route) {
	// Pick the first route from the response:
	route = result.response.route[0];
	// Pick the route's shape:
	routeShape = route.shape;
  
	// Create a linestring to use as a point source for the route line
	linestring = new H.geo.LineString();
  
	// Push all the points in the shape into the linestring:
	routeShape.forEach(function(point) {
	var parts = point.split(',');
	linestring.pushLatLngAlt(parts[0], parts[1]);
	});
  
	// Retrieve the mapped positions of the requested waypoints:
	startPoint = route.waypoint[0].mappedPosition;
	endPoint = route.waypoint[1].mappedPosition;
  
	// Create a polyline to display the route:
	var routeLine = new H.map.Polyline(linestring, {
	style: { strokeColor: 'blue', lineWidth: 4 }
	});
  

	// Add the route polyline and the two markers to the map:
	map.addObjects([routeLine]);
  
	}
  }
  
 