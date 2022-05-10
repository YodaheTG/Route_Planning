# Route_Planning
This is  a REST-API developed using Node js. What it does is it implemenst a PostgreSQL function/ stored prcedure that accepts an array of coordinates as inputs
inputs and returns a network path in the form of a GeoJSON object which can be used by any front end system. It also has the capabilty ot convert an single arry of coordinates
into Geojson. The Stored procedure uses PostgreSQL, Post GIS and Pg-routing libraries to perfrom queries. Dijkstra's algorithm is used to solve a path between
coordinates. 
