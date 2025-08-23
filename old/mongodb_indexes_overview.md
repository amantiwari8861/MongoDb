
# MongoDB Indexes - Brief Overview

In MongoDB, an index is a special data structure that improves the speed of queries on a collection—just like indexes in books or SQL databases.

📚 Why Use Indexes?
Without indexes, MongoDB must scan every document in a collection (collection scan) to find matches, which is slow for large datasets.

With indexes, MongoDB can quickly locate data, improving read performance significantly.

## 🔹 1. Default `_id` Index
- **Automatically created** for every document.
- Ensures that each document has a unique identifier.

```json
{ "_id": ObjectId("..."), "name": "John" }
```
> ✅ Always present, cannot be removed.

---

## 🔹 2. Single Field Index
- Created on **one field** to speed up queries using that field.
- Useful for filtering or sorting on a specific field.

```js
db.users.createIndex({ age: 1 })  // Ascending order
```
> ✅ Used for queries like `find({ age: 25 })` or `sort({ age: 1 })`.

---

## 🔹 3. Compound Index
- Combines **two or more fields** into a single index.
- Order matters in compound indexes.

```js
db.users.createIndex({ age: 1, salary: -1 })
```
> ✅ Useful for queries like `find({ age: 30 }).sort({ salary: -1 })`.

---

## 🔹 4. Multikey Index
- Automatically created when you index a field that contains an **array**.
- Indexes **each element** of the array.

```js
db.users.createIndex({ skills: 1 })
```
> ✅ Helps with queries like `find({ skills: "Java" })`.

---

## 🔹 5. Text Index
- Used for **full-text search** on string fields.
- Can combine multiple fields into one text index.

```js
db.users.createIndex({ name: "text", skills: "text" })
```

> ✅ Supports search using `$text` operator:

```js
db.users.find({ $text: { $search: "Java" } })
```

---

## 🔹 6. Hashed Index
- Indexes the **hashed value** of a field.
- Mostly used for **sharding**.

```js
db.users.createIndex({ userId: "hashed" })
```
> ✅ Not for sorting or range queries. Great for evenly distributing data.

---

## 🔹 7. Geospatial Index
- Indexes for **location-based queries** using 2D or spherical coordinates.

```js
db.places.createIndex({ location: "2dsphere" })
```

> ✅ Enables queries like:

```js
db.places.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [77.5946, 12.9716] },
      $maxDistance: 5000
    }
  }
})
```

---

## 🔹 8. Wildcard Index (`$**`)
- Indexes **any field** or **subfields** that match a pattern.
- Great for **schema-less** or dynamic documents.

```js
db.users.createIndex({ "$**": 1 })
```
> ✅ Automatically indexes all fields at all levels.

---

## Summary Table

| Index Type     | Use Case                                   | Supports Sorting | Special Use         |
|----------------|---------------------------------------------|------------------|---------------------|
| `_id`          | Unique document ID                          | Yes              | Auto-created        |
| Single Field   | Filter/sort by one field                    | Yes              | Basic queries       |
| Compound       | Filter/sort using multiple fields           | Yes              | Advanced queries    |
| Multikey       | Fields with array values                    | Yes              | Query inside arrays |
| Text           | Full-text search in string fields           | No               | `$text` search      |
| Hashed         | Sharding/distribution                       | No               | Sharded clusters    |
| Geospatial     | Location-based queries                      | No               | Maps & distances    |
| Wildcard       | Schema-less data with unknown fields        | Yes              | Dynamic fields      |
