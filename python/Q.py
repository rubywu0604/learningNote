import queue
q1 = queue.Queue()
#Addingitems to the queue
q1.put(11)
q1.put(5)
q1.put(4)
q1.put(21)
q1.put(3)
q1.put(10)

# q1 = (11, 5, 4, 21, 3, 10)

# ============= Sorting =============

#using bubble sort on the queue
n =  q1.qsize()
print("n", n)
for i in range(n):
    x = q1.get() # the element is removed
    for j in range(n-1):
        y = q1.get() # the element is removed
        if x > y :  
            q1.put(y)   #the smaller one is put at the start of the queue
        else:
            q1.put(x)  # the smaller one is put at the start of the queue
            x = y     # the greater one is replaced with x and compared again with nextelement
    q1.put(x)

while (q1.empty() == False):
    print(q1.queue[0], end=" ")
    q1.get() # remove element
print()
# ============= Reversing =============

import queue
Q1 = queue.Queue()

Q1.put(11)
Q1.put(5)
Q1.put(4)
Q1.put(21)
Q1.put(3)
Q1.put(10)

# Q1 = (11, 5, 4, 21, 3, 10)

def reverseQueue(Q1src, Q2dest):
    buffer = Q1src.get()
    if (Q1src.empty() == False):
        reverseQueue(Q1src, Q2dest)    #using recursion
    Q2dest.put(buffer)
    return Q2dest

Q2dest = queue.Queue()
qReversed = reverseQueue(Q1,Q2dest)

while (qReversed.empty() == False): 
    print(qReversed.queue[0], end = " ")  
    qReversed.get()
print()