//create a server 
const express = require ('express');
const app = express();
const layer = require('./query')
app.listen(3000);
const {Client } = require('pg');
const res = require('express/lib/response');
const client = new Client()
const pool = new Client({
  host: "localhost",
  port: 5432,
  user:"postgres",
  password: "1234aeiou",
  database: "routing"  
})
pool.connect();
//display geopoint as geojson  
app.get ("/", async (req, res) => {

  try {
    //const qu = 'SELECT ST_AsGeoJSON(ST_SetSRID( ST_Point(39,8.9), 4326))'
    //const jj =  await pool.query(qu)
    //res.send(jj.rows[0].st_asgeojson);

    const qund = 'SELECT ST_AsGeoJSON(ST_SetSRID( ST_Point(38,8.9), 4326))'
    const jjc = await pool.query(qund)
    console.log(jjc)
    res.send(jjc.rows[0].st_asgeojson);
} catch (error) {
    console.log ("error")
  }

});
//create a route using coorindates
app.get ("/path", async (req, res) => {

  try {
  
    const value = [38.762214,8.937409]//initial coordinates 
    const qund = 'SELECT ST_AsGeoJSON (ST_Transform(ST_Union (routing4),4326)) from routing4 (array[${value}],array[[39.787432,9.964137],[39.756085,9.959341]])'
    const jjc = await pool.query(qund)

    //console.log(jjc)
    res.send(jjc.rows[0].st_asgeojson);
} catch (error) {
    console.log ("error")
  }

});
//post request (not finshed)
app.post ("/test", async (req,res) => {
  try {
    console.log(req.body)
  }
  catch 
  {
    console.log(err.message)
  }
});

console.log("hello yod")


