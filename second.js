function divideArray(arr, n) {
  var divideLength = Math.max(arr.length / n);
  var divide = [];
  for (var i = 0; i < n; i++) {
    if (divideLength * (i + 1) <= arr.length)
      divide.push(arr.slice(divideLength * i, divideLength * (i + 1)));
  }
  return divide;
}
console.log(divideArray([2, 2, 3, 3, 2, 2], 3));
console.log(divideArray([2, 2, 3, 3, 2, 2], 2));
