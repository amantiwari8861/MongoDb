use("ducatmgmt");

/* db.users.insertMany([
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
        "dob": "1999-04-22T00:00:00.000Z",
        "projects": [
            {
                "projectName": "E-commerce Platform",
                "projectDescription": "Developed a full-stack e-commerce website using MEAN stack."
            },
            {
                "projectName": "Task Management App",
                "projectDescription": "Created a MERN-based task management application."
            }
        ]
    },
    {
        "userId": 101,
        "name": "Ravi Sharma",
        "mobileNo": 9876543210,
        "isMarried": true,
        "age": 30,
        "skills": ["Java", "Spring Boot", "Hibernate"],
        "address": {
            "city": "Delhi",
            "state": "Delhi",
            "pincode": 110001,
            "street": "Connaught Place"
        },
        "dob": "1994-06-15T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Banking Application Backend",
                "projectDescription": "Built REST APIs using Spring Boot for a core banking system."
            },
            {
                "projectName": "Inventory Management System",
                "projectDescription": "Developed an inventory system using Java and Hibernate."
            }
        ]
    },
    {
        "userId": 102,
        "name": "Neha Verma",
        "mobileNo": 9123456789,
        "isMarried": false,
        "age": 25,
        "skills": ["React", "Node.js", "MongoDB"],
        "address": {
            "city": "Mumbai",
            "state": "MH",
            "pincode": 400001,
            "street": "Andheri West"
        },
        "dob": "1999-02-20T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Social Media Dashboard",
                "projectDescription": "Created a dynamic dashboard using React and Node.js."
            },
            {
                "projectName": "Real-time Chat Application",
                "projectDescription": "Developed a chat app with MongoDB for data storage."
            }
        ]
    },
    {
        "userId": 103,
        "name": "Rahul Mehta",
        "mobileNo": 9988776655,
        "isMarried": true,
        "age": 28,
        "skills": ["Python", "Django", "Flask"],
        "address": {
            "city": "Bangalore",
            "state": "KA",
            "pincode": 560001,
            "street": "MG Road"
        },
        "dob": "1996-08-10T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Blog Platform",
                "projectDescription": "Built a feature-rich blog site using Django."
            },
            {
                "projectName": "API Service",
                "projectDescription": "Developed a lightweight API using Flask."
            }
        ]
    },
    {
        "userId": 104,
        "name": "Swati Singh",
        "mobileNo": 9345678901,
        "isMarried": false,
        "age": 23,
        "skills": ["Angular", "TypeScript", "RxJS"],
        "address": {
            "city": "Lucknow",
            "state": "UP",
            "pincode": 226001,
            "street": "Hazratganj"
        },
        "dob": "2001-11-02T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Admin Panel UI",
                "projectDescription": "Developed a responsive admin panel using Angular and TypeScript."
            },
            {
                "projectName": "Data Visualization Tool",
                "projectDescription": "Created a tool leveraging RxJS for reactive data streams."
            }
        ]
    },
    {
        "userId": 105,
        "name": "Ankit Raj",
        "mobileNo": 9192939495,
        "isMarried": false,
        "age": 27,
        "skills": ["Java", "Spring", "REST APIs"],
        "address": {
            "city": "Pune",
            "state": "MH",
            "pincode": 411001,
            "street": "FC Road"
        },
        "dob": "1997-01-12T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Microservice Architecture",
                "projectDescription": "Designed and implemented microservices using Java and Spring."
            },
            {
                "projectName": "Public API Development",
                "projectDescription": "Built secure and scalable REST APIs for external consumption."
            }
        ]
    },
    {
        "userId": 106,
        "name": "Pooja Yadav",
        "mobileNo": 9654321000,
        "isMarried": true,
        "age": 29,
        "skills": ["PHP", "Laravel", "MySQL"],
        "address": {
            "city": "Gurgaon",
            "state": "HR",
            "pincode": 122001,
            "street": "Cyber City"
        },
        "dob": "1995-09-07T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Content Management System",
                "projectDescription": "Developed a CMS using PHP and Laravel framework."
            },
            {
                "projectName": "Online Store Backend",
                "projectDescription": "Built the backend logic and database schema using MySQL."
            }
        ]
    },
    {
        "userId": 107,
        "name": "Karan Batra",
        "mobileNo": 9111223344,
        "isMarried": false,
        "age": 24,
        "skills": ["Node.js", "Express", "MongoDB"],
        "address": {
            "city": "Hyderabad",
            "state": "TS",
            "pincode": 500001,
            "street": "Banjara Hills"
        },
        "dob": "2000-04-04T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Real-time Analytics Dashboard",
                "projectDescription": "Created a dashboard using Node.js and Express."
            },
            {
                "projectName": "User Authentication Service",
                "projectDescription": "Implemented authentication using MongoDB for data storage."
            }
        ]
    },
    {
        "userId": 108,
        "name": "Simran Kaur",
        "mobileNo": 9090909090,
        "isMarried": false,
        "age": 26,
        "skills": ["Vue.js", "Nuxt.js", "Firebase"],
        "address": {
            "city": "Chandigarh",
            "state": "CH",
            "pincode": 160036,
            "street": "Sector 17"
        },
        "dob": "1998-03-28T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Single Page Application (SPA)",
                "projectDescription": "Developed an interactive SPA using Vue.js."
            },
            {
                "projectName": "Server-Side Rendered App",
                "projectDescription": "Built an SSR application with Nuxt.js and Firebase backend."
            }
        ]
    },
    {
        "userId": 109,
        "name": "Deepak Chauhan",
        "mobileNo": 9345612789,
        "isMarried": true,
        "age": 35,
        "skills": ["DevOps", "AWS", "Docker", "Kubernetes"],
        "address": {
            "city": "Chennai",
            "state": "TN",
            "pincode": 600001,
            "street": "T Nagar"
        },
        "dob": "1989-12-05T00:00:00.000Z",
        "projects": [
            {
                "projectName": "CI/CD Pipeline Implementation",
                "projectDescription": "Set up automated build and deployment pipelines using Docker and AWS."
            },
            {
                "projectName": "Infrastructure Orchestration",
                "projectDescription": "Managed containerized applications using Kubernetes."
            }
        ]
    },
    {
        "userId": 110,
        "name": "Megha Rathi",
        "mobileNo": 9876012345,
        "isMarried": false,
        "age": 22,
        "skills": ["HTML", "CSS", "JavaScript"],
        "address": {
            "city": "Jaipur",
            "state": "RJ",
            "pincode": 302001,
            "street": "MI Road"
        },
        "dob": "2002-05-25T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Portfolio Website",
                "projectDescription": "Designed and developed a personal portfolio using HTML, CSS, and JS."
            },
            {
                "projectName": "Landing Page Optimization",
                "projectDescription": "Improved user experience on landing pages with front-end techniques."
            }
        ]
    },
    {
        "userId": 111,
        "name": "Aditya Nair",
        "mobileNo": 9099988776,
        "isMarried": true,
        "age": 31,
        "skills": ["React", "Redux", "Next.js"],
        "address": {
            "city": "Kochi",
            "state": "KL",
            "pincode": 682001,
            "street": "MG Road"
        },
        "dob": "1993-06-30T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Complex State Management App",
                "projectDescription": "Built an application using React and Redux for state management."
            },
            {
                "projectName": "Server-Side Rendering with Next.js",
                "projectDescription": "Developed a high-performance web application using Next.js."
            }
        ]
    },
    {
        "userId": 112,
        "name": "Divya Mishra",
        "mobileNo": 9001122334,
        "isMarried": false,
        "age": 28,
        "skills": ["Data Science", "Pandas", "NumPy"],
        "address": {
            "city": "Indore",
            "state": "MP",
            "pincode": 452001,
            "street": "Palasia"
        },
        "dob": "1996-10-17T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Data Analysis Pipeline",
                "projectDescription": "Created data processing and analysis pipelines using Pandas and NumPy."
            },
            {
                "projectName": "Predictive Modeling",
                "projectDescription": "Developed predictive models as part of a data science initiative."
            }
        ]
    },
    {
        "userId": 113,
        "name": "Nikhil Anand",
        "mobileNo": 9321987654,
        "isMarried": true,
        "age": 34,
        "skills": ["C#", ".NET", "Azure"],
        "address": {
            "city": "Bhopal",
            "state": "MP",
            "pincode": 462001,
            "street": "New Market"
        },
        "dob": "1990-08-08T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Enterprise Web Application",
                "projectDescription": "Developed a large-scale web application using C# and .NET framework."
            },
            {
                "projectName": "Cloud Migration to Azure",
                "projectDescription": "Migrated legacy applications to the Azure cloud platform."
            }
        ]
    },
    {
        "userId": 114,
        "name": "Ritika Malhotra",
        "mobileNo": 9887766554,
        "isMarried": false,
        "age": 26,
        "skills": ["Flutter", "Dart", "Firebase"],
        "address": {
            "city": "Surat",
            "state": "GJ",
            "pincode": 395003,
            "street": "Ring Road"
        },
        "dob": "1998-07-21T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Cross-Platform Mobile App",
                "projectDescription": "Built a mobile application for iOS and Android using Flutter and Dart."
            },
            {
                "projectName": "Real-time Database Integration",
                "projectDescription": "Integrated Firebase Realtime Database for live data synchronization."
            }
        ]
    },
    {
        "userId": 115,
        "name": "Arjun Deshmukh",
        "mobileNo": 9445566778,
        "isMarried": true,
        "age": 33,
        "skills": ["Android", "Java", "Kotlin"],
        "address": {
            "city": "Nagpur",
            "state": "MH",
            "pincode": 440001,
            "street": "Dharampeth"
        },
        "dob": "1991-03-14T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Native Android Application",
                "projectDescription": "Developed a native Android app using Java and Kotlin."
            },
            {
                "projectName": "App Performance Optimization",
                "projectDescription": "Improved the performance and responsiveness of an existing Android app."
            }
        ]
    },
    {
        "userId": 116,
        "name": "Tanvi Kulkarni",
        "mobileNo": 9011223344,
        "isMarried": false,
        "age": 27,
        "skills": ["Swift", "iOS", "Xcode"],
        "address": {
            "city": "Thane",
            "state": "MH",
            "pincode": 400601,
            "street": "Ghodbunder Road"
        },
        "dob": "1997-09-11T00:00:00.000Z",
        "projects": [
            {
                "projectName": "iOS Social Networking App",
                "projectDescription": "Built an iOS application using Swift and Xcode."
            },
            {
                "projectName": "UI Kit Integration",
                "projectDescription": "Integrated various UI Kits to enhance the app's user interface."
            }
        ]
    },
    {
        "userId": 117,
        "name": "Vikram Rana",
        "mobileNo": 9122334455,
        "isMarried": false,
        "age": 25,
        "skills": ["Golang", "Microservices", "gRPC"],
        "address": {
            "city": "Dehradun",
            "state": "UK",
            "pincode": 248001,
            "street": "Rajpur Road"
        },
        "dob": "1999-01-01T00:00:00.000Z",
        "projects": [
            {
                "projectName": "High-Performance Backend Service",
                "projectDescription": "Developed backend services using Golang for performance."
            },
            {
                "projectName": "Inter-Service Communication",
                "projectDescription": "Implemented communication between microservices using gRPC."
            }
        ]
    },
    {
        "userId": 118,
        "name": "Priya Sinha",
        "mobileNo": 9364523412,
        "isMarried": true,
        "age": 32,
        "skills": ["SQL", "PL/SQL", "Oracle"],
        "address": {
            "city": "Patna",
            "state": "BR",
            "pincode": 800001,
            "street": "Boring Road"
        },
        "dob": "1992-02-22T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Database Schema Design",
                "projectDescription": "Designed and implemented database schemas using SQL on Oracle."
            },
            {
                "projectName": "Stored Procedure Development",
                "projectDescription": "Wrote complex stored procedures using PL/SQL for business logic."
            }
        ]
    },
    {
        "userId": 119,
        "name": "Harshita Gupta",
        "mobileNo": 9234567890,
        "isMarried": false,
        "age": 24,
        "skills": ["UI/UX", "Figma", "Adobe XD"],
        "address": {
            "city": "Noida",
            "state": "UP",
            "pincode": 201301,
            "street": "Sector 63"
        },
        "dob": "2000-10-10T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Mobile App User Interface Design",
                "projectDescription": "Designed intuitive UI/UX for a mobile app using Figma."
            },
            {
                "projectName": "Website Redesign",
                "projectDescription": "Created prototypes and wireframes for a website redesign using Adobe XD."
            }
        ]
    },
    {
        "userId": 120,
        "name": "Saurabh Joshi",
        "mobileNo": 9873214560,
        "isMarried": true,
        "age": 36,
        "skills": ["Java", "Spring Boot", "Kafka"],
        "address": {
            "city": "Udaipur",
            "state": "RJ",
            "pincode": 313001,
            "street": "Fateh Sagar Lake"
        },
        "dob": "1988-04-05T00:00:00.000Z",
        "projects": [
            {
                "projectName": "Event-Driven Architecture",
                "projectDescription": "Implemented an event-driven system using Java, Spring Boot, and Kafka."
            },
            {
                "projectName": "Real-time Data Streaming",
                "projectDescription": "Developed data streaming solutions using Kafka."
            }
        ]
    }
]); */

