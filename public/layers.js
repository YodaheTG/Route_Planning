
   
  // var L = require('leaflet');
   //var bboxArray = [37.7948,8.8096, 37.8943,8.7785]
   //var bbox = turf.bboxPolygon(bboxArray);
   //var bboxJson = L.geoJson(bbox);    

       // Setup map    
   var map = L.map('map').setView([8.976402510168297, 38.75664265703183], 11);

   //map.fitBounds(bboxJson.getBounds());
   
   // Add basemap
   var toner = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
   toner.addTo(map);
   
   //add layers to be painted 
  
  
   
//L.geoJSON(geojsonFeaturex).addTo(map);

let data;
fetch('http://localhost:3000/layers')
  .then(response => response.json())
  .then(data => { 

    L.geoJSON(data).addTo(map);
    console.log(data)
  });

  
//sql layers 


//var msg = require('./query.js');
//console.log (msg.dumbass())
  //L.geoJSON(test).addTo(map);
 
 //L.geoJSON(geojsonFeaturex).addTo(map);
 

 
 
  
 
  //L.geoJSON(geojsonFeature).addTo(map);

  map.on('click',function(e){
    var coord=e.latlng.toString().split(',');
    var coordb = e.latlng;
    console.log(coordb);
    var lat=coord[0].split('(');
    var long=coord[1].split(')');
    alert("you clicked the map at LAT: "+ lat[1]+" and LONG:"+long[0])
    //print (coordb);
    });

