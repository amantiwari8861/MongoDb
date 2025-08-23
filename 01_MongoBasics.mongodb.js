// mongosh "mongodb+srv://mongocluster.hw6ib.mongodb.net/" --apiVersion 1 --username root

// mongodb+srv://root:1234@mongocluster.hw6ib.mongodb.net/

// use("ducatmgmt");
// use ('admin');
// use('mydb');
// db.adminCommand('listDatabases');


// CRUD 

// db.users.insertOne({
//     "userId": 1,
//     "name": "Aaryahi Grewal",
//     "mobileNo": 6246478589,
//     "isMarried": false,
//     "age": null,
//     "skills": [
//         "Spring Boot",
//         "MEAN",
//         "Node.js",
//         "MERN"
//     ],
//     "address": {
//         "city": "Jamnagar",
//         "state": "Andhra Pradesh",
//         "pincode": 164651,
//         "street": "144, Chauhan Street"
//     },
//     "dob": "1995-12-07T00:00:00.000Z",
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
//     "salary": 44372
// });


// db.users.insertMany([
//     {
//         "userId": 1,
//         "name": "Aaryahi Grewal",
//         "mobileNo": 6246478589,
//         "isMarried": false,
//         "age": null,
//         "skills": [
//             "Spring Boot",
//             "MEAN",
//             "Node.js",
//             "MERN"
//         ],
//         "address": {
//             "city": "Jamnagar",
//             "state": "Andhra Pradesh",
//             "pincode": 164651,
//             "street": "144, Chauhan Street"
//         },
//         "dob": "1995-12-07T00:00:00.000Z",
//         "projects": [
//             {
//                 "projectName": "E-commerce Platform",
//                 "projectDescription": "Developed a full-stack e-commerce website using MEAN stack."
//             },
//             {
//                 "projectName": "Task Management App",
//                 "projectDescription": "Created a MERN-based task management application."
//             }
//         ],
//         "salary": 44372
//     },
//     {
//         "userId": 2,
//         "name": "Nayantara Chaudhuri",
//         "mobileNo": 8833208154,
//         "isMarried": true,
//         "age": 48,
//         "skills": [
//             "Node.js",
//             "Spring Boot",
//             "React"
//         ],
//         "address": {
//             "city": "Surendranagar Dudhrej",
//             "state": "Arunachal Pradesh",
//             "pincode": 611557,
//             "street": "811\nVarkey Nagar"
//         },
//         "dob": "1990-08-25T00:00:00.000Z",
//         "projects": [
//             {
//                 "projectName": "E-commerce Platform",
//                 "projectDescription": "Developed a full-stack e-commerce website using MEAN stack."
//             },
//             {
//                 "projectName": "Task Management App",
//                 "projectDescription": "Created a MERN-based task management application."
//             }
//         ],
//         "salary": 116588
//     },
//     {
//         "userId": 3,
//         "name": "Indrans Bora",
//         "mobileNo": 8129863997,
//         "isMarried": false,
//         "age": 98,
//         "skills": [
//             "React",
//             "MongoDB",
//             "Angular",
//             "Spring Boot",
//             "SQL"
//         ],
//         "address": {
//             "city": "Jabalpur",
//             "state": "Meghalaya",
//             "pincode": 547116,
//             "street": "861, Randhawa Nagar"
//         },
//         "dob": "1995-10-08T00:00:00.000Z",
//         "projects": [
//             {
//                 "projectName": "E-commerce Platform",
//                 "projectDescription": "Developed a full-stack e-commerce website using MEAN stack."
//             },
//             {
//                 "projectName": "Task Management App",
//                 "projectDescription": "Created a MERN-based task management application."
//             }
//         ],
//         "salary": 40230
//     }
// ]);

// Update 

// db.users.updateOne({ "userId": 1 }, { $set: { "name": "Raj Aggarwal" } });

// db.users.updateOne({ "userId": 1 }, { $unset: { "name": "vgfdvh" } });
// db.users.updateOne({ "userId": 1 }, { $set: { "name": "Raj" } });
// db.users.updateOne({ "userId": -5 }, { $set: { "name": "Raj" } },{upsert:true});
// db.users.updateOne({ "userId": 1 }, { $set: { "name": "Neeru" } },{upsert:true});

// db.users.findOne({ userId: 1 });

