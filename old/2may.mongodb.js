use("ducatmgmt");

// db.users.find();
// db.users.find({"userId":"100"});

// Indexes

// db.users.getIndexes();
// db.users.dropIndexes();
// db.users.getIndexes();

// db.users.find({"userId":110});
// db.users.createIndex({userId:1});
// db.users.find({"8":110}).explain("executionStats");

// B-Tree data structure

// memory 
// db.users.createIndex({name:1});
// db.users.find().sort({"name":1}).explain("executionStats");

// db.users.dropIndex("name_1");

// db.users.getIndexes();

// db.users.find().sort({"name":-1});
// db.users.find().sort({"name":-1}).explain("executionStats");
// db.users.find().sort({"name":-1});

// db.users.createIndex({name:-1});


// Embedded Document
// db.users.find(); // one-to-one

// Reference Type(referencing a document)

// db.users.drop();
// db.orders.drop();

// Aggregation

// db.users.insertMany([{
//     "userId": 100,
//     "name": "Aman Tiwari",
//     "mobileNo": 8448179216,
//     "isMarried": false,
//     "age": null,
//     "skills": ["MEAN", "MERN", "JAVA FSD", "etc"],
//     "address": {
//         "city": "Noida",
//         "state": "UP",
//         "pincode": 201301,
//         "street": "sectoro 62 noida "
//     },
//     "dob": "1999-04-22T00:00:00.000Z",
//     "projects": [
//         {
//             "projectName": "E-commerce Platform",
//             "projectDescription": "Developed a full-stack e-commerce website using MEAN stack."
//         },
//         {
//             "projectName": "Task Management App",
//             "projectDescription": "Created a MERN-based task management application."
//         }
//     ],
//     "salary": 85000
// },
// {
//     "userId": 101,
//     "name": "Ravi Sharma",
//     "mobileNo": 9876543210,
//     "isMarried": true,
//     "age": 30,
//     "skills": ["Java", "Spring Boot", "Hibernate"],
//     "address": {
//         "city": "Delhi",
//         "state": "Delhi",
//         "pincode": 110001,
//         "street": "Connaught Place"
//     },
//     "dob": "1994-06-15T00:00:00.000Z",
//     "projects": [
//         {
//             "projectName": "Banking Application Backend",
//             "projectDescription": "Built REST APIs using Spring Boot for a core banking system."
//         },
//         {
//             "projectName": "Inventory Management System",
//             "projectDescription": "Developed an inventory system using Java and Hibernate."
//         }
//     ],
//     "salary": 95000
// }]);

// db.orders.insertMany([
//     {
//         "userId": 100, // referencing
//         "orderAmount": 394,
//         "orderDate": "2024-12-03",
//         "items": [
//           {
//             "name": "Nintendo Switch",
//             "qty": 1
//           },
//           {
//             "name": "Tile Mate",
//             "qty": 2
//           }
//         ]
//       },
//       {
//         "userId": 101,
//         "orderAmount": 291,
//         "orderDate": "2024-12-26",
//         "items": [
//           {
//             "name": "Google Nest Hub",
//             "qty": 3
//           },
//           {
//             "name": "Logitech MX Master 3",
//             "qty": 2
//           }
//         ]
//       },
//       {
//         "userId": 101,
//         "orderAmount": 452,
//         "orderDate": "2024-11-11",
//         "items": [
//           {
//             "name": "PlayStation 5",
//             "qty": 3
//           },
//           {
//             "name": "Kindle Paperwhite",
//             "qty": 1
//           }
//         ]
//       },
//       {
//         "userId": 101,
//         "orderAmount": 465,
//         "orderDate": "2025-04-08",
//         "items": [
//           {
//             "name": "TP-Link Archer AX50",
//             "qty": 3
//           },
//           {
//             "name": "Samsung Galaxy S23",
//             "qty": 1
//           }
//         ]
//       },
//       {
//         "userId": 101,
//         "orderAmount": 448,
//         "orderDate": "2024-09-13",
//         "items": [
//           {
//             "name": "TP-Link Archer AX50",
//             "qty": 1
//           },
//           {
//             "name": "MacBook Pro",
//             "qty": 2
//           }
//         ]
//       },
//       {
//         "userId": 101,
//         "orderAmount": 260,
//         "orderDate": "2024-12-08",
//         "items": [
//           {
//             "name": "Kindle Paperwhite",
//             "qty": 3
//           },
//           {
//             "name": "Anker PowerCore",
//             "qty": 2
//           }
//         ]
//       }
// ]);

