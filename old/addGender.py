import json

def detect_gender(name):
    name = name.split(" ")[0].lower()
    # print(name)
    if name.endswith("a") or name.endswith("i")  or name in ["priya", "meena", "anita", "sona"]:
        return "Female"
    return "Male"

def add_gender_to_users(input_file, output_file):
    try:
        # Step 1: Read users from file
        with open(input_file, 'r') as f:
            users = json.load(f)

        # Step 2: Add gender to each user
        for user in users:
            user["gender"] = detect_gender(user.get("name", ""))

        # Step 3: Write updated users to new file
        with open(output_file, 'w') as f:
            json.dump(users, f, indent=4)

        print(f"Updated user data written to '{output_file}'")

    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
    except json.JSONDecodeError:
        print("Error: Invalid JSON format.")
    except Exception as e:
        print(f"Unexpected error: {e}")

# Usage
add_gender_to_users("old\\120_users_with_age.json", "updated_users.json")