/* db.users.find(); */

// db.users.find({"userId":100});

db.users.find(
    { "userId": 100 },
    { "_id": false, "name": true, "skills": true }
)
// --- Initial State Check (User 100 and 102) ---
db.users.findOne({ userId: 100 }, { name: 1, skills: 1, projects: 1 });
db.users.findOne({ userId: 102 }, { name: 1, skills: 1, projects: 1 });
db.users.findOne({ userId: 101 }, { name: 1, skills: 1, projects: 1 });

// --- 1. Adding Elements ---

// $push: Add 'Git' skill to user 100
db.users.updateOne({ userId: 100 }, { $push: { skills: "Git" } });
db.users.findOne({ userId: 100 }, { skills: 1 });

// $push with $each: Add multiple skills to user 101
db.users.updateOne({ userId: 101 }, { $push: { skills: { $each: ["Agile", "Scrum"] } } });
db.users.findOne({ userId: 101 }, { skills: 1 });

// $push: Add a new project to user 102
db.users.updateOne(
    { userId: 102 },
    {
        $push: {
            projects: {
                projectName: "API Development",
                projectDescription: "Building REST APIs with Node/Express"
            }
        }
    }
);
db.users.findOne({ userId: 102 }, { projects: 1 });

// $addToSet: Add 'Express.js' (new) and 'React' (existing) to user 102 skills
db.users.updateOne(
    { userId: 102 },
    { $addToSet: { skills: { $each: ["Express.js", "React"] } } }
);
db.users.findOne({ userId: 102 }, { skills: 1 });


