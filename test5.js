function printSubsequences(arr, index, path) {
  if (index == arr.length) {
    if (path.length > 0) console.log(path);
  } else {
    printSubsequences(arr, index + 1, path);

    path.push(arr[index]);

    printSubsequences(arr, index + 1, path);

    path.pop();
  }
  return;
}

let arr = [1, 2, 3, 4, 5];

let path = new Array();
let c = [...path];

printSubsequences(arr, 0, path);
