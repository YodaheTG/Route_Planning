const http = require ('http');
const fs = require ('fs');
const express = require ('express');
const app = express();
const socket = require('socket.io'); //requires socket.io module
app.listen(3000);
//app.use(express.static('public')) 

//const hn = http.createServer((req,res) => {
    
    //fs.readFile('./views/testb.html',(err,data) =>{
      //if(err){
        //  console.log(err)
      //}
      //else {
          //res.write(data)
          //res.end();
          
      //}
    //});
    //res.write(jj);
    //res.write('<p>hey</p>');
    //res.end();
    

//});

app.get('/public/layers.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'layers.js'));
 });
 
 //hn.listen(3000,'localhost',() =>{
    //console.log('Node app is running on port 3000');
        
    //}); 

//const io = socket(3000);    
//io.on('connection', (socket) => {

//    console.log('user connected')

//socket.on('join', function(userNickname) {

  //      console.log(userNickname +" : has joined the chat "  );

        //socket.broadcast.emit('userjoinedthechat',userNickname +" : has joined the chat ");
    //})


//socket.on('messagedetection', (senderNickname,messageContent) => {

       //log the message in console 

  //     console.log(senderNickname+" : " +messageContent)

      //create a message object 

    //  let  message = {"message":messageContent, "senderNickname":senderNickname}

       // send the message to all users including the sender  using io.emit() 

      //io.emit('message', message )

      //})

//socket.on('disconnect', function() {

        //console.log(userNickname +' has left ')

        //socket.broadcast.emit( "userdisconnect" ,' user has left')
       


    //})
    //hn.listen(3000,'localhost',() =>{
        //console.log('Node app is running on port 3000');
            
        //}); 
//})


app.get ("/", async (req, res) => {

  try {
    const qu = 'SELECT ST_AsGeoJSON(ST_SetSRID( ST_Point(39,8.9), 4326))'
    const jj =  await pool.query(qu)
    var geojsonFeatureb = jj.rows[0].st_asgeojson;
    //L.geoJSON(geojsonFeatureb).addTo(map);
    console.log (geojsonFeatureb);
    //return geojsonFeatureb;
     res.json(geojsonFeatureb);
   // res.send('<h1>Hello world</h1>');
  
} catch (error) {
    console.log (err.message)
  }

});