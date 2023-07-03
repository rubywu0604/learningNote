a = {"red": 1, "orange": 2, "green": 3, "blue": 5}
b = {"purple": 4, "red": 99}

# get() function:
# get(default_key, default_value)

for color in a:
    b[color] = b.get(color, 0) + a[color]

print(b)

# packing dict ----------------------
def packing_me(**kwargs):
    for key, value in kwargs.items():
        print(f'{key}. {value}')

packing_me(name = 'ruby', age = 31, gender = 'female')

# unpacking dict ----------------------
me = {
    'name': 'ruby',
    'age': 31,
    'gender': 'female'
}

def unpacking_me(name, age, gender):
    print(name)
    print(age)
    print(gender)

unpacking_me(**me)