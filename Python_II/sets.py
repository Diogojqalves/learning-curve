#unordered, mutable, no duplicates

myset = {1, 2, 3, 1, 2} #duplicate values aren´t accepted
print(myset)

myset = set() #empty set
myset.add(5) 

# union of sets
odds = {1, 3, 5}
evens = {2, 4, 6}
prime = {2, 3, 5, 7}

u = odds.union(evens)
print(u)

#calculate the values that match between sets
i = odds.intersection(prime)
print(i)

#difference
d = odds.difference(prime)
print(d)