// db.users.deleteOne({"userId":1});
// db.users.findOne({ userId: 1 });

// db.users.deleteMany({"age":{$lt:30}});
// db.users.drop();
// db.users.find({"age":{$lt:30}}).count();

// db.users.delete({"age":{$lt:30}});


// db.users.findOne();
// db.users.find();
// db.users.find({name:{$eq:"Aman Tiwari"}});
// db.users.find({name:{$eq:"Aman Tiwari"}},{name:1,_id:0});
// db.users.find({name:{$eq:"Aman Tiwari"}},{name:1,_id:0,address:1});
// db.users.find({name:{$eq:"Aman Tiwari"}},{name:1,_id:0,"address.city":1});
// db.users.find({name:{$eq:"Aman Tiwari"}},{name:1,_id:0,"address.city":1,skills:1,projects:1});
// db.users.find({name:{$eq:"Aman Tiwari"}},{name:1,_id:0,"address.city":1,"skills":1,projects:1});
// db.users.find({skills:"MERN"},{name:1,_id:0,"address.city":1,"skills":1,projects:1});

// Operators 

// db.users.find().count();
// db.users.find({name:{$eq:"Aman Tiwari"}});
// db.users.find({age:{$lt:30}}).count();
// db.users.find({age:{$lte:30}}).count();
// db.users.find({age:{$eq:30}}).count();
// db.users.find({age:{$gt:30}}).count();
// db.users.find({age:{$gte:30}}).count();
// db.users.find({age:{$eq:null}}).count();
// db.users.find({age:{$exists:true}}).count();


// 34 + 1 + 2(null) + 83 = 120


/*
    MongoDb Syllabus

    1. MongoDB intro
    2. Installation
    3. Create,Read,Update,Delete
        - projection
        - limit
        - sorting
    4. Data Types in BSON
    5. Operators in MongoDB
        - comparison operator
        - logical operator
        - Element & Evaluation Operators
        - Array Operators

    6. Referencing and Embedding
    7. indexes
    8. Expressions in Aggregation Framework

*/


// db.users.find().limit(2);
// db.users.find().skip(3).limit(2);

// atleast one of the condition must be satisfied

// db.users.find({
//     $or:[{"userId":{$eq:5}},{"userId":{$eq:7}}]
// }).explain("executionStats");


// db.users.find({
//     $and: [
//         { "address.state": { $eq: 'Himachal Pradesh' } },
//         { "age": { $lt: 50 } },
//         { "isMarried": { $eq: true } }
//     ]
// });

// db.users.find({
//     "address.state": { $not: { $eq: 'Himachal Pradesh' } }
// }).count();

// db.users
//     .find({},{_id:0,name:1,age:1})
//     .sort({age:-1})
//     .toArray();
// .toArray().length;



// db.users.find(
//     { skills: { $all: ["JAVA FSD","Spring Boot",] } }
// );

// db.users.find(
//     { skills: { $size:3 } }
// );
// ).count();

// db.users.find(
//     {
//         projects: {
//             $elemMatch: {
//                 "projectName": "E-commerce Platform"
//             }
//         }
//     }
// ).count();

// db.users.find({ skills: { $in: ["JAVA FSD", "React"] } });

// db.users.find({ skills: { $nin: ["PHP", "C++"] } });

// db.users.updateOne(
//   { name: "Aman Tiwari" },
//   { $push: { skills: "Express.js" } }
// );

// db.users.find({"name":"Aman Tiwari"});

// db.users.updateOne(
//     { name: "Aman Tiwari" },
//     { $pull: { skills: "etc" } }
// );
// db.users.find({"name":"Aman Tiwari"});

// db.users.updateOne(
//     { name: "Aman Tiwari" },
//     { $pop: { skills: 1 } }  // 1 = last, -1 = first
// );
// db.users.updateOne(
//     { name: "Aman Tiwari" },
//     { $pop: { skills: -1 } }  // 1 = last, -1 = first
// );
// db.users.find({"name":"Aman Tiwari"});

// Embedding a document
// One-to-One
// User <-> Address 
// One-to-Many
// User <-> Projects 


// Referencing a document 
// Many-to-Many
// User  <-->   Movie 

