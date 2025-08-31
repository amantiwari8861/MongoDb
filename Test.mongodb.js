// db.getMongo().getDBs();

use("WE_5_30")

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




db.users.find(
    {
     
    },
    {_id:0,userId:1,name:1,age:1,salary:1,gender:1}
)
.sort({userId:-1})
// .count();
// .skip(5)
.toArray();
