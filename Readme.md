# Getting started with MongoDB

Database -> organized collection of data.

## Different types of Data

- Structured data -> stores in -> Table format
- unstructured data -> stored in -> JSON format

SQL Database -> eg. MySQL,Oracle DB,postgreSQL,etc.
No-SQL Database -> eg. MongoDB

### Note : Most RDBMS can store unstructured data but they are not too efficient

SQL -> Schema(structure) -> Fixed
No-SQL -> Schema -> Dynamic

eg. we have to store the ecommerce products info which DBMS we should choose ?

### we will choose mongo DB

```json
[
  {
    "company_name": "Levis",
    "price": 1200,
    "sizes": ["M", "L", "XL", "XXL"],
    "haveCollar": true
  },
  {
    "company_name": "Samsung",
    "model": "S25 Ultra 5G",
    "price": 12800,
    "cameraZoom": "200MP"
  }
]
```

### Data Types

```json
{
  "_id": 8861,
  "name": "Aman Tiwari",
  "age": null,
  "isMarried": false,
  "skills": ["MEAN", "MERN", "JAVA FSD", "etc"],
  "salary": 60000,
  "dob": "1999-04-22",
  "address": {
    "pincode": 201301,
    "city": "Noida",
    "state": "UP",
    "country": "INDIA"
  }
}
```

## **1. Introduction to MongoDB**

- MongoDB is a **NoSQL database** that stores data in **JSON-like BSON format**.
- It is **schema-less**, meaning documents in a collection can have different fields.
- It is designed for **high performance, scalability, and flexibility**.

- we can install mongo db in 2 ways

1. offline(locally) -> MongoDb Server
2. online(cloud) -> Mongo Atlas

## Set Up mongo DB

1. using compass
2. using mongosh
3. using vs code
4. using mongosh in compass

- to see existing datbases `show dbs;`
- to see existing datbases in vscode `db.getMongo().getDBs();`

- to create a new database `use dbname;`
- to create a new database in vscode `use("dbname");`

### Note : database will not be visible until u don't make a collection in it

- to create a collection `db.createCollection("collectionname");`
- use `cls` to clear the terminal in mongocompass or mongosh

- to make a collection type this

```javascript
db.products.insertOne({
  _id: 101,
  name: "Laptop",
  price: 60000,
});
```

### Note : this will automatically creates a database

- to see all collections `show collections;`
- to see all the documents in the collection `db.collectionname.find();`

