const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

const server = app.listen( port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('listening at http://%s:%s', host, port);
});

app.use(express.static('client/dist'))
app.use(bodyParser.json());

app.get('/currentState', (req, res) => {
  //a get request will send the current state
  res.status(200).json(stateObjectDB)
})

app.put('/updateState', (req, res) => {
  let body = req.body
  //stateObject will update to reflect the current state on the client
  for(let key in body){
    stateObjectDB[key] = body[key]
  }
  //server will then send back updated state.
  res.status(201).send(stateObject);
})



/*using a JS object to persist state on the server, as long as this server is runing
  the state will be accurate. This object can easily be switched out for a more robust Database
  MongoDB/Redis etc. 
*/
const stateObjectDB = {
  north: false,
  northEast: false,
  east: false,
  southEast: false,
  south: false,
  southWest: false,
  west: false,
  northWest: false
}