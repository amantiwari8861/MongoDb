use("amazon");
db.createCollection("teachers");
db.teachers.insertMany([
    { "_id": 1, "name": "John Doe", "age": 35, "gender": "male" },
    { "_id": 2, "name": "Jane Smith", "age": 40, "gender": "female" },
    { "_id": 3, "name": "Michael Johnson", "age": 45, "gender": "male" },
    { "_id": 4, "name": "Emily Williams", "age": 30, "gender": "female" },
    { "_id": 5, "name": "Robert Brown", "age": 38, "gender": "male" },
    { "_id": 6, "name": "Emma Jones", "age": 33, "gender": "female" },
    { "_id": 7, "name": "William Davis", "age": 37, "gender": "male" },
    { "_id": 8, "name": "Olivia Miller", "age": 41, "gender": "female" },
    { "_id": 9, "name": "David Wilson", "age": 36, "gender": "male" },
    { "_id": 10, "name": "Sophia Moore", "age": 32, "gender": "female" },
    { "_id": 11, "name": "Richard Taylor", "age": 39, "gender": "male" },
    { "_id": 12, "name": "Isabella Anderson", "age": 43, "gender": "female" },
    { "_id": 13, "name": "Joseph Thomas", "age": 34, "gender": "male" },
    { "_id": 14, "name": "Mia Jackson", "age": 42, "gender": "female" },
    { "_id": 15, "name": "Charles White", "age": 36, "gender": "male" },
    { "_id": 16, "name": "Abigail Harris", "age": 31, "gender": "female" },
    { "_id": 17, "name": "Daniel Martin", "age": 44, "gender": "male" },
    { "_id": 18, "name": "Evelyn Thompson", "age": 38, "gender": "female" },
    { "_id": 19, "name": "Matthew Garcia", "age": 37, "gender": "male" },
    { "_id": 20, "name": "Sofia Martinez", "age": 35, "gender": "female" },
    { "_id": 21, "name": "Andrew Robinson", "age": 40, "gender": "male" },
    { "_id": 22, "name": "Grace Clark", "age": 33, "gender": "female" },
    { "_id": 23, "name": "Joshua Rodriguez", "age": 39, "gender": "male" },
    { "_id": 24, "name": "Avery Lewis", "age": 42, "gender": "female" },
    { "_id": 25, "name": "Christopher Lee", "age": 37, "gender": "male" },
    { "_id": 26, "name": "Chloe Walker", "age": 31, "gender": "female" },
    { "_id": 27, "name": "Kevin Hall", "age": 44, "gender": "male" },
    { "_id": 28, "name": "Zoey Allen", "age": 38, "gender": "female" },
    { "_id": 29, "name": "Brian Young", "age": 36, "gender": "male" },
    { "_id": 30, "name": "Harper King", "age": 34, "gender": "female" }
])
use("amazon");
db.getCollection("teachers").find();

use("amazon");
db.teachers.aggregate([{ $match: { "gender": "male" } }]);
db.teachers.aggregate([{ $match: { "gender": "male" } }]);

use("amazon");
db.teachers.aggregate([{ $match: { "gender": "male" } }, { $group: { "_id": "$age" } }]);

use("amazon");
db.teachers.aggregate([{ $match: { "gender": "male" } }, { $group: { "_id": "$age", count: { $sum: 1 } } }]);

use("amazon");
db.teachers.find({ "gender": "male" }).count();

use("amazon");
db.teachers.aggregate([
    { $group: { _id: "$age", names: { $push: "$name" } } }
]);

use("amazon");
db.teachers.aggregate([
    { $group: { _id: "$age", names: { $push: "$name" } } },
    { $project: { _id: 0, age: "$_id", names: 1 } }
]);

use("amazon");
db.teachers.aggregate([
    { $group: { _id: "$age", students: { $push: "$$ROOT" } } }
])

use("amazon");
db.teachers.aggregate([
    { $match: { gender: "male" } },
    { $group: { _id: "$age", numberOfTeachers: { $sum: 1 } } },
    { $sort: { numberOfTeachers: -1 } }]);

use("amazon");
db.teachers.aggregate([
    { $match: { gender: "male" } },
    { $group: { _id: "$age", numberOfTeachers: { $sum: 1 } } },
    { $sort: { numberOfTeachers: -1 } },
    { $project: { _id: 0, age: "$_id", numberOfTeachers: 1 } }
]);

use("amazon");
db.teachers.aggregate([
    { $match: { gender: "male" } },
    { $group: { _id: "$age", numberOfTeachers: { $sum: 1 } } },
    { $sort: { _id: 1 } },
    { $project: { _id: 0, age: "$_id", numberOfTeachers: 1 } }
]);

use("amazon");
db.teachers.aggregate([
    { $match: { gender: "male" } },
    { $group: { _id: "$age", numberOfTeachers: { $sum: 1 } } },
    { $sort: { numberOfTeachers: -1 } },
    { $group: { _id: null, maxNumberInAnAgeGroup: { $max: "$numberOfTeachers" } } }]);