every method must be in lowerCamelCase (except first word every word's first letter is Capital)


```javascript
db.products.insertMany([
    {
        "prodId":201,
        "prodName":"Smart Phone",
        "price":50000,
        "height":5.6,
        "RAM":8,
    },
    {
        "prodId":202,
        "prodName":"Remote",
        "price":500,
        "height":3.6,
        "noOfBattery":2
    }
]);
```

### **Read Documents**

- get name projection wit id `db.users.find({},{"name":1})`
- get name projection without id `db.users.find({},{"name":1,"_id":0})`
- get a nested field `db.users.find({},{"address.city":1,"_id":0})`

```js
db.users.find(); // Retrieve all documents
db.users.find({ age: { $gt: 25 } }); // Find users older than 25
```

### **Update Documents**

```js
db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } });
db.users.updateMany({}, { $set: { status: "active" } });
```

### **Delete Documents**

```js
db.users.deleteOne({ name: "Bob" });
db.users.deleteMany({ city: "London" });
```

## **Operators in MongoDB** 🚀

MongoDB provides powerful **operators** that allow you to perform various operations in **queries, updates, projections, and aggregations**. These operators can be categorized as follows:

---

### **1️⃣ Comparison Operators**

Used to compare values in queries.

| Operator | Description                                               | Example                                     |
|----------|-----------------------------------------------------------|---------------------------------------------|
| `$eq`    | Matches values equal to a specified value                 | `{ age: { $eq: 25 } }`                      |
| `$ne`    | Matches values not equal to a specified value             | `{ age: { $ne: 30 } }`                      |
| `$gt`    | Matches values greater than a specified value             | `{ age: { $gt: 18 } }`                      |
| `$gte`   | Matches values greater than or equal to a specified value | `{ age: { $gte: 21 } }`                     |
| `$lt`    | Matches values less than a specified value                | `{ age: { $lt: 65 } }`                      |
| `$lte`   | Matches values less than or equal to a specified value    | `{ age: { $lte: 50 } }`                     |
| `$in`    | Matches values present in an array                        | `{ city: { $in: ["New York", "London"] } }` |
| `$nin`   | Matches values **not** present in an array                | `{ city: { $nin: ["Paris", "Berlin"] } }`   |

✅ **Example Query:**

```js
db.users.find({ age: { $gte: 18, $lte: 30 } })
```

🔹 Finds users **aged between 18 and 30**.

---


## **2️⃣ Logical Operators**
Used to combine multiple query conditions.

| Operator | Description                                               | Example                                                  |
|----------|-----------------------------------------------------------|----------------------------------------------------------|
| `$and`   | Matches documents that satisfy **all** conditions         | `{ $and: [{ age: { $gt: 18 } }, { city: "New York" }] }` |
| `$or`    | Matches documents that satisfy **at least one** condition | `{ $or: [{ age: { $lt: 18 } }, { city: "London" }] }`    |
| `$nor`   | Matches documents that **do not** match any conditions    | `{ $nor: [{ age: { $lt: 18 } }, { city: "London" }] }`   |
| `$not`   | Matches documents **not matching** a condition            | `{ age: { $not: { $gt: 30 } } }`                         |

✅ **Example Query:**
```js
db.users.find({
  $or: [
    { city: "London" },
    { age: { $lt: 25 } }
  ]
})
```
🔹 Finds users **who live in London or are younger than 25**.

---

## **3️⃣ Element Operators**
Used to check if a field exists or has a specific type.

| Operator  | Description                                          | Example                        |
|-----------|------------------------------------------------------|--------------------------------|
| `$exists` | Checks if a field exists                             | `{ email: { $exists: true } }` |
| `$type`   | Matches documents where a field is of a certain type | `{ age: { $type: "number" } }` |

✅ **Example Query:**
```js
db.users.find({ phone: { $exists: false } })
```
🔹 Finds users **who do not have a phone number**.

---

## **4️⃣ Evaluation Operators**
Used for special conditions like regex or JavaScript functions.

| Operator | Description                                                      | Example                                               |
|----------|------------------------------------------------------------------|-------------------------------------------------------|
| `$regex` | Matches a string using a regular expression                      | `{ name: { $regex: /^A/i } }` (Names starting with A) |
| `$expr`  | Evaluates an expression inside a query                           | `{ $expr: { $gt: ["$salary", 50000] } }`              |
| `$mod`   | Matches documents where a field’s value is divisible by a number | `{ age: { $mod: [2, 0] } }` (Even ages)               |
| `$text`  | Performs text search (Requires text index)                       | `{ $text: { $search: "developer" } }`                 |
| `$where` | Matches documents using a JavaScript function                    | `{ $where: "this.age > 25" }`                         |

✅ **Example Query:**
```js
db.products.find({ name: { $regex: "phone", $options: "i" } })
```
🔹 Finds products **containing the word "phone" (case-insensitive)**.

---

## **5️⃣ Array Operators**
Used to query and modify array fields.

| Operator     | Description                                                                    | Example                                            |
|--------------|--------------------------------------------------------------------------------|----------------------------------------------------|
| `$all`       | Matches arrays containing all specified elements                               | `{ tags: { $all: ["tech", "science"] } }`          |
| `$size`      | Matches arrays with a specific number of elements                              | `{ skills: { $size: 3 } }`                         |
| `$elemMatch` | Matches documents where at least one array element matches multiple conditions | `{ scores: { $elemMatch: { $gt: 80, $lt: 90 } } }` |

✅ **Example Query:**
```js
db.users.find({ skills: { $all: ["JavaScript", "MongoDB"] } })
```
🔹 Finds users **who have both JavaScript and MongoDB skills**.

---

## **6️⃣ Update Operators**
Used to modify documents.

| Operator    | Description                             | Example                               |
|-------------|-----------------------------------------|---------------------------------------|
| `$set`      | Sets a field to a specific value        | `{ $set: { age: 30 } }`               |
| `$unset`    | Removes a field from a document         | `{ $unset: { age: "" } }`             |
| `$inc`      | Increments a numeric field              | `{ $inc: { views: 1 } }`              |
| `$mul`      | Multiplies a field by a value           | `{ $mul: { price: 1.1 } }`            |
| `$rename`   | Renames a field                         | `{ $rename: { oldName: "newName" } }` |
| `$addToSet` | Adds a unique element to an array       | `{ $addToSet: { tags: "MongoDB" } }`  |
| `$push`     | Adds an element to an array             | `{ $push: { tags: "newTag" } }`       |
| `$pull`     | Removes elements that match a condition | `{ $pull: { tags: "oldTag" } }`       |

✅ **Example Update Query:**
```js
db.users.updateOne({ name: "Alice" }, { $set: { age: 28 } })
```
🔹 Updates **Alice's age to 28**.

---

## **7️⃣ Aggregation Operators**
Used inside the **Aggregation Framework** for data processing.

| Operator | Description            | Example                                                          |
|----------|------------------------|------------------------------------------------------------------|
| `$sum`   | Sums numeric values    | `{ $group: { _id: null, totalSales: { $sum: "$sales" } } }`      |
| `$avg`   | Calculates average     | `{ $group: { _id: null, avgPrice: { $avg: "$price" } } }`        |
| `$min`   | Gets the minimum value | `{ $group: { _id: "$category", minPrice: { $min: "$price" } } }` |
| `$max`   | Gets the maximum value | `{ $group: { _id: "$category", maxPrice: { $max: "$price" } } }` |
| `$count` | Counts documents       | `{ $count: "totalDocuments" }`                                   |

✅ **Example Aggregation Query:**
```js
db.orders.aggregate([
  { $group: { _id: "$category", totalSales: { $sum: "$amount" } } }
])
```
🔹 Groups orders by category and **calculates total sales per category**.

---

## **✅ Summary**
MongoDB operators make queries, updates, and aggregations **more powerful and flexible**.

- **Comparison**: `$eq`, `$gt`, `$lt`
- **Logical**: `$and`, `$or`, `$not`
- **Array**: `$size`, `$all`, `$elemMatch`
- **Update**: `$set`, `$inc`, `$push`, `$pull`
- **Aggregation**: `$sum`, `$avg`, `$count`
- **Evaluation**: `$regex`, `$text`



# MongoDB Aggregation Tutorial

MongoDB Aggregation is a powerful feature used for data analysis and transformation. It processes data records and returns computed results. It's similar to SQL's `GROUP BY`, `JOIN`, and calculated columns.

---

## 🔷 What is Aggregation?

Aggregation in MongoDB allows you to:

- Filter (`$match`)
- Transform (`$project`, `$addFields`)
- Group (`$group`)
- Sort (`$sort`)
- Join (`$lookup`)
- Limit (`$limit`, `$skip`)
- Count, sum, average, etc.

All this is done using the **Aggregation Pipeline**, which processes documents step by step.

---

## 🔹 Basic Syntax

```js
db.collection.aggregate([
  { <stage1> },
  { <stage2> },
  ...
])
```

---

## 🔸 Common Stages in Aggregation

### 1. `$match` – filter documents (like `find`)

```js
{
  $match: {
    age: {
      $gt: 18;
    }
  }
}
```

### 2. `$project` – select and reshape fields

```js
{ $project: { name: 1, age: 1, isAdult: { $gte: ["$age", 18] } } }
```

### 3. `$group` – group by a field and calculate aggregates

```js
{
  $group: {
    _id: "$isMarried",
    totalSalary: { $sum: "$salary" },
    avgAge: { $avg: "$age" }
  }
}
```

### 4. `$sort` – sort results

```js
{
  $sort: {
    age: -1;
  }
} // -1 = descending, 1 = ascending
```

### 5. `$limit` / `$skip` – paginate

```js
{
  $limit: 5;
}
{
  $skip: 5;
}
```

### 6. `$addFields` – add computed fields

```js
{
  $addFields: {
    agePlusTen: {
      $add: ["$age", 10];
    }
  }
}
```

### 7. `$lookup` – perform a join with another collection

```js
{
  $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "userId",
    as: "orders"
  }
}
```

---

## 🔸 Example Aggregation Pipeline

```js
db.users.aggregate([
  { $match: { age: { $gt: 18 } } },
  { $project: { name: 1, age: 1, isAdult: { $gte: ["$age", 18] } } },
  { $sort: { age: -1 } },
  { $limit: 5 },
]);
```

---

## 🔸 Example with `$group`

```js
db.users.aggregate([
  {
    $group: {
      _id: "$isMarried",
      totalUsers: { $sum: 1 },
      averageAge: { $avg: "$age" },
    },
  },
]);
```

---

## 🔸 Example with `$lookup` (JOIN)

Assuming:

- `users` collection
- `orders` collection with a field `userId`

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders",
    },
  },
]);
```

---

## 🔸 Example: Add Calculated Field

```js
db.users.aggregate([
  {
    $addFields: {
      ageIn5Years: { $add: ["$age", 5] },
    },
  },
  { $project: { name: 1, ageIn5Years: 1 } },
]);
```

---

```javascript
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "userId",
      foreignField: "userId",
      as: "orders",
    },
  },
  {
    $match: {
      orders: { $ne: [] }, // Ensures it's an inner join (only users with orders)
    },
  },
]);
```
