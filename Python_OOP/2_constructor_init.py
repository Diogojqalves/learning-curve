class Item:
    pay_rate = 0.8 # global attribute @class level, gives 20% discount to all products
    
    def __init__(self, name:str, price:float, quantity=0): # =0 to give default value, its not mandatory to assign a value / :str to define data type
        #run validations to the received argument
        assert price >= 0 , f'Price {price} is not greater then 0' # price can´t be negative / Assertion error print
        assert quantity >= 0, f'Quantity {quantity} is not greater then 0' # quantity can´t be negative
        
        #assign to self object / instance attributes:
        self.name = name
        self.price = price
        self.quantity = quantity


    def calculate_total_price(self):
        return self.price * self.quantity

    # apply global attr
    def apply_discount(self):
        self.price = self.price * self.pay_rate


item1 = Item('Phone', 100, 5) 
print(item1.calculate_total_price())
item1.pay_rate = 0.7 # apply different discount
item1.apply_discount()
print(item1.price)

item2 = Item('Laptop', 1000, 3) 
item2.has_numpad = False #add new attribute outside def __init__
item2.apply_discount()
print(item2.price)

"""
print(item2.calculate_total_price())
print(Item.__dict__) #print all object attrs
print(item1.__dict__)
"""