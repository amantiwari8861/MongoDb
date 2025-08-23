# MongoDB Expressions Cheat Sheet with Examples

```javascript
// Sample document:
{
  "_id": ObjectId("..."),
  "name": "Alice",
  "age": 25,
  "salary": 50000,
  "isMarried": false,
  "dob": ISODate("1999-04-23T00:00:00Z"),
  "skills": ["Java", "Spring Boot", "MongoDB"]
}

// ---------------------------
// 1. Arithmetic Expressions
// ---------------------------

// ➤ Add Bonus to Salary
{ $add: ["$salary", 5000] }

// ➤ Calculate Remaining Amount After Tax
{ $subtract: ["$salary", 8000] }

// ➤ Multiply Salary by 1.1 (10% hike)
{ $multiply: ["$salary", 1.1] }

// ---------------------------
// 2. Comparison Expressions
// ---------------------------

// ➤ Check if Age is Less than 30
{ $lt: ["$age", 30] }

// ➤ Check if Salary is Not Equal to 50000
{ $ne: ["$salary", 50000] }

// ---------------------------
// 3. Logical Expressions
// ---------------------------

// ➤ Is Young and Unmarried
{
  $and: [
    { $lt: ["$age", 30] },
    { $eq: ["$isMarried", false] }
  ]
}

// ➤ Age Not Between 25 and 30
{
  $nor: [
    { $gte: ["$age", 25] },
    { $lte: ["$age", 30] }
  ]
}

// ---------------------------
// 4. String Expressions
// ---------------------------

// ➤ Concatenate First and Last Name
{ $concat: ["$firstName", " ", "$lastName"] }

// ➤ Convert Email to Lowercase
{ $toLower: "$email" }

// ---------------------------
// 5. Date Expressions
// ---------------------------

// ➤ Extract Month of Birth
{ $month: "$dob" }

// ➤ Format DOB as String
{ $dateToString: { format: "%Y-%m-%d", date: "$dob" } }

// ---------------------------
// 6. Conditional Expressions
// ---------------------------

// ➤ Assign Category Based on Age
{
  $cond: {
    if: { $lt: ["$age", 18] },
    then: "Minor",
    else: "Adult"
  }
}

// ➤ Use $switch for Multiple Conditions
{
  $switch: {
    branches: [
      { case: { $lt: ["$age", 18] }, then: "Minor" },
      { case: { $and: [ { $gte: ["$age", 18] }, { $lt: ["$age", 60] } ] }, then: "Adult" }
    ],
    default: "Senior"
  }
}

// ---------------------------
// 7. Array Expressions
// ---------------------------

// ➤ Check if a User Knows MongoDB
{ $in: ["MongoDB", "$skills"] }

// ➤ Get Size of skills Array
{ $size: "$skills" }

// ---------------------------
// Sample Aggregation with Expressions
// ---------------------------
db.users.aggregate([
  {
    $project: {
      name: 1,
      isAdult: { $cond: { if: { $gte: ["$age", 18] }, then: true, else: false } },
      birthYear: { $year: "$dob" },
      totalSalaryWithBonus: { $add: ["$salary", 5000] },
      knowsMongoDB: { $in: ["MongoDB", "$skills"] },
      skillCount: { $size: "$skills" }
    }
  }
])

```
