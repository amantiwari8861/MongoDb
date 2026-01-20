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

// db.users
//   .find(
//     {
//       $and: [
//         { age: { $gte: 25 } },
//         { salary: { $gte: 90000 } },
//         { name: { $eq: "Tushar Cherian" } },
//       ],
//     },
//     { name: 1, age: 1, salary: 1, _id: 0 },
//   )
//   .toArray();

// Or Operator ($or)
// db.users
//   .find(
//     {
//       $or: [{ age: { $gte: 25 } }, { salary: { $gte: 90000 } }],
//     },
//     { name: 1, age: 1, salary: 1, _id: 0 },
//   )
//   .toArray();

// Not Operator ($not)
// db.users
//   .find(
//     {
//       age: { $not: { $gte: 25 } },
//     },
//     { name: 1, age: 1, salary: 1, _id: 0 },
//   )
//   .toArray();

// Exists Operator ($exists)
// db.users.insertMany([
//   { name: "Aashish", age: 26 },
//   { name: "Dilshad", age: 24, salary: 21038 },
//   { name: "janifer", age: 27 },
//   { name: "Harshit", age: 22, salary: 20577 },
//   { name: "divyanshi", age: 29 },
// ]);

// db.users.insertOne({ name: "kush", age: "24" });
// db.users
//   .find(
//     {
//       // salary: { $exists: false },
//       // age: { $type: "null" },
//       age: { $type: "string" },
//     },
//     { name: 1, age: 1, salary: 1, _id: 0 },
//   )
//   .toArray();

// regex operator
// db.users
//   .find(
//     // { name: { $regex: /^a/i } },
//     // { name: { $regex: /^a/ } },
//     { name: 1, _id: 0 },
//   )
//   .toArray();

// Mod

// db.users.find(
//   {age:{$mod:[3,0]}},
//   { name: 1,age:1, _id: 0 }
// ).toArray();

// Where
// db.users
//   .find(
//   { $where: "this.age >=25" },
//   { name: 1, age: 1, _id: 0 })
//   .toArray();

// db.users.updateOne(
//   { name: "kush" },
//   { $set: { salary: 20086, age: 18 } },
// );

db.users.find({ name: "kush" });

// unset
// db.users.updateOne(
//   { name: "kush" },
//   { $unset: { age: "65567767" } },
// );

// $inc
// db.users.updateOne(
//   { name: "kush" },
//   { $inc: { salary: 1000 } },
// );

// db.users.updateOne(
//   { name: "kush" },
//   { $mul: { salary: 1.15 } },
// );

db.users.updateOne({ name: "kush" }, [
  {
    $set: {
      salary: {
        $round: [{ $multiply: ["$salary", 1.143535] }, 2],
      },
    },
  },
]);
db.users.find({ name: "kush" });

/*
Dilshad 20425
janifer 20577
Harshit 20510
sanjay 21591
priyanka 19468
anand 20929

W/D Am MongoDb@3:30
Aashish 21038
divyanshi 18930
umakant 21338
kritika 17459
dhruv 20643
abhishek 21656
yogesh 20516
kush 20086
sunil 19855
sunil 19359
-- online
abhishek yadav 20720
arnav 21309
Nitesh 21291
Mansi 21238
Himanshu 20331

Annu yadav 20971
  */
