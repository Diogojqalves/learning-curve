#functions that return an object that is generated only when its called, data-storage friendly

def mygenerator():
    yield 1
    yield 2
    yield 3

g = mygenerator()

for i in g:
    print(i) #1, 2 and 3


valur = next(g)
print(valur) #prints first yield