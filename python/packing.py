def standard(num1, num2, num3, num4):
    print(num1)
    print(num2)
    print(num3)
    print(num4)

standard(1, 2, 3, 4)

# packing
def packed(*nums):
    print(nums)

packed(1, 2, 3, 4)

# --------------------------------------

def unpacked():
    return (5, 10, 15, 20)

num1, num2, num3, num4 = unpacked()
print(num1)
print(num2)
print(num3)
print(num4)
# --------------------------------------

name = input("What's your name? \n").split(' ')

print(name) # ['Ruby', 'Wu']

# unpacked
first, last = input("What's your name? \n").split(' ')

print(first) # Ruby
print(last) # Wu