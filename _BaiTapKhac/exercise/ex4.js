let arr = [1, -2, 3, 4, 5, 6, 7, 8];
//4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.

function check(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return false;
    }
  }
  return true;
}
console.log(check(arr))