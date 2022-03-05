from phone import Phone
from keyboard import Keyboard

item1 = Keyboard("jscKeyboard", 1000, 3)
item2 = Phone('Phone', 500, 1)

item1.apply_increment(0.2)
item1.apply_discount()

print(item1.price)