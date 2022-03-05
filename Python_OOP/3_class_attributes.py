class Item:
    pay_rate = 0.8 
   
    # create a list with all the items
    all = []

    def __init__(self, name:str, price:float, quantity=0): 
        assert price >= 0 , f'Price {price} is not greater then 0' 
        assert quantity >= 0, f'Quantity {quantity} is not greater then 0' 
        self.name = name
        self.price = price
        self.quantity = quantity

        # Actions to execute
        Item.all.append(self) # add all items to list


    def calculate_total_price(self):
        return self.price * self.quantity


    def apply_discount(self):
        self.price = self.price * self.pay_rate

    # print all items
    def __repr__(self):
        return f"Item('{self.name}', '{self.price}', '{self.quantity}' )"


item1 = Item("Phone", 100, 1)
item2 = Item("Laptop", 1000, 3)
item3 = Item("Cable", 10, 5)
item4 = Item("Mouse", 50, 5)
item5 = Item("Keyboard", 75, 5)

print(Item.all)
# print all item names
for instance in Item.all:
    print(instance.name)
