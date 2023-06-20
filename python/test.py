
# input / print
name = input("What is your name? ")
print("Hi " + name)

# defined function
def two_sum(a, b) :
    """summerize two int
    :param a: int
    :param b: int
    takes a and b to sum the result
    """

    return a + b

# print the describtion of the function
print(two_sum.__doc__)

# print charactor
s = set("Hello")
print(s)

# int() / round()
student_scores = [90.51, 40.5, 55.44, 70.05, 30.55, 25.45, 80.45, 95.3, 38.7, 40.3]
one = []
two = []
for score in student_scores:
    one.append(int(score))
    two.append(round(score))
print(f"integ: {one}")
print(f"round: {two}")

# recursion
def recursion(n):
    print(n)
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return n * recursion(n - 1)
        

print(recursion(4))