show databases;
use("amazon");
db.dropDatabase();

use("amazon");
db.createCollection("categories");

show collections;
db.categories.drop();

use("amazon");
db.categories.insertOne({
    "name": "phone",
    "slug": "Realme XT"
});

use("amazon");
db.categories.find();

use("amazon");
db.categories.insertMany([
    {"name":"Electronics","slug":"electronics"},
    {"name":"Home & Kitchen","slug":"home-kitchen"},
    {"name":"Fashion","slug":"fashion"},
    {"name":"Health & Beauty","slug":"health-beauty"},
    {"name":"Sports & Outdoors","slug":"sports-outdoors"},
    {"name":"Toys & Games","slug":"toys-games"},
    {"name":"Automotive","slug":"automotive"},
    {"name":"Books & Stationery","slug":"books-stationery"},
    {"name":"Food & Beverages","slug":"food-beverages"},
    {"name":"Pet Supplies","slug":"pet-supplies"},
    {"name":"Furniture","slug":"furniture"},
    {"name":"Jewelry & Accessories","slug":"jewelry-accessories"},
    {"name":"Garden & Outdoor","slug":"garden-outdoor"},
    {"name":"Electrical Appliances","slug":"electrical-appliances"},
    {"name":"Baby & Kids","slug":"baby-kids"},
    {"name":"Office Supplies","slug":"office-supplies"}
]);

use("amazon");
db.categories.find();

use("amazon");
db.categories.find({"name":"phone"});


