//require the mongoClient from mongodb module
var MongoClient = require("mongodb").MongoClient;
//mongodb configs
var connectionUrl = "mongodb://localhost:27017/myproject",
  sampleCollection = "chapters";
//We need to insert these chapters into mongoDB
var chapters = [
  {
    Title: "Snow Crash",
    Author: "Neal Stephenson"
  },
  {
    Title: "Snow Crash",
    Author: "Neal Stephenson"
  }
];
// if the connection was proper, the db variable will have the connection object
MongoClient.connect(connectionUrl, function(err, db) {
  console.log("Connected correctly to server");
  // Get some collection
  var collection = db.collection(sampleCollection);
  collection.insert(chapters, function(error, result) {
    //here result will contain an array of records inserted
    if (!error) {
      console.log("Success :" + result.ops.length + " chapters  inserted!");
    } else {
      console.log("Some error was encountered!");
    }
    db.close();
  });
});

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
