class Car:
    # class attribute
    wheels = 4
    doors = 2
    engine = True

    def __init__(self, brand, year, color="black (default)", **kwargs):
        # instance attribute
        self.brand = brand
        self.year = year
        self.color = color
        self.is_moving = False
        
        for key, value in kwargs.items():
            setattr(self, key, value)
    
    def __str__(self):
        return f"The {self.color} {self.brand} was made in {self.year}."

    def go(self, speed):
        if self.use_gas():
            print(f"The {self.brand} is going {speed} with {self.gas} gas leftover.")
            if not self.is_moving:
                self.is_moving = True
                return "The car starts moving."
            else:
                return "The car keeps moving."
        else:
            return ("Run out of gas.")
            self.stop()

    def stop(self):
        if self.is_moving:
            self.is_moving = False
            return "The car stop."
        else:
            return "The car has already stopped."

    def use_gas(self):
        self.gas -= 50
        return False if self.gas <= 0 else True

# class attribute Ex: Car
print("class attribute: ", Car.wheels)

# Instance attribute - the object that was instantiated (created) Ex: Car()
c1 = Car("VolksWagan", 2009) 
c2 = Car("Tesla", 2023, "blue")
print(c1.brand, c2.brand) # VolksWagan Tesla
print(id(c1.brand), id(c2.brand))
print(c1) # The white VolksWagan was made in 2009.
print(c2) # The blue Tesla was made in 2023.

# change the object properties
print("=========Change object properties=========")
c1.brand = "BMW"
print("Change object properties: ", c1.brand, c2.brand)
print(id(c1.brand), id(c2.brand)) # c1.brand id is changed due to its value changed

# method and test is_moving or not
print("===============TEST METHOD===============")
c3 = Car("Porsche", 2000, "red", gas=250)  # the param **kwargs in __init__(), can set attribute of gas
print("gas before go: ", getattr(c3, "gas"))
print("GO method: ", c3.go("fast"))
print("GO method: ", c3.go("smooth"))
print("GO method: ", c3.go("slow"))
print("gas remain after go: ", getattr(c3, "gas"))
print("STOP method: ", c3.stop())
print("STOP method: ", c3.stop())

class Factory:
    def __init__(self):
        self.brand_list = ["Ford", "Audi", "Mazda"]
    
    def __iter__(self):
        yield from self.brand_list

    def add_brand(self, car):
        self.brand_list.append(car)

print("==============iterate brand==============")
all_brand = Factory()
for brand in all_brand:
    print(brand)

print("===============add brand===============")
all_brand.add_brand(c1.brand)
all_brand.add_brand(c2.brand)
for new_brand in all_brand:
    print(new_brand)

# setattr / getattr
setattr(Car, "googleCarPlay", True)
print(Car.__dict__, Car.googleCarPlay)