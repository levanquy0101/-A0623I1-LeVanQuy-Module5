function fibonacciSum(count, num1, num2, sum) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 1; }
    if (sum === void 0) { sum = 0; }
    if (count === 0) {
        return sum;
    }
    console.log(num1);
    return fibonacciSum(count - 1, num2, num1 + num2, sum + num1);
}
console.log("Dãy số Fibonacci: ");
console.log("Tổng là: " + fibonacciSum(7));
