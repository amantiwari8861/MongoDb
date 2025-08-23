# **MongoDB Notes**

## **1. Introduction to MongoDB**

- MongoDB is a **NoSQL database** that stores data in **JSON-like BSON format**.
- It is **schema-less**, meaning documents in a collection can have different fields.
- It is designed for **high performance, scalability, and flexibility**.

# Basic Commands

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

## **5. Indexing**

```js
db.users.createIndex({ name: 1 }); // Create an index on 'name' field
db.users.getIndexes(); // List all indexes
```

## **6. Aggregation Framework**

```js
db.users.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: { _id: "$city", total: { $sum: 1 } } }
]);
```

## **7. User Management & Security**

```js
use admin;
db.createUser({
  user: "admin",
  pwd: "password123",
  roles: [ { role: "root", db: "admin" } ]
});
```

## **8. Backup and Restore**

```sh
mongodump --out /backup/mongo  # Backup all databases
mongorestore /backup/mongo     # Restore backup
```

## **9. Connecting MongoDB with Node.js**

```js
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
  await client.connect();
  const db = client.db("testDB");
  const users = db.collection("users");
  const userList = await users.find().toArray();
  console.log(userList);
  await client.close();
}
run();
```

## **10. Replication and Sharding**

- **Replication**: Creates multiple copies of data for high availability.
- **Sharding**: Distributes data across multiple servers for scalability.

## **11. Pros and Cons of MongoDB**

### ✅ **Advantages**

- Schema-less (Flexible structure)
- High scalability (Horizontal scaling via sharding)
- High performance for read/write operations
- Good support for unstructured data

### ❌ **Disadvantages**

- Higher memory usage
- Lacks ACID transactions (until MongoDB 4.0+)
- Not ideal for highly relational data

## **12. When to Use MongoDB?**

✅ Best suited for:

- Big data applications
- Real-time analytics
- IoT and mobile applications
- Content management systems

❌ Not ideal for:

- Complex transactions with strong consistency requirements
- Traditional relational applications

## **13. MongoDB vs SQL Databases**

| Feature      | MongoDB (NoSQL)          | SQL Databases (MySQL, PostgreSQL) |
| ------------ | ------------------------ | --------------------------------- |
| Data Storage | JSON-like BSON           | Tables with fixed schema          |
| Schema       | Schema-less              | Predefined schema                 |
| Transactions | Weak ACID (now improved) | Strong ACID support               |
| Scalability  | Horizontal (sharding)    | Vertical (scale-up)               |
| Performance  | Fast for reads/writes    | Optimized for structured queries  |

## **14. Useful MongoDB Commands**

```sh
mongostat  # Check MongoDB performance
mongo --eval "db.runCommand({ serverStatus: 1 })"  # Check server status
```

## **15. References**

- [MongoDB Official Documentation](https://www.mongodb.com/docs/manual/)
- [MongoDB University Courses](https://university.mongodb.com/)

---

✅ **MongoDB is a powerful NoSQL database for modern applications!** 🚀
