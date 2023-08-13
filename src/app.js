const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbname = "task6";

mongoClient.connect(url, (error, res) => {
  if (error) {
    console.log(error);
  }
  console.log("Everything is ok");
  const db = res.db(dbname);

  //insert one

  db.collection("users")
    .insertOne({
      name: "Medhat",
      age: 18,
      city: "Fayoum",
    })
    .then()
    .catch((err) => console.log(err));

  db.collection("users")
    .insertOne({
      name: "Ahmed",
      age: 18,
      city: "Cairo",
    })
    .then()
    .catch((err) => console.log(err));

  // insert Many 10 5 of 10 >>> age = 25

  db.collection("users")
    .insertMany([
      {
        name: "Mohamed",
        age: 18,
        city: "Cairo",
      },
      {
        name: "Mahmoud",
        age: 18,
        city: "Mansoura",
      },
      {
        name: "Hemdan",
        age: 25,
        city: "Sohag",
      },
      {
        name: "Rabeea",
        age: 40,
        city: "Alex",
      },
      {
        name: "Makram",
        age: 25,
        city: "Bni-sweef",
      },
      {
        name: "Hamada",
        age: 25,
        city: "Banha",
      },
      {
        name: "Hossam",
        age: 25,
        city: "Minya",
      },
      {
        name: "Alla",
        age: 22,
        city: "Cairo",
      },
      {
        name: "Marwan",
        age: 25,
        city: "Fayoum",
      },
      {
        name: "Jory",
        age: 27,
        city: "Assuit",
      },
    ])
    .then((data) => console.log(data.insertedCount))
    .catch((err) => console.log(err));

  // find match 25

  db.collection("users")
    .find({ age: 25 })
    .toArray()
    // .then((data)=>console.log(data))
    .catch((err) => console.log(err));

  // limit 3 to 25 y

  db.collection("users")
    .find({ age: 25 })
    .limit(3)
    .toArray()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  // $set name for 4

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64d825167668ea6fc9899c9c")},
      { $set: { name: "zaki" } }
    )
    .then()
    .catch((err) => console.log(err));

                /////////////////////////////////
  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64d825167668ea6fc9899c9e")},
      { $set: { name: "AbdelRahaman" } }
    )
    .then()
    .catch((err) => console.log(err));

                /////////////////////////////////////
    db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64d825167668ea6fc9899ca0")},
      { $set: { name: "Hamouda" } }
    )
    .then()
    .catch((err) => console.log(err));

                ///////////////////////////////////////
    db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64d825167668ea6fc9899ca7")},
      { $set: { name: "Maryam" } }
    )
    .then()
    .catch((err) => console.log(err));


    // UpdateOne for 1 inc 20

    db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("64d825167668ea6fc9899c9c")},
      { $inc: { age: 20 } }
    )
    .then()
    .catch((err) => console.log(err));

    // UpdateMany inc age 10

    db.collection("users")
    .updateMany(
      {},
      { $inc: { age: 10 } }
    )
    .then()
    .catch((err) => console.log(err));

    // deleteOne 1

    db.collection("users")
    .deleteOne({_id :mongodb.ObjectId("64d825167668ea6fc9899c9c")})
    .then((data)=> console.log(data.deletedCount))
    .catch((err)=>console.log(err));

    // deleteMany age 35

    db.collection("users")
    .deleteMany({age : 35})
    .then((data)=> console.log(data.deletedCount))
    .catch((err)=>console.log(err))

});
