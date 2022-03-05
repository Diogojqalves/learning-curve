number_grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]

print(number_grid[0][0]) # row 0 and column 0 = 1

#nested loop
for row in number_grid:
    print(row)
    for column in row:
        print(column)
