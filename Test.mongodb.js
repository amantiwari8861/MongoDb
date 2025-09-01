// db.getMongo().getDBs();

use("WE_5_30");

// db.createCollection("users")

// db.users.find()
// db.users.find().toArray();
// db.users.find(
//     {},
//     {_id:0,userId:1,name:1}
// ).toArray();
// db.users.find(
//     {
//         // $or:[{gender:'Female'},
//         //     {salary:{$gt:80000}}]
//         // $and:[{gender:'Female'},
//         //     {salary:{$gt:80000}}]
//         salary:{$not:{$lt:117000}}

//     },
//     {_id:0,userId:1,name:1,age:1,salary:1,gender:1}
// )
// .sort({userId:-1})
// // .count();
// // .skip(5)
// .toArray();

// db.users.find(
//     {

//     },
//     {_id:0,userId:1,name:1,age:1,salary:1,gender:1}
// )
// .sort({userId:-1})
// // .count();
// // .skip(5)
// .toArray();

// db.users.find();
// db.orders.find().count();

/* db.users.aggregate([
  {
    $match: { $and: [{ gender: "Female" }, { salary: { $gt: 80000 } }] },
  },
  {
    $lookup: {
      from: "orders",
      localField: "userId",
      foreignField: "userId",
      as: "user_orders"
    }
  },
  {
    $addFields: {
      newSalary:{$multiply:["$salary",1.15]},
      fifteenOfSal:{$multiply:["$salary",0.15]}
    }
  },
  {
    $project: {
      name: 1,
      userId: 1,
      _id: 0,
      gender: 1,
      salary: 1,
      newSalary:1,
      fifteenOfSal:1,
    //   user_orders:1,
      "user_orders.orderAmount":1,
      "user_orders.orderDate":1,
    },
  },
  {
    $sort: {
      salary: -1,
    },
  },
  {
    $skip: 2,
  },
  {
    $limit: 5,
  },
]);
 */

db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "userId",
      foreignField: "userId",
      as: "user_orders",
    },
  },
  {
    $addFields: {
      newSalary: { $multiply: ["$salary", 1.15] },
      fifteenOfSal: { $multiply: ["$salary", 0.15] },
    },
  },
  {
    $sort: {
      salary: -1,
    },
  },
  {
    $group: {
      _id: "$gender",
      allUsers: { $push: "$$ROOT" },
    },
  },
  {
    $project: {
      _id: 1,
      allUsers: 1,
    },
  },
]);
