# = list but it can´t be changed after its creation

mytuple = ('Max',) # needs a , at the end to be a tuple with 1 item
mytuple2 = ('Max', 28, 'Boston')
print(mytuple)

mylist = list(tuple) #convert tuple to list
mytuple2 = tuple(mylist)

