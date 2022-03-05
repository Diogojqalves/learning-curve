try:
    a = 5 / 0
    b = a + '10'
except ZeroDivisionError as e: 
    print(e)
except TypeError as e:
    print(e)
else:
    print('all good')
finally: #runs with or without error
    print('cleaning up...')



# exception class
class ValueTooHighError(Exception):
    pass

class ValueTooSmallError(Exception):
    def __init__(self, message, value):
        self.message = message
        self.value = value

def test_value(x):
    if x > 100:
        raise ValueTooHighError('value is too high')
    if x < 5:
        raise ValueTooSmallError('Value is too small', x)

try:
    test_value(200)
except ValueTooHighError as e:
    print(e)
except ValueTooSmallError as e:
    print(e.message, e.value)
