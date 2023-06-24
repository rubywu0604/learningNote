SERVICE_CHARGE = 2
TICKET_PRICE = 10    

tickets_remaining = 100  

def calculate_price(number_of_tickets):
            return (number_of_tickets * TICKET_PRICE) + SERVICE_CHARGE

while tickets_remaining >= 1:
    print("There are {} tickets remaining.".format(tickets_remaining))
    name = input("What is your name?  ")
    tickets_required = input("How many tickets would you like, {}?:  ".format(name))
    try:
        tickets_required = int(tickets_required)
        if tickets_required > tickets_remaining:
            raise ValueError("There are only {} tickets remaining".format(tickets_remaining))
    except ValueError as err:
        print("Oh no, we ran into an issue. {}. Please try again".format(err))

    else:
        amount_due = calculate_price(tickets_required)
        print("The total due is {}".format(amount_due))
        confirmation = input("Would you like to proceed with your purchase? Y/N  ")
        if confirmation.lower() == "y":
            print("SOLD!")
            tickets_remaining -= tickets_required
        else:
            print("Thank you for visiting our website {}!".format(name))
print("Sorry we are all sold out! :(")