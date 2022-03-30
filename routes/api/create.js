var express = require('express');
var router = express.Router();

/* Выводим полученные данные в консоль*/
router.post('/', function(req, res) {
    if(!req.body) return res.sendStatus(400) 
    else
        console.log(req.body);
        res.status(200).send('Ok');
  });

    
module.exports = router;


