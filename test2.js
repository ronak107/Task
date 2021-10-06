// Write a JavaScript program to check whether a given matrix is an identity matrix.
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false

//////////

function identity_Matrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if ((matrix[i][j] !== 1 && i === j) || (matrix[i][j] && i !== j)) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  identity_Matrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  identity_Matrix([
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
