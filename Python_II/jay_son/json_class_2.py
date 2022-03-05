import json

class User:

    def __init__(self, name, age):
        self.name = name
        self.age = age

user = User('Max', 27)


def encode_user(o):
    if isinstance(o, User):
        return {'name': o.name, 'age': o.age, o.__class__.__name__: True} # transform the class object to dictionary so its possible to convert to JSON
    else:
        raise TypeError('Object of type User is not Json serializable')



userJson = json.dumps(user, default=encode_user)
print(userJson)

#decode back, from json to normal python object

user = json.loads(userJson)
print(user)
print(type(user))