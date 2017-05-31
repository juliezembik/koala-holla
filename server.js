var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser= require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( {extended: false } );
var port = process.env.PORT || 8080;
// static folder
app.use( express.static( 'public' ) );

// spin up server
app.listen( port, function(){
  console.log( 'server up on', port );
});

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( 'index.html' );
});

// get koalas
app.get( '/koalas', function( req, res ){
  console.log( 'GET koalas route hit' );
  //assemble object to send
  var objectToSend={
    response: 'from GET koalas route'
  }; //end objectToSend
  //send info back to client
  res.send( objectToSend );
});

// add koala
app.post( '/koalas', urlencodedParser, function( req, res ){
  console.log( 'POST koalas route hit' );
  //assemble object to send
  var objectToSend={
    response: 'from POST koalas route'
  }; //end objectToSend
  //send info back to client
  res.send( objectToSend );
});

// add koala
app.put( '/koalas', urlencodedParser, function( req, res ){
  console.log( 'PUT koalas route hit' );
  //assemble object to send
  var objectToSend={
    response: 'from PUT koalas route'
  }; //end objectToSend
  //send info back to client
  res.send( objectToSend );
});