// --- 2. Removing Elements ---

// $pull: Remove 'MEAN' skill from user 100 (if it exists)
db.users.updateOne({ userId: 100 }, { $pull: { skills: "MEAN" } });
db.users.findOne({ userId: 100 }, { skills: 1 });

// $pull: Remove a project by name from user 102
db.users.updateOne(
    { userId: 102 },
    { $pull: { projects: { projectName: "Social Media Dashboard" } } }
);
db.users.findOne({ userId: 102 }, { projects: 1 });

// $pop: Remove the last skill from user 101
db.users.updateOne({ userId: 101 }, { $pop: { skills: 1 } }); // 1 = remove last
db.users.findOne({ userId: 101 }, { skills: 1 });


// --- 3. Updating Elements ---

// $set by index: Change the first skill of user 100 to 'JavaScript Fundamentals'
db.users.updateOne(
    { userId: '100' },
    { $set: { "skills.0": "JavaScript Fundamentals" } }
);
db.users.findOne({ userId: 100 }, { skills: 1 });

// $set with $: Update the first matched skill 'Node.js' to 'Node.js Runtime' for user 102
db.users.updateOne(
    { userId: '100', skills: "etc" },
    { $set: { "skills.$": "Node.js Runtime" } }
);
db.users.findOne({ userId: 102 }, { skills: 1 });

