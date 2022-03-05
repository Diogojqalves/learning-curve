var = 'Tom'
my_string = 'the variable is {}'.format(var) # %s
print(my_string)

var2 = 2
my_string2 = f'the variable is {var2*2}'
print(my_string2)

var3 = 3.12345
my_string3 = 'the variable is %.2f' % var3
print(my_string3)