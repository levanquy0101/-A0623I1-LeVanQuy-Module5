function fibonacciSum(count: number, num1: number = 0, num2: number = 1, sum: number = 0): number {
    if (count === 0) {
        return sum;
    }
    console.log(num1)
    return fibonacciSum(count - 1, num2, num1 + num2, sum + num1);
}
console.log("Dãy số Fibonacci: ")
console.log("Tổng là: "+fibonacciSum(7)); 
