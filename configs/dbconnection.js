
var mysql=require('mysql');
var connection=mysql.createConnection({

   host:'localhost',
   port: '3306',
   user:'root',
   password:'kian123',
   database:'businessonline'

});

connection.connect(function(err) {
    if(err){
      console.log('[console-log]: mysql error connecting ' + err);
      return;
    }
    console.log('[console-log]: mysql connection established');
});

 module.exports=connection;
