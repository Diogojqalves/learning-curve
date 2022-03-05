mylist = ['banana', 'cherry', 'apple']
print(mylist)

mylist2 = list()
mylist2.append(True)
mylist.insert(1, 'blueberry') #append to specific position

print(mylist2)
print(mylist)


mylist3 = [5, 20, 15, 1]
mylist3.sort()
print(mylist3)

list_copy = mylist.copy() #best way to copy a list without changing the original

a = [1, 2, 3, 4, 5, 6]
b = [i*i for i in a]
print(a)
print(b)