// db.users.aggregate([
//     {$lookup: {
//       from: "orders",
//       localField: "userId",
//       foreignField: "userId",
//       as: "userOrders"
//     }},
//     {
//         $project: {
//             _id: 0,
//             userId: 1,
//             name: 1,
//             mobileNo: 1,
//             isMarried: 1,
//             age: 1,
//             //   skills:1,
//             //   address:1,
//             // projects:1,
//             dob: 1,
//             salary: 1,
//             // userOrders:1,
//             // "userOrders.items":1,
//             "userOrders.orderAmount":1,
//             "userOrders.orderDate":1,
//         }
//     }
// ]);



// db.users.aggregate([
//     {
//         $match: {
//             $and: [
//                 {
//                     "address.state": "Uttarakhand"
//                 },
//                 {
//                     "isMarried": false
//                 }
//             ]
//         }
//     },

//     {
//         $lookup: {
//             from: "orders",
//             localField: "userId",
//             foreignField: "userId",
//             as: "userOrders"
//         }
//     },

//     {
//         $project: {
//             _id: 0,
//             userId: 1,
//             name: 1,
//             mobileNo: 1,
//             isMarried: 1,
//             age: 1,
//             //   skills:1,
//             //   address:1,
//             // projects:1,
//             dob: 1,
//             "address.city": 1,
//             "address.state": 1,
//             salary: 1,
//             // userOrders:1,
//             // "userOrders.items":1,
//             // "userOrders.orderAmount":1,
//             // "userOrders.orderDate":1,
//         }
//     },
//     {
//         $sort: {
//             salary: 1
//             //   name: 1
//         }
//     },
//     {
//         $addFields: {
//             salaryAfterBonus: { $multiply: ["$salary", 1.15] }
//         }
//     }
//     // { $skip: 2 },
//     // {$limit: 1}
// ]);

// db.users.aggregate([
//     {
//         $group: {
//             _id: "$address.state",
//             totalUsers: { $sum: 1 },
//             // allUsers: { $push: "$$ROOT" } // collects entire documents
//         }
//     },
//     {
//         $sort: {
//             totalUsers: -1
//         }
//     },
// ]);

// db.users.aggregate([
//     {
//       $group: {
//         _id: null,
//         allStates: { $addToSet: "$address.state" }
//       }
//     }
//   ]);

db.users.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "userId",
            foreignField: "userId",
            as: "userOrders"
        }
    },
    {
        $group: {
            _id: ["$address.state"],
            // _id: ["$address.state", "$address.city"],
            // state:{$push:"$address.state"},
            state: { $addToSet: "$address.state" },
            // city: { $addToSet: "$address.city" },
            totalSalary: { $sum: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" },
            avgSalary: { $avg: "$salary" },
            totalUsers: { $sum: 1 },
            userIds: { $addToSet: "$userId" },
            // allUsers: { $push: "$$ROOT" } // collects entire documents
            // allUsers: { $push: "$name" }, // collects entire documents
            // allSalary: { $push: "$salary" }, // collects entire documents
            allOrders: { $push: "$userOrders" }, // collects entire documents
        }
    },
    {
        $project: {
            _id: 0,
            
        }
    },
    {
        $sort: {
            totalUsers: -1
        }
    },
]);
