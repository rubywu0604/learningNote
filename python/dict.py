a = {"red": 1, "orange": 2, "green": 3, "blue": 5}
b = {"purple": 4, "red": 99}

# get() function:
# get(default_key, default_value)

for color in a:
    b[color] = b.get(color, 0) + a[color]

print(b)