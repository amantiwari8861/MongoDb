# Getting started with MongoDB

- we can install mongo db in 2 ways

1. offline(locally) -> MongoDb Server
2. online(cloud) -> Mongo Atlas

## Set Up mongo DB

1. using compass
2. using mongosh
3. using vs code
4. using mongosh in compass

- to see existing datbases `show dbs;`
- to create a new database `use dbname;`

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

every method must be in lowerCamelCase

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
