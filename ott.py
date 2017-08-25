a = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]
b = [   
        [1, 2, 3, 4, 5], 
        [6, 7, 8, 9, 10], 
        [11, 12, 13, 14, 15], 
        [16, 17, 18, 19, 20], 
        [21, 22, 23, 24, 25]
]


def middle_list(input_list):
    middle = float(len(input_list))/2 -.5
    return int(middle)

def move_left(coordinates):
    coordinates[1] = coordinates[1] - 1
    return coordinates

def move_down(coordinates):
    coordinates[0] = coordinates[0] + 1
    return coordinates

def move_right(coordinates):
    coordinates[1] = coordinates[1] + 1
    return coordinates

def move_up(coordinates):
    coordinates[0] = coordinates[0] - 1
    return coordinates

coordinates = [middle_list(a), middle_list(a)]
result = str(a[coordinates[0]][coordinates[1]]) + " "
steps_horiz = 1
steps_vertic = 1
counter = 0

while(steps_horiz < len(a)):
    
    for i in range(steps_horiz):
        if counter % 2 == 0:
            move_left(coordinates)
        else:
            move_right(coordinates)
        result += str(a[coordinates[0]][coordinates[1]]) + " "
    steps_horiz += 1

    for i in range(steps_vertic):
        if counter % 2 == 0:
            move_down(coordinates)
        else:
            move_up(coordinates)
        result += str(a[coordinates[0]][coordinates[1]]) + " "
    steps_vertic += 1
    counter += 1
    
for i in range(len(a)-1):
    move_left(coordinates)
    result += str(a[coordinates[0]][coordinates[1]]) + " "

print(result)