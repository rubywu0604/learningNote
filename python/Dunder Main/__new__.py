class Legs:
    def __new__(cls, legs, **kwargs):
        if legs == 2:
            return Bird(legs, **kwargs)
        elif legs == 4:
            return Animal(legs, name="Bingo", **kwargs)
        elif legs == 6:
            return Insect(legs, **kwargs)
        else:
            return super().__new__(cls)

    def __init__(self, legs, **kwargs):
        self.legs = legs

        for key, value in kwargs.items():
            setattr(self, key, value)

        print(f"{self.name.upper()} init with {self.legs} legs.")

class Bird:
    def __init__(self, legs, **kwargs):
        self.legs = legs

        for key, value in kwargs.items():
            setattr(self, key, value)

        print(f"It's a bird named {self.name} init with {self.legs} legs.")

class Animal:
    def __init__(self, legs, **kwargs):
        self.legs = legs

        for key, value in kwargs.items():
            setattr(self, key, value)

        print(f"It's an animal named {self.name} init with {self.legs} legs.")

class Insect:
    def __init__(self, legs, **kwargs):
        self.legs = legs

        for key, value in kwargs.items():
            setattr(self, key, value)

        print(f"It's an insect named {self.name} init with {self.legs} legs.")

duck = Legs(2, name="duck")
dog = Legs(4) # use default name
ant = Legs(6, name="ant")
fish = Legs(0, name="fish") # create new class by __new__