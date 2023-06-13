fruit = ['apple', 'banana', 'grape', 'lemon']
color = ['red', 'yellow', 'pink', 'orange', 'blue', 'purple']
# while loop
while fruit:
    print(fruit.pop(0))

# for...in
for item in color:
    if item.startswith('p'):
        print(f"{item.title()} starts with 'P'.")

# for...in range()
for number in range (1, 11, 2):
    print(number)

# for...in enumerate()
for index, item in enumerate(color):
    print(f"{item.title()}'s position is: {index + 1}")

short = []
long = []

for index, item in enumerate(color):
    if len(item) <= 5:
        short.append(f"{index + 1}:{item.title()}")
    else:
        long.append(f"{index + 1}:{item.title()}")

print(short, long)

# continue
result = []
for number in range (1, 11):
    if number % 2 != 0:
        continue
    else:
        result.append(number)
print(f"Even numbers from 1 to 10: {result}")

# break
for number in range (1, 11):
    if number == 6:
        break
    else:
        print(number)