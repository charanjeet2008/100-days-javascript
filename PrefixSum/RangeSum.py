class RangeSum:
    matrix = [][]
    prefixSum = [][]
    def constructor(numbers):
        self.matrix = numbers
    
    calculatePrefixSum:
        

        # first row and column as zeros to help with subtraction of previous index without checking for safety range
        self.prefixSum[0][0..j-1] = 0
        self.prefixSum[0..i][0] = 0

        for row:rowValue in matrix:
            for col:colValue in rowValue:
                self.prefixSum[row][col] = prefixSum[row-1][col] + prefixSum[row][col-1]

    rangeSum(row1, col1, row2, col2):
        return self.prefixSum[row2][col2] - self.prefixSum[row2][col1] - self.prefixSum[row1][col2] + self.prefixSum[row1][col1] 


