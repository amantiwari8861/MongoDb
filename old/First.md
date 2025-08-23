# Mongo DB

## what and why ?

- MEAN/ MERN -> 5
- python Fullstack -> 8
- data analytics/ DS ->6

### Database -> Organized collection of data

DATA

- where to store data ?
- files eg. excel,CSV,JSON,text

STRUCTURED and SEMI or UN-STRUCTURED

RDBMS -> relational database management system

JSON -> javascript object notation

unorganized data vs unstructured data

MySQL -> fixed schema
MongoDB -> dynamic schema

why use dynamic schema ?

## Storing all Products Data

```json
// Book product
{
  "_id": "1",
  "type": "book",
  "title": "Effective Java",
  "author": "Joshua Bloch",
  "ISBN": "978-0134685991",
  "pages": 416
}
// Laptop product
{
  "_id": "2",
  "type": "laptop",
  "brand": "Dell",
  "model": "XPS 13",
  "processor": "Intel i7",
  "ram": "16GB",
  "storage": "512GB SSD"
}
```

Scaling

1. vertical scaling
2. horizontal scaling

data integrity (correctness of data ) -> high
consistency
relational data
scalability

```json
[
  {
    "id": 100,
    "name": "Aman Tiwari",
    "mobileNo": 8448179216,
    "isMarried": false,
    "age": null,
    "skills": ["MEAN", "MERN", "JAVA FSD", "etc"],
    "address": {
      "city": "Noida",
      "state": "UP",
      "pincode": 201301,
      "street": "sectoro 62 noida "
    },
    "dob": "1999-04-22"
  },
  {
    "id": 101,
    "name": "Naman Tiwari",
    "mobileNo": 9891062743,
    "isMarried": false,
    "age": 21,
    "skills": ["JAVA FSD", "etc"],
    "address": {
      "city": "Noida",
      "state": "UP",
      "pincode": 201301,
      "street": "sector 63 noida "
    },
    "dob": "2003-02-27"
  }
]
```

