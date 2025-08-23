mongosh "mongodb+srv://mongocluster.hw6ib.mongodb.net/" --apiVersion 1 --username root

# Mongo DB Tutorial

## **1. Introduction to MongoDB**

- MongoDB is a **NoSQL database** that stores data in **JSON-like BSON format**.
- It is **schema-less**, meaning documents in a collection can have different fields.
- It is designed for **high performance, scalability, and flexibility**.

### **Starting and Stopping MongoDB**

```sh
mongosh    # Open MongoDB shell
exit     # Exit MongoDB shell
```

### **Database Commands**

```js
show dbs;        // List all databases
use mydb;        // Switch to 'mydb' database
db.dropDatabase(); // Delete current database
```

### **Collection Commands**

```js
show collections; // List collections in the current database
db.createCollection("users"); // Create a collection
db.users.drop(); // Delete a collection
```

## **4. CRUD Operations**

### **Insert Documents**

```js
db.users.insertOne({ name: "John", age: 30, city: "New York" });
db.users.insertMany([
  { name: "Alice", age: 25, city: "London" },
  { name: "Bob", age: 28, city: "Paris" }
]);
```

### **Read Documents**

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

# **Operators in MongoDB** 🚀

MongoDB provides powerful **operators** that allow you to perform various operations in **queries, updates, projections, and aggregations**. These operators can be categorized as follows:

---

## **1️⃣ Comparison Operators**
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
