def foo(a, b, *args, **kwargs): # *args allows multiple args
    print(a, b)
    for arg in args:
        print(arg)
    for key in kwargs:
        print(key, kwargs[key])

foo(1, 2, 3, 4, 5, six=6, seven=7)


def foo_dict(a, b, c):
    print(a, b, c)

my_dict = {'a': 1, 'b': 2, 'c':3}
foo_dict(**my_dict)

# change global var inside a function

def glo():
    global number
    x = number
    number = 3
    print('number inside function', x)

number = 0
glo()
print(number)