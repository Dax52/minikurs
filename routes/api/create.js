var express = require('express');
var router = express.Router();
const pgp = require('pg-promise')();
const connectionConf = {
  host: 'ec2-44-194-4-127.compute-1.amazonaws.com',
  port: 5432,
  database: 'd94ag4hspnba8d',
  user: 'olgetkvxnuawkl',
  password: 'bd20265571c5140c7267b17670cafc428103d12bedb2f61c3f3d4f33a53d6289',
  ssl: {
        // true,
        rejectUnauthorized : false
        
  }

};  
const db = pgp(connectionConf);
// const db = pgp('postgres://olgetkvxnuawkl:bd20265571c5140c7267b17670cafc428103d12bedb2f61c3f3d4f33a53d6289@ec2-44-194-4-127.compute-1.amazonaws.com:5432/d94ag4hspnba8d?ssl=true');
// ?ssl=true
// tls: {
//   rejectUnauthorized: false
// }
async function insertMessage(data) {
  try {
    return await db.one(`
    INSERT INTO posts (id, content)
    VALUES (NEXTVAL('messageid'),$1) RETURNING *`,
    [data.message]);
  }
  catch (err) {
    console.log (err);
  }
}

router.post('/', function(req, res) {
    let message = req.body;
    if(!message) return res.sendStatus(400);
    else

        insertMessage(message);
      
        // console.log(message);
        res.sendStatus(200);
  });

    
module.exports = router;
