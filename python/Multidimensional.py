travel_expenses = [
    [5.00, 2.75, 22.00, 0.00, 0.00],
    [24.75, 5.50, 15.00, 22.00, 8.00],
    [2.75, 5.50, 0.00, 29.00, 5.00],
]

# To summarize total expenses for each week

count_the_week = 1
for week in travel_expenses:
    print('* Week #{}: ${}'.format(count_the_week, sum(week)))
    count_the_week += 1