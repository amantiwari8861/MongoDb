// db.getMongo().getDBs();
use("WD_5_30");

// db.users.find();

// db.users.find({age:{$eq:18}});// 2
// db.users.find({age:{$ne:18}}).count();// 118
// db.users.find({age:{$gt:18}}).count();// 111
// db.users.find({age:{$lt:18}}).count();// 5
// db.users.find({age:{$type:"number"}}).count();//118

// db.users.find({$nor:[{age:{$type:"number"}}]}).count();
// db.users.find({$nor:[{age:{$type:"number"}}]});

// db.users.deleteOne({name:"Gaurav"});

// db.users.find();

// db.users.insertOne({ name: "Sandeep", age: 28 });

db.users
  .find(
    {
      // $and:[
      // $or:[
      //     {gender:"Male"},
      //     {salary:{$gt:80000}}
      // ]},
      //   gender: { $not: {$eq:"Male"} },
      //   salary:{$exists:false}
      name: { $regex: /^A+/ },
    },
    {
      _id: 0,
      name: 1,
      salary: 1,
      gender: 1,
    }
  )
  // .sort({salary:1})
  // .limit(5)
  .toArray();

// db.users.drop();

// db.createCollection("users");
