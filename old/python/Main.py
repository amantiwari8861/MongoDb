import os
import MongoCrud as dblib


def getUser():
    user = {}

    # --- Basic Info ---
    name = input("Enter name: ")
    mobileNo = int(input("Enter mobile number: "))
    isMarried = input("Is Married (yes/no): ").strip().lower() == "yes"
    age = int(input("Enter age: "))
    gender = input("Enter gender: ")
    skills = [skill.strip() for skill in input(
        "Enter skills (comma separated): ").split(",")]

    # --- Address Info ---
    print("\n--- Address Info ---")
    city = input("City: ")
    state = input("State: ")
    pincode = int(input("Pincode: "))
    street = input("Street: ")
    address = {
        "city": city,
        "state": state,
        "pincode": pincode,
        "street": street
    }

    # --- Other Info ---
    dob = input("Enter DOB (yyyy-mm-dd): ")
    salary = float(input("Enter salary: "))

    # --- Projects Info ---
    print("\n--- Projects Info ---")
    projects = []
    while True:
        pname = input("Project Name (leave empty to stop): ")
        if not pname:
            break
        pdesc = input("Project Description: ")
        projects.append({
            "projectName": pname,
            "projectDescription": pdesc
        })

    # Final User Dictionary
    user = {
        "name": name,
        "mobileNo": mobileNo,
        "isMarried": isMarried,
        "age": age,
        "gender": gender,
        "skills": skills,
        "address": address,
        "dob": dob,
        "salary": salary,
        "projects": projects
    }

    return user


def initiate():
    while True:  # infinite while loop
        # conditional operator
        os.system("cls" if os.name == "nt" else "clear")
        print("\n========= User Management Menu =========")
        print("1. Print All Users")
        print("2. Get All Users (List)")
        print("3. Insert a User")
        print("4. Update a User's property")
        print("5. Delete a User")
        print("6. Get user by userId")
        print("7. update full user by userId")
        print("0. Exit")

        try:
            choice = int(input("Enter your choice: "))
        except ValueError:
            print("Please enter a valid number.")
            continue

        if choice == 1:
            dblib.printAllUsers()
        elif choice == 2:
            all_users = dblib.getAllUsers()
            for user in all_users:
                print(user)
        elif choice == 3:
            try:
                userId = int(input("Enter user ID: "))
                user = getUser()
                user.update({"userId": userId})
                dblib.insertOneUser(userId, user)
            except Exception as e:
                print("Error inserting user:", e)
        elif choice == 4:
            try:
                userId = int(input("Enter user ID to update: "))
                field = input(
                    "Enter field to update (e.g. name, mobileNo, age): ")
                value = input("Enter new value: ")
                if field in ["age", "mobileNo", "salary"]:
                    value = int(value) if field != "salary" else float(value)
                elif field == "isMarried":
                    value = value.lower() == "yes"
                elif field == "skills":
                    value = value.split(",")

                dblib.updateUser(userId, {field: value})
            except Exception as e:
                print("Error updating user:", e)
        elif choice == 5:
            try:
                userId = int(input("Enter user ID to delete: "))
                dblib.deleteUser(userId)
            except Exception as e:
                print("Error deleting user:", e)
        elif choice == 6:
            uid = int(input("Enter userId to search: "))
            dblib.getUserById(uid)
        elif choice == 7:
            uid = int(input("Enter userId to be updated: "))
            newUser = getUser()
            newUser.update({"userId": uid})
            dblib.updateUserById(uid, newUser)
        elif choice == 0:
            print("Exiting the program.")
            exit(0)
        else:
            print("Invalid choice, try again.")

        input("\nPress Enter to continue...")


if __name__ == "__main__":
    initiate()