// db.movies.insertMany([
//     {
//         name: "Saiyaara",
//         releaseDate: "18 July",
//         price: 400,
//         Director: "Mohit Suri",
//         MusicDirector: "Tanishk Bagchi",
//         Producers: ["Aditya Chopra", "Akshaye Widhani"],
//         ProductionCompany: "Yash Raj Films",
//         ProductionDesign: ["Rajat Poddar", "Laxmi Keluskar"],
//     },
//     {
//         name: "Metro… In Dino",
//         releaseDate: "4 July 2025",
//         Director: "Anurag Basu",
//         Cast: ["Aditya Roy Kapur", "Sara Ali Khan", "Anupam Kher", "Neena Gupta", "Ali Fazal", "Fatima Sana Shaikh"],
//         Platform: "Theatres"
//     },
//     {
//         name: "The Hunt – The Rajiv Gandhi Assassination Case",
//         releaseDate: "4 July 2025",
//         Director: "Santosh Singh",
//         Cast: ["Amit Sial", "Bagavathi Perumal"],
//         Platform: "Theatres"
//     },
//     {
//         name: "Kaalidhar Laapata",
//         releaseDate: "4 July 2025",
//         Director: "Madhumita",
//         Cast: ["Abhishek Bachchan", "Daivik Baghela", "Mohammed Zeeshan Ayyub"],
//         Platform: "Zee5 (OTT)"
//     },
//     {
//         name: "Aap Jaisa Koi",
//         releaseDate: "11 July 2025",
//         Director: "Vivek Soni",
//         Cast: ["R Madhavan", "Fatima Sana Shaikh"],
//         Platform: "Netflix"
//     },
//     {
//         name: "Aankhon Ki Gustaakhiyan",
//         releaseDate: "11 July 2025",
//         Director: "Santosh Singh",
//         Cast: ["Vikrant Massey", "Shanaya Kapoor"],
//         Platform: "Theatres"
//     },
//     {
//         name: "Maalik",
//         releaseDate: "11 July 2025",
//         Director: "Pulkit",
//         Cast: ["Rajkummar Rao", "Huma Qureshi"],
//         Platform: "Theatres"
//     },
//     {
//         name: "Bas Karo Aunty",
//         releaseDate: "15 July 2025",
//         Director: "Unknown",
//         Cast: ["Ishwak Singh", "Mahima Makwana"],
//         Platform: "Theatres"
//     },
//     {
//         name: "Saiyaara",
//         releaseDate: "18 July 2025",
//         Director: "Mohit Suri",
//         Cast: ["Ahaan Panday", "Aneet Padda"],
//         Platform: "Theatres"
//     },
//     {
//         name: "Tanvi The Great",
//         releaseDate: "18 July 2025",
//         Director: "Unknown",
//         Cast: ["Iain Glen", "Sammy Jonas Heaney"],
//         Platform: "Theatres"
//     },
//     {
//         name: "Raakh",
//         releaseDate: "19 July 2025",
//         Director: "Unknown",
//         Cast: ["John Abraham", "Manoj Bajpayee"],
//         Platform: "Theatres"
//     },
//     {
//         name: "Param Sundari",
//         releaseDate: "25 July 2025",
//         Director: "Tushar Jalota",
//         Cast: ["Sidharth Malhotra", "Janhvi Kapoor"],
//         Platform: "Theatres"
//     },
//     {
//         name: "Son of Sardaar 2",
//         releaseDate: "25 July 2025",
//         Director: "Unknown",
//         Cast: ["Ajay Devgn", "Mrunal Thakur"],
//         Platform: "Theatres"
//     },
//     {
//         name: "So Long Valley",
//         releaseDate: "25 July 2025",
//         Director: "Man Singh",
//         Cast: ["Tridha Choudhury", "Akanksha Puri", "Vikram Kochhar"],
//         Platform: "Theatres"
//     }
// ]);

// db.movies.find();

// db.users.updateOne(
//     {name:"Aman Tiwari"},
//     {$set:{ticketPurchased:
//         ["685fea7c887676b58ef6e1df"]}
//     });

// db.users.find({name:"Aman Tiwari"});

// db.users.updateOne(
//     { name: "Aman Tiwari" },
//     { $push: { ticketPurchased: "685fea7c887676b58ef6e1eb" } }
// );
// db.users.find({name:"Aman Tiwari"});

// db.users.find();

// Indexes  

// db.users.find{"name":"Aman Tiwari"}).explain("executionStats");

// db.users.createIndex({"mobileNo":1});
// db.users.createIndex({"mobileNo":-1});
// db.users.getIndexes();

