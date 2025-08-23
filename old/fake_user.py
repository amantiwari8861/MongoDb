import json
import random
from faker import Faker
from datetime import datetime, timedelta

fake = Faker()
Faker.seed(0)
random.seed(0)

skills_pool = ["MEAN", "MERN", "JAVA FSD", "Python", "DevOps", "Data Science", "AI", "ML", "etc"]
project_templates = [
    {
        "projectName": "E-commerce Platform",
        "projectDescription": "Developed a full-stack e-commerce website using MEAN stack."
    },
    {
        "projectName": "Task Management App",
        "projectDescription": "Created a MERN-based task management application."
    },
    {
        "projectName": "Portfolio Website",
        "projectDescription": "Built a personal portfolio site using HTML, CSS, and JavaScript."
    },
    {
        "projectName": "Inventory System",
        "projectDescription": "Created an inventory tracking system in Java."
    },
]

def generate_user(user_id):
    name = fake.name()
    mobile = random.randint(7000000000, 9999999999)
    is_married = random.choice([True, False])
    age = random.randint(22, 45)
    dob = (datetime.today() - timedelta(days=age*365 + random.randint(0, 365))).isoformat()
    skills = random.sample(skills_pool, k=random.randint(3, 5))
    address = {
        "city": fake.city(),
        "state": fake.state_abbr(),
        "pincode": int(fake.postcode()[:6]),
        "street": fake.street_address()
    }
    projects = random.sample(project_templates, k=2)
    salary = random.randint(40000, 120000)

    return {
        "userId": user_id,
        "name": name,
        "mobileNo": mobile,
        "isMarried": is_married,
        "age": age,
        "skills": skills,
        "address": address,
        "dob": dob,
        "projects": projects,
        "salary": salary
    }

# Generate 100 user records
users_data = [generate_user(i + 1) for i in range(100)]

# Save to a JSON file
with open("100users.json", "w") as f:
    json.dump(users_data, f, indent=4)

print("users.json file created successfully!")
