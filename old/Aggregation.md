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