// $set with arrayFilters: Update description of project 'Real-time Chat Application' for user 102
db.users.updateOne(
    { userId: '100' },
    { $set: { "projects.$[proj].projectDescription": "Updated Desc: Chat app using Socket.IO and MongoDB" } },
    { arrayFilters: [{ "proj.projectName": "Task Management App" }] }
);
db.users.findOne({ userId: 102 }, { projects: 1 });


// --- 4. Querying Arrays ---

// Find users with 'Java' skill
db.users.find({ skills: "Java" }, { name: 1, skills: 1 }).toArray();

// Find users with both 'Python' and 'Django' skills ($all)
db.users.find({ skills: { $all: ["Python", "Django"] } }, { name: 1, skills: 1 }).toArray();

// Find users with either 'React' or 'Angular' skill ($in)
db.users.find({ skills: { $in: ["React", "Angular"] } }, { name: 1, skills: 1 }).toArray();

// Find users with exactly 4 skills ($size)
db.users.find({ skills: { $size: 4 } }, { name: 1, skills: 1 }).toArray();

// Find users who worked on a project named 'E-commerce Platform' ($elemMatch)
db.users.find({
    projects: { $elemMatch: { projectName: "E-commerce Platform" } }
}, { name: 1, projects: 1 }).toArray();





db.users.find({ "name": { $regex: /^A/i } }, { "userId": 1, "name": 1 });



db.users.find({
    $expr: { $and: [{ $gt: ["$age", 25] }, { skills: "Java" }] }
});

db.users.find({
    $expr: { $and: [{ $gt: ["$age", 25] }, { skills: "Java" }] }
});

db.users.find({
    $expr: { $and: [{ $gt: ["$age", 25] }, { $in: ["Java", "$skills"] }] }
},
    { "userId": 1, "name": 1, "_id": 0, "skills": 1, "age": 1 }
);


db.users.updateOne({"userId":"100"},{$push:{"skills":"Github"}});



db.users.updateOne({ userId: 101 }, { $push: { skills: ["Agile", "Scrum"] } });
db.users.updateOne({ userId: 101 }, { $pop: { skills:1} });
