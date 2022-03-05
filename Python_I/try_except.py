try:
    number = int(input('Introduz um número:'))
    print(number)
except ValueError:
    print('Invalid Input')