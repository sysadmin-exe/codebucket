global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const { MongoClient } = require('mongodb');

async function main() {
   
  const DB_USER = process.env.DB_USER 
  const DB_PASSWD = process.env.DB_PASSWD 

  const uri = `mongodb://${DB_USER}:${DB_PASSWD}@"mongodb://username:passwd@clusterhostname:27017`;

 
  const client = new MongoClient(uri);
  const oldstring = "string1"
  const newstring = "string2"

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    //get database collections
    database = client.db("database").collection("collection1")

    //update project path in the database collection
    bucketUpdate = await database.find({}).forEach( async function(e,i) {
      await database.update({_id: e._id},{
        $set:{
          'key': e['key'].replace(oldstring, newstring)
        }
      })
    });

    console.log(`Updated documents in database collections`);

  } catch (err) {
    console.error(`Something went wrong: ${err}`);
  }
  finally {
  await client.close();
  }
}

main().catch(console.error);