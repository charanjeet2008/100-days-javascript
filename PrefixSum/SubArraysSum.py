class SubArraySum {
    numbers[]
    def constructor(numbers):
        self.numbers = numbers
    calculateSubArraysSum(k):
        
        hashPrefixes = []
        KSumTotal = 0
        previousSum = 0

        for i: value in self.numbers:
            currentSum = previousSum + value
            differnceK = currentSum - differnceK
            if hashPrefixes contains differnceK: 
                KSumTotal += hashPrefixes[differnceK]

            hashPrefixes[currentSum] += 1 
            previousSum = currentSum
            
        return KSumTotal

}