// db.users.find({"mobileNo":3668100316});
// db.users.find({"mobileNo":3668100316}).explain("executionStats");
// db.users.dropIndex("mobileNo_1");

// db.users.dropIndexes();

// db.users.createIndex({"userId":1,"name":1});

// db.users.find({"userId":4});
// db.users.find({"userId":4}).explain("executionStats");

// B Tree -> Data Structure


// ## 🔷 What is Aggregation?

// Aggregation in MongoDB allows you to:

// - Filter (`$match`)
// - Transform (`$project`, `$addFields`)
// - Group (`$group`)
// - Sort (`$sort`)
// - Join (`$lookup`)
// - Limit (`$limit`, `$skip`)
// - Count, sum, average, etc.

// All this is done using the **Aggregation Pipeline**, which processes documents step by step.


// db.users.find();

// db.users.aggregate([
//     {
//         $match: {
//             age: { $lte: 60 }
//         }
//     },
//     {
//         $count: 'totalUsers'
//     }
// ]);

// db.users.aggregate([
//     {
//         $group: {
//             _id: "$address.state",
//             userPerState: { $sum: 1 },
//             usersList:{$push:"$$ROOT"}
//         }
//     },
//     // {
//     //     $skip: 10
//     // },
//     {
//         $project: {
//           _id:1,
//           userPerState:1,
//           "usersList.name":1,
//           "usersList.mobileNo":1
//         }
//     },
//     {
//         $sort: {
//             userPerState: -1
//         }
//     }
// ]);

// db.movies.find();


// db.users.find({name:"Aman Tiwari"});

// db.users.updateOne({name:"Aman Tiwari"},
//     {$set:{"ticketPurchased":[ObjectId("685fea7c887676b58ef6e1df"),ObjectId("685fea7c887676b58ef6e1e8")]}})

// db.users.aggregate([
//     {
//         $lookup: {
//           from: "movies",
//           localField: "ticketPurchased",
//           foreignField: "_id",
//           as: "movies_purchased"
//         }
//     },
//     {
//         $match: {
//           name:{$eq:"Aman Tiwari"}
//         }
//     },
//     {
//         $project: {
//           _id:1,
//           name:1,
//           gender:1,
//           salary:1,
//           "movies_purchased.name":1,
//           "movies_purchased.price":1,
//         }
//     }
// ]);



// Aggregation   ->  Python 
// PDBC 

use("ecommerce");

db.users.aggregate([
    // {
    //     $match: {
    //         userId: 1
    //     }
    // },
    {
        $lookup: {
          from: "orders",
          localField: "userId",
          foreignField: "userId",
          as: "user_orders"
        }
    },
    {
        $addFields:{totalAmount:{$sum:"$user_orders.orderAmount"}}
    },
    // {
    //     $group: {
    //         _id: "$gender",
    //         total: { $sum: 1 },
    //         names: { $push: "$name" },
    //         salaries: { $push: "$salary" },
    //         avgSalary: { $avg: "$salary" },
    //         males:{$push:"$$ROOT"}
    //     }
    // },
    // {
    //     $addFields: {
    //       gender: "$_id"
    //     }
    // },
    // {
    //     $match: {
    //         _id: "Male"
    //     }
    // },
    {
        $addFields:{tax:{$multiply:["$totalAmount",0.18]}}
    },
    {
        $addFields:{netAmount:{$add:["$tax","$totalAmount"]}}
    },
    {
        $project: {
            _id:0,
            name:1,
            // user_orders:1,
            totalAmount:1,
            // tax:{$multiply:["$totalAmount",0.18]},
            tax:1,
            netAmount:1 ,// not work 
            pay:{ $concat: [ { $literal: "$" }, {$toString:"$netAmount"} ]},
            
            // netAmount2:{$add:["$tax","$totalAmount"]} // not work 
            // "user_orders.orderAmount":1,
            // "user_orders.orderDate":1,
            // "user_orders.items":1,
            // _id:0,
            // gender:1,
            // total: 1,
            // names: 1,
            // salaries: 1,
            // males:1,
            // avgerageSalary: { $round: ["$avgSalary", 2] }
        }
    },
    {
        $sort: {
        //   "user_orders.orderAmount":-1,
          "totalAmount":-1,
        }
    },
    {
        $limit: 3
    }
]);