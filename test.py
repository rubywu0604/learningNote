# data = [4, 2, 5, 1]


# # def selection_sort(data):
# #     for select_index in range(len(data)):
# #         min_index = select_index
# #         for 
# #     return data


# def insertion_sort(data):
#     for i in range(1, len(data)):
#         current = data[i]
#         j = i - 1
#         while current < data[i - 1] and j >= 0:
#             data[j + 1] = data[i]
#             print(data)
#         continue

#     print(data)

# insertion_sort(data)

# import time

# def fn():
#     print(f'After timeout: {time.strftime("%Y-%m-%d %H:%M:%S")}')

# print(f'Before timeout: {time.strftime("%Y-%m-%d %H:%M:%S")}')
# time.sleep(2)
# fn()
# print('I happen AFTER timeout')


# arr = [3, 5, 6, 7, 8]

# def binary_search(arr, target):
#     start_index = 0
#     end_index = len(arr) - 1

#     while start_index <= end_index:
#         mid_index =(start_index + end_index) // 2
        
#         if target == arr[mid_index]:
#             return mid_index
#         elif target > arr[mid_index]:
#             start_index = mid_index + 1
#         elif target < arr[mid_index]:
#             end_index = mid_index - 1
#     return -1
        
# print(binary_search(arr, 5))

nums = [3, 5, 7, 1, 2, 7, 4, 8]

def mergeTowLists(left, right):
    left_index, right_index = 0, 0


    return sorted_nums

def dividlist(nums):
    
    cut = len(nums) // 2
    leftlist = nums[:cut]
    rightlist = nums[cut:]

    if leftlist 

    dividlist(leftlist)
    dividlist(rightlist)


    print(leftlist, rightlist)

    return mergeTowLists(leftlist, rightlist)

dividlist(nums)