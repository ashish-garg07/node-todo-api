/**
 * Created by Ashish on 4/24/18.
 */

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connecte server');
  }
  console.log('connected to server');
const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text:'something to do',
    completed:false
  },(err, result)=>{
    if(err){
      return console.log('failed to insert record : ',err);
    }
    console.log('result is : ',JSON.stringify(result.ops,undefined,2));

  });
  client.close();
});