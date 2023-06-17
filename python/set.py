a = {'a', 'b', 'c', 'd'}
b = {'c', 'd', 'e', 'f'}
c = {'e', 'f', 'g'}

# intersection (a & b)
inter_def = a.intersection(b)
inter_method = a & b

print(inter_def, inter_method)

# union (a | b)
union_def = a.union(b)
union_method = a | b

print(union_def, union_method)

# difference (a - b)
diff_def = a.difference(b)
diff_method_one = a - b
diff_method_two = b - a

print(diff_method_one, diff_method_two)

# symmetric_difference (a ^ b)
sym_diff = a.symmetric_difference(b)
sym_diff_method = a ^ b

print(sym_diff, sym_diff_method)

print(a ^ b ^ c) # 3 sets
