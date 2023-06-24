# Expecting Exceptions / Raising Exceptions
def age(year):
    result = 2023 - int(year)
    if result > 100:
        check = input('Are you sure you\'re over 100 years old? (Y/N)')
        if check == 'Y':
            return result
        else:
            raise ValueError(f'{year} incorrect.')
    return result
try:
    year = input('Which year did you born?')
    age = age(year)
except ValueError as err:
    print('The input year may be wrong...', f"{err}")
else:
    print('You\'re {} years old.'.format(age))