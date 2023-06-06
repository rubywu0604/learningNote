# [start:stop:step]
color_list = ['1red', '2yellow', '3pink', '4green', '5orange', '6blue']

length = len(color_list)
mid_color = color_list[2:4]
odd_color = color_list[::2]
even_color = color_list[1::2]

print(length, mid_color, odd_color, even_color)

# sum
number_list = [4, 10, 2, 8, 6]

total = sum(number_list)
average = sum(number_list) / len(number_list)

print(total, average)

# list(10) >>> TypeError: 'int' object is not iterable
# list('Ruby') >>> ['R', 'u', 'b', 'y']

# combine two lists
color_and_number = color_list + number_list
print(color_and_number)

string_list = ['Hello', 'World']
print(string_list * 2)

# looping through the list and print out each elements

for color in color_list:
    print(color)

for number in number_list:
    print(number)

for word in string_list:
    print(word)