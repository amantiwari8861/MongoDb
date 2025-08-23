# Getting Started with Mongo DB

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

- show all databases  `show dbs`
- create collection `db.createCollection("collectionname")`
- create and insert both `db.users.insertOne({"data":"value"})`
- create and insert both `db.users.insertMany([{"data":"value"},{"data2":"value2"}])`
- get name projection wit id `db.users.find({},{"name":1})`
- get all users data `db.users.find()`
- get name projection without id `db.users.find({},{"name":1,"_id":0})`
- get a nested field `db.users.find({},{"address.city":1,"_id":0})`



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
