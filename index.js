const db = require('./db/connection');

const variable = 'My Variable'


const insertFunction = function(){
    db.query(`INSERT INTO tableOne (name) VALUES('${variable}')`, function(err){
        console.log(err)
    })
    console.log('Success!');
}

insertFunction();

const readFunction = function(){
    db.query('SELECT * FROM tableOne',function(err,results){
        console.log(results)
    })
}

readFunction();
