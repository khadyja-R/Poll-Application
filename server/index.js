const express = require('express');
const r = require('rethinkdb');

const app = express();

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


// connect to rethinkdb 
// Connect to the database
r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
    if (err) throw err
  
    // Create a database called "polling"
    r.dbCreate('polling').run(conn, function(err, result) {
      if (err) throw err
      console.log('Created database "polling"')
  
      // Create a table called "votes" in the "polling" database
      r.db('polling').tableCreate('votes').run(conn, function(err, result) {
        if (err) throw err
        console.log('Created table "votes"')
      })
    })
  })
