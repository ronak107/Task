//  arr = [1, 2, 3, 4, 5] and queries = [[1, 2, 4], [2, 4, 3], [1, 1, 1]]
// arr = [1, 2, 2, 1, 2, 1, 2] and queries = [[1, 1, 2], [1, 2, 1]]
// arr = [1, 1, 1, 1] and queries = [[1, 1, 1]],

const givenArray = [1, 1, 1, 1];
const tripleArray = [[1, 1, 1]];
let resultArray = [0];
for (let i = 0; i < tripleArray.length; i++) {
  let a1 = tripleArray[i][0];
  let a2 = tripleArray[i][1];
  let a3 = tripleArray[i][2];
  let responseSum = tripleMethod(a1, a2, a3);
  resultArray[i] = responseSum;
}
function tripleMethod(c1, c2, c3) {
  let sum = 0;
  for (let i = 0; i < givenArray.length; i++) {
    for (let j = i + 1; j < givenArray.length; j++) {
      for (let k = j + 1; k < givenArray.length; k++) {
        let b1 = givenArray[i];
        let b2 = givenArray[j];
        let b3 = givenArray[k];

        //match the a(series) with b(series)

        if (c1 == b1) {
          if (c2 == b2) {
            if (c3 == b3) {
              sum = sum + 1;
            }
          }
        }
      }
    }
  }
  return sum;
}
console.log(resultArray);
