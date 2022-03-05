mydict = {'name': 'Max', 'age': 28, 'city': 'New York'}

print(mydict)

# or

mydict2 = dict(name='Mary', age=27, city='Boston')
print(mydict2)

mydict['email'] = 'max@xyz.com' # append
print(mydict)

if 'name' in mydict:
    print(mydict['name'])


for key in mydict:
    print(key)

for value in mydict.values():
    print(value)