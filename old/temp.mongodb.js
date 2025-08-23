use("ducatmgmt");

// db.users.find();
// db.users.createIndex({"mobileNo":1});
// db.users.createIndex({"name":1});
// db.users.getIndexes();
// db.users.createIndex({ age: 1, salary: -1 })
// db.users.createIndex({ mobileNo: 1 }, { unique: true })
// db.users.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })
// db.users.dropIndex("indexName")
// db.users.dropIndexes()
// db.users.find().sort({ salary: -1 })
// db.users.find().sort({ age: 1, name: -1 })

// db.orders.insertMany();
// db.orders.find();
db.users.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "userId",
            foreignField: "userId",
            as: "users_orders"
        }
    },
    {
        $project: {
            _id: 0,
            userId: 1,
            name: 1,
            mobileNo: 1,
            isMarried: 1,
            age: 1,
            //   skills:1,
            //   address:1,
            // projects:1,
            dob: 1,
            salary: 1,
            isAdult: { $gte: ["$age", 18] },
            // users_orders:1,
            "users_orders.items": 1,
            "users_orders.orderAmount": 1,
            "users_orders.orderDate": 1,
        }
    },
    {
        $match: {
            "users_orders.orderAmount": { $gte: 500 }
        }
    },
    {
        $sort: {
            userId: -1
        }
    },
    { $limit: 2 },
    { $skip: 1 },
    { $addFields: { salaryAfterBonus: { $round: [{ $multiply: ["$salary", 1.15] }, 2] } } }
]);

db.users.aggregate([
    {
        $group: {
            _id: "$isMarried",
            totalUsers: { $sum: 1 },
            averageAge: { $avg: "$age" }
        }
    }
])


db.users.aggregate([
    {
        $lookup: {
            from: "orders",
            let: { uid: "$userId" },
            pipeline: [
                {
                    $match: {
                        $expr: { $eq: ["$userId", "$$uid"] }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        orderId: 1,
                        amount: 1,
                        status: 1
                    }
                }
            ],
            as: "users_orders"
        }
    },
    {
        $project: {
            _id: 0,
            userId: 1,
            name: 1,
            mobileNo: 1,
            isMarried: 1,
            age: 1,
            dob: 1,
            salary: 1,
            users_orders: 1
        }
    }
]);
