from pymongo import MongoClient
from pymongo import ReturnDocument
from datetime import datetime

# Connect to MongoDB Atlas
client = MongoClient("mongodb+srv://root:1234@mongocluster.hw6ib.mongodb.net/?retryWrites=true&w=majority&appName=MongoCluster")
db = client["ecommerce"]
collection = db["users"]  # Updated collection name

def getUserById(user_id):
    try:
        user = collection.find_one({"userId": user_id})
        if user:
            print("\n===== User Details =====")
            for key, value in user.items():
                if key == "dob" and not isinstance(value, str):
                    print(f"{key:15}: {value.strftime('%Y-%m-%d')}")
                else:
                    print(f"{key:15}: {value}")
        else:
            print(f"No user found with userId {user_id}")
    except Exception as e:
        print("Error fetching user:", e)

def insertOneUser(userId,userToAdd):
    try:
        dob = datetime.strptime(userToAdd.get("dob"), "%Y-%m-%d")  # Converts to datetime object
        result = collection.insert_one(userToAdd)
        print("1 Document inserted with _id:", result.inserted_id)
    except Exception as e:
        print("Unable to insert document:", e)

def updateUser(userId, updatedFields):
    try:
        result = collection.update_one(
            {"userId": userId},
            {"$set": updatedFields}
        )
        if result.modified_count > 0:
            print("Document updated successfully!")
        else:
            print("No document found or updated.")
    except Exception as e:
        print("Unable to update document:", e)

def deleteUser(userId):
    try:
        result = collection.delete_one({"userId": userId})
        if result.deleted_count > 0:
            print("Document deleted successfully!")
        else:
            print(f"userId {userId} does not exist.")
    except Exception as e:
        print("Unable to delete document:", e)

def getAllUsers():
    try:
        return list(collection.find())
    except Exception as e:
        print("Unable to fetch users:", e)
        return []

def printAllUsers():
    try:
        print("\t\t\t====== User Details ======")
        for user in collection.find(): 
            print("UserID:", user.get("userId"))
            print("Name:", user.get("name"))
            print("Mobile:", user.get("mobileNo"))
            print("Married:", user.get("isMarried"))
            print("gender:", user.get("gender"))
            print("Age:", user.get("age"))
            print("Skills:", ', '.join(user.get("skills", [])))
            print("Address:", user.get("address"))
            dob = user.get("dob")
            if isinstance(dob, str):
                dob_str = dob
            else:
                dob_str = dob.strftime("%Y-%m-%d")
            print("DOB:",dob_str)
            print("Salary:", user.get("salary"))
            print("Projects:")
            for proj in user.get("projects", []):
                print(f"  - {proj.get('projectName')}: {proj.get('projectDescription')}")
            print("-" * 50)
    except Exception as e:
        print("Error printing users:", e)

def updateUserById(userId,newUser):
    try:
        # print("updating",userId)
        user=collection.find_one({"userId":userId})
        if user == None:
            print("user doesn't exist!")
            return
        else:
            print("before Replacing :",sep="")
            print(user)
            afterReplace=collection.find_one_and_replace({"userId":userId}, newUser,return_document=ReturnDocument.AFTER)
            print("After Replacing :",afterReplace,sep="")

    except Exception as e:
        print(e)