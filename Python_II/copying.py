import copy

org = [0, 1, 2, 3, 4]

cpy = org.copy() # if its one level deep
cpy[0] = -10

print(cpy)
print(org)

# deep copy / all-levels
original = [[0, 1, 2], [3, 4, 5]]
copie = copy.deepcopy(org)
copie[0][1] = -10
print(copie)
print(original)