[BSON Types](https://www.mongodb.com/docs/manual/reference/bson-types/)

## CRUD OPERATION

mongosh "mongodb+srv://mongocluster.hw6ib.mongodb.net/" --apiVersion 1 --username root

```javascript
db.teachers.insertMany([
  {"_id":100,"name":"Aman Tiwari","skills":["MEAN","MERN","JAVA FSD","etc"]},
  {"_id":10155657675677767676767676788686,"name":"Naman Tiwari","skills":["Sales","etc"]},
  {"_id":102,"name":"Raman","skills":["JAVA FSD","etc"]},
  {"_id":103,"name":"Shyam","skills":["MEAN","AI"]},
]);

[
{
    "userId": 100,
    "name": "Aman Tiwari",
    "mobileNo": 8448179216,
    "isMarried": false,
    "age": null,
    "skills": ["MEAN", "MERN", "JAVA FSD", "etc"],
    "address": {
      "city": "Noida",
      "state": "UP",
      "pincode": 201301,
      "street": "sectoro 62 noida "
    },
    "dob": new Date("1999-04-22")
  },
  {
    userId: 101,
    name: "Ravi Sharma",
    mobileNo: 9876543210,
    isMarried: true,
    age: 30,
    skills: ["Java", "Spring Boot", "Hibernate"],
    address: { city: "Delhi", state: "Delhi", pincode: 110001, street: "Connaught Place" },
    dob: new Date("1994-06-15")
  },
  {
    userId: 102,
    name: "Neha Verma",
    mobileNo: 9123456789,
    isMarried: false,
    age: 25,
    skills: ["React", "Node.js", "MongoDB"],
    address: { city: "Mumbai", state: "MH", pincode: 400001, street: "Andheri West" },
    dob: new Date("1999-02-20")
  },
  {
    userId: 103,
    name: "Rahul Mehta",
    mobileNo: 9988776655,
    isMarried: true,
    age: 28,
    skills: ["Python", "Django", "Flask"],
    address: { city: "Bangalore", state: "KA", pincode: 560001, street: "MG Road" },
    dob: new Date("1996-08-10")
  },
  {
    userId: 104,
    name: "Swati Singh",
    mobileNo: 9345678901,
    isMarried: false,
    age: 23,
    skills: ["Angular", "TypeScript", "RxJS"],
    address: { city: "Lucknow", state: "UP", pincode: 226001, street: "Hazratganj" },
    dob: new Date("2001-11-02")
  },
  {
    userId: 105,
    name: "Ankit Raj",
    mobileNo: 9192939495,
    isMarried: false,
    age: 27,
    skills: ["Java", "Spring", "REST APIs"],
    address: { city: "Pune", state: "MH", pincode: 411001, street: "FC Road" },
    dob: new Date("1997-01-12")
  },
  {
    userId: 106,
    name: "Pooja Yadav",
    mobileNo: 9654321000,
    isMarried: true,
    age: 29,
    skills: ["PHP", "Laravel", "MySQL"],
    address: { city: "Gurgaon", state: "HR", pincode: 122001, street: "Cyber City" },
    dob: new Date("1995-09-07")
  },
  {
    userId: 107,
    name: "Karan Batra",
    mobileNo: 9111223344,
    isMarried: false,
    age: 24,
    skills: ["Node.js", "Express", "MongoDB"],
    address: { city: "Hyderabad", state: "TS", pincode: 500001, street: "Banjara Hills" },
    dob: new Date("2000-04-04")
  },
  {
    userId: 108,
    name: "Simran Kaur",
    mobileNo: 9090909090,
    isMarried: false,
    age: 26,
    skills: ["Vue.js", "Nuxt.js", "Firebase"],
    address: { city: "Chandigarh", state: "CH", pincode: 160036, street: "Sector 17" },
    dob: new Date("1998-03-28")
  },
  {
    userId: 109,
    name: "Deepak Chauhan",
    mobileNo: 9345612789,
    isMarried: true,
    age: 35,
    skills: ["DevOps", "AWS", "Docker", "Kubernetes"],
    address: { city: "Chennai", state: "TN", pincode: 600001, street: "T Nagar" },
    dob: new Date("1989-12-05")
  },
  {
    userId: 110,
    name: "Megha Rathi",
    mobileNo: 9876012345,
    isMarried: false,
    age: 22,
    skills: ["HTML", "CSS", "JavaScript"],
    address: { city: "Jaipur", state: "RJ", pincode: 302001, street: "MI Road" },
    dob: new Date("2002-05-25")
  },
  {
    userId: 111,
    name: "Aditya Nair",
    mobileNo: 9099988776,
    isMarried: true,
    age: 31,
    skills: ["React", "Redux", "Next.js"],
    address: { city: "Kochi", state: "KL", pincode: 682001, street: "MG Road" },
    dob: new Date("1993-06-30")
  },
  {
    userId: 112,
    name: "Divya Mishra",
    mobileNo: 9001122334,
    isMarried: false,
    age: 28,
    skills: ["Data Science", "Pandas", "NumPy"],
    address: { city: "Indore", state: "MP", pincode: 452001, street: "Palasia" },
    dob: new Date("1996-10-17")
  },
  {
    userId: 113,
    name: "Nikhil Anand",
    mobileNo: 9321987654,
    isMarried: true,
    age: 34,
    skills: ["C#", ".NET", "Azure"],
    address: { city: "Bhopal", state: "MP", pincode: 462001, street: "New Market" },
    dob: new Date("1990-08-08")
  },
  {
    userId: 114,
    name: "Ritika Malhotra",
    mobileNo: 9887766554,
    isMarried: false,
    age: 26,
    skills: ["Flutter", "Dart", "Firebase"],
    address: { city: "Surat", state: "GJ", pincode: 395003, street: "Ring Road" },
    dob: new Date("1998-07-21")
  },
  {
    userId: 115,
    name: "Arjun Deshmukh",
    mobileNo: 9445566778,
    isMarried: true,
    age: 33,
    skills: ["Android", "Java", "Kotlin"],
    address: { city: "Nagpur", state: "MH", pincode: 440001, street: "Dharampeth" },
    dob: new Date("1991-03-14")
  },
  {
    userId: 116,
    name: "Tanvi Kulkarni",
    mobileNo: 9011223344,
    isMarried: false,
    age: 27,
    skills: ["Swift", "iOS", "Xcode"],
    address: { city: "Thane", state: "MH", pincode: 400601, street: "Ghodbunder Road" },
    dob: new Date("1997-09-11")
  },
  {
    userId: 117,
    name: "Vikram Rana",
    mobileNo: 9122334455,
    isMarried: false,
    age: 25,
    skills: ["Golang", "Microservices", "gRPC"],
    address: { city: "Dehradun", state: "UK", pincode: 248001, street: "Rajpur Road" },
    dob: new Date("1999-01-01")
  },
  {
    userId: 118,
    name: "Priya Sinha",
    mobileNo: 9364523412,
    isMarried: true,
    age: 32,
    skills: ["SQL", "PL/SQL", "Oracle"],
    address: { city: "Patna", state: "BR", pincode: 800001, street: "Boring Road" },
    dob: new Date("1992-02-22")
  },
  {
    userId: 119,
    name: "Harshita Gupta",
    mobileNo: 9234567890,
    isMarried: false,
    age: 24,
    skills: ["UI/UX", "Figma", "Adobe XD"],
    address: { city: "Noida", state: "UP", pincode: 201301, street: "Sector 63" },
    dob: new Date("2000-10-10")
  },
  {
    userId: 120,
    name: "Saurabh Joshi",
    mobileNo: 9873214560,
    isMarried: true,
    age: 36,
    skills: ["Java", "Spring Boot", "Kafka"],
    address: { city: "Udaipur", state: "RJ", pincode: 313001, street: "Fateh Sagar Lake" },
    dob: new Date("1988-04-05")
  }
]


db.users.updateMany({"age":{$gt:31}},{$set:{"address.state":"Delhi"}});


db.users.updateOne({"userId":102},{$set:{"isSoftwareDeveloper":true}});
db.users.find({"userId":102});

document exits ?
  yes : document or field is being updated
  No :
    (default) if upsert set false : new document is not inserted
    if upsert set true : new document is inserted 


db.users.find({ skills: { $all: ["JavaScript", "MongoDB"] } });
db.users.find({ skills: { $size: 3 } });
db.users.find({ skills: { $in: ["MongoDB", "React"] } });
db.users.find({ skills: { $nin: ["PHP", "C++"] } });
db.users.updateOne(
  { name: "Aman" },
  { $push: { skills: "Express.js" } }
);

db.users.updateOne(
  { name: "Aman" },
  { $pull: { skills: "PHP" } }
);

db.users.updateOne(
  { name: "Aman" },
  { $pop: { skills: 1 } }  // 1 = last, -1 = first
);



🔹 $addToSet

- Adds element only if it doesn't exist in the array

```javascript

db.users.updateOne(
  { name: "Aman" },
  { $addToSet: { skills: "Node.js" } }
);

```
