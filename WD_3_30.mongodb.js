// db.getMongo().getDBs();
use("WD_3_30");

// CRUD Operations finished

// db.getCollectionNames();
// db.users.find().count();
// db.users.find().limit(3);
// db.users.find().sort({userId:1}).limit(3);
// db.users.find().sort({userId:-1}).limit(3);
// db.users.find().sort({salary:-1}).limit(3);
// db.users.find()
// .sort({salary:-1})
// .skip(1)
// .limit(3);

// filtering of data

// db.users.find({predicate},{projection});
// db.users.find({age:25},{name:1}); // _id is populating by default
// db.users.find({ age: 25 }, { name: 1, _id: 0 });
// db.users.findOne({ age: 25 }, { name: 1, _id: 0 });

// Operators in mongodb

// db.users.find({ age: 25 }, { name: 1, age: 1, _id: 0 });
// db.users.find({ age: { $eq: 25 } }, { name: 1, age: 1, _id: 0 }).toArray();// 3

// db.users.find({ age: { $gt: 25 } }, { name: 1, age: 1, _id: 0 }).count();// 96

// db.users.find({ age: { $gte: 25 } }, { name: 1, age: 1, _id: 0 }).count(); //99

// db.users.find({ age: { $lt: 25 } }, { name: 1, age: 1, _id: 0 }).count();// 19

// db.users.find({age:{$type:"null"}})

// db.users.find({ age: { $lte: 25 } }, { name: 1, age: 1, _id: 0 });
// db.users.find({ age: { $ne: 25 } }, { name: 1, age: 1, _id: 0 });
// db.users.find({ age: { $in: [25, 30,null] } }, { name: 1, age: 1, _id: 0 });
// db.users.find({ age: { $nin: [25, 30] } }, { name: 1, age: 1, _id: 0 }).toArray();

// true || true => true
// true || false => true
// false || true => true
// false || false => false

// And Operator ($and)

db.users
  .find(
    {
      $and: [
        { age: { $gte: 25 } },
        { salary: { $gte: 90000 } },
        { name: { $eq: "Tushar Cherian" } },
      ],
    },
    { name: 1, age: 1, salary: 1, _id: 0 },
  )
  .toArray();
