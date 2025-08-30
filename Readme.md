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
