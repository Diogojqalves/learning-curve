import secrets

a = secrets.randbelow(10) #creates a random int from 0-10
b = secrets.randbits(4) # bits which means max number would be 1111 = 15
print(a)
print(b)

mylist = list("ABCDEFGH")
c = secrets.choice(mylist)
print(c)