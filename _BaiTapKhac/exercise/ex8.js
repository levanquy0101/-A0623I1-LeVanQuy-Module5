// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
let number = [1, 2, 3, 4, 5,3]

function getNumbers(...args) {
    let sum = args.reduce((a,b) => a + b )
    return sum;
}

console.log(getNumbers(...number))