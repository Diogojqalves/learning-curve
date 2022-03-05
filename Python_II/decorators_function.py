# function decorator - extends a function

import functools


def start_end_decorator(func):

    def wrapper():
        print('Start')
        func()
        print('End')
    return wrapper


@start_end_decorator
def print_name():
    print('Alex')

# print_name = start_end_decorator(print_name)
print_name()

def repeat(num_times):
    def decorator_repeat(func):
        @functools.wrap(func)
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                result = func(*args, **kwargs)
                return result
            return wrapper
        return decorator_repeat

@repeat(num_times=3)
def greet(name):
    print(f'Hello {name}')

greet('Alex')