use("amazon");
db.teachers.aggregate([
    {
        $group: {
            _id: "$age", numberOfTeachers: { $sum: 1 },
            sumOfAgesInEachAgeGroup: { $sum: { $toDouble: "$age" } }
        }
    }
]);

use("amazon");
db.createCollection("students");
db.getCollection("students").insertMany([
        { "name": "Priyanka", "bio": "Coffee keeps me going!", "experience": [{ "company": "Myntra", "duration": 3, "neglect": false }, { "company": "Swiggy", "duration": 1, "neglect": false }], "Hobbies": "Painting", "age": 5 },
        { "name": "Rahul", "bio": "Making the difference with code.", "experience": [{ "company": "TCS", "duration": 4, "neglect": false }, { "company": "Infosys", "duration": 2, "neglect": true }], "Hobbies": ["Gaming","Studying"], "age": 6 },
        { "name": "Raj", "bio": "Making the difference with code.", "experience": [{ "company": "TCS", "duration": 4, "neglect": false }, { "company": "Infosys", "duration": 2, "neglect": true }], "Hobbies": "Cricket", "age": 6 },
        { "name": "Aman", "bio": "Making the difference with code.", "experience": [{ "company": "TCS", "duration": 6, "neglect": false }, { "company": "Infosys", "duration": 2, "neglect": true }], "Hobbies": "Football", "age": 6 },
        { "name": "Aisha", "bio": "Passionate about Design Thinking.", "experience": [{ "company": "Zomato", "duration": 1, "neglect": true }, { "company": "MakeMyTrip", "duration": 2, "neglect": false }, { "company": "Oyo", "duration": 1, "neglect": false }], "Hobbies": "Traveling", "age": 3 },
        { "name": "Karan", "bio": "Always up for a challenge.", "experience": [{ "company": "Wipro", "duration": 2, "neglect": true }, { "company": "Accenture", "duration": 5, "neglect": false }], "Hobbies": "Cricket", "age": 7 },
        { "name": "Sonia", "bio": "Marketing is my thing.", "experience": [{ "company": "Hindustan Unilever", "duration": 4, "neglect": false }, { "company": "Uber", "duration": 1, "neglect": true }], "Hobbies": "Cooking", "age": 8 },
        { "name": "Vikas", "bio": "The data whisperer.", "experience": [{ "company": "Netflix", "duration": 2, "neglect": false }, { "company": "Hotstar", "duration": 3, "neglect": true }], "Hobbies": "Reading", "age": 9 },
        { "name": "Priya", "bio": "Building beautiful UIs.", "experience": [{ "company": "Adobe", "duration": 1, "neglect": true }, { "company": "InMobi", "duration": 4, "neglect": false }], "Hobbies": "Dancing", "age": 10 },
        { "name": "Arjun", "bio": "The full-stack rockstar.", "experience": [{ "company": "Flipkart", "duration": 2, "neglect": false }, { "company": "Myntra", "duration": 2, "neglect": true }, { "company": "Paytm", "duration": 1, "neglect": false }], "Hobbies": "Coding", "age": 11 },
        { "name": "Smita", "bio": "Mastering the art of SEO.", "experience": [{ "company": "Google", "duration": 3, "neglect": false }], "Hobbies": "Writing", "age": 12 },
        { "name": "Ramesh", "bio": "Cloud solutions architect.", "experience": [{ "company": "Amazon Web Services", "duration": 5, "neglect": false }], "Hobbies": "Cycling", "age": 13 },
        { "name": "Anjali", "bio": "Turning ideas into products.", "experience": [{ "company": "Ola", "duration": 2, "neglect": true }, { "company": "Uber", "duration": 3, "neglect": false }], "Hobbies": "Painting", "age": 14 },
        { "name": "Suresh", "bio": "The social media guru.", "experience": [{ "company": "Meta", "duration": 4, "neglect": false }], "Hobbies": "Traveling", "age": 15 },
        { "name": "Pooja", "bio": "Making finance fun and accessible.", "experience": [{ "company": "Paytm Money", "duration": 1, "neglect": false }, { "company": "PhonePe", "duration": 2, "neglect": true }], "Hobbies": "Cooking", "age": 16 },
        { "name": "Amit", "bio": "The cybersecurity defender.", "experience": [{ "company": "Cisco", "duration": 3, "neglect": false }], "Hobbies": "Traveling", "age": 15 }
    ]);

use("amazon");
db.getCollection("students").find();

use("amazon");
db.students.aggregate([{
    $group: {
        _id: "$age",
        hobbies: {
            $push: "$Hobbies"
        }
    }
}]);

use("amazon");
db.students.aggregate([{ $unwind: "$Hobbies" }, {
    $group: {
        _id: "$age",
        hobbies: {
            $push: "$Hobbies"
        }
    }
}]);


//replication ?