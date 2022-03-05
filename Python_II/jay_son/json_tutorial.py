import json

person = {"name": "Jonh", "age": 30, "city": "New York", "hasChildren": False, "titles": ["enginner", "programmer"]}

personJSON = json.dumps(person, indent=4, sort_keys=True)

print(personJSON)

with open('person.json', 'w') as file: #convert to a json file
    json.dump(person, file)

"""
person = json.loads(personJSON) # convert JSON to Dict
print(person)
"""