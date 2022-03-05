# anonymous function / lamba arguments: expression
from functools import reduce

add10 = lambda x: x + 10
print(add10(5)) # result = 15

mult = lambda x,y: x * y
print(mult(2, 7)) # result = 2 * 7 = 14

points2D = [(1,2), (15, 1), (5, -1), (10, 4)]
points2D_sorted = sorted(points2D, key= lambda x: x[1]) # function that sorts the list

print(points2D)
print(points2D_sorted)

# map(func, seq)

a = [1, 2, 3, 4, 5]
b = map(lambda x: x*2, a) # c = [x*2 for x in a]
print(list(b))

#filter
c = [1, 2, 3, 4, 5]
d = filter(lambda x: x%2==0, a) # filter even numbers
print(list(d))

#reduce
e = [1, 2, 3, 4, 5]
f = reduce(lambda x, y: x*y, e)
print(f)

