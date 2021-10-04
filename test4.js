// top left to bottom right
var array = ["1394", "9577", "3697", "1222"];

var ylength = array.length;
var xlength = array[0].length;
var maxlength = Math.max(xlength, ylength);
var temp;
for (var k = 0; k <= 2 * (maxlength - 1); ++k) {
  temp = [];
  for (var y = ylength - 1; y >= 0; --y) {
    var x = k - y;
    if (x >= 0 && x < xlength) {
      temp.push(array[y][x]);
    }
  }
  if (temp.length > 0) {
    console.log(temp.join(" "));
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("///////////////////////////////////");
function* Diagonal(xLength, yLength) {
  for (let y = 0; y < yLength; y++) {
    yield {
      x: 0,
      y: y,
    };
  }

  for (let x = 1; x < xLength; x++) {
    yield {
      x: x,
      y: yLength - 1,
    };
  }
}

function sliceMatrix(matrix, diagonal) {
  const slice = [];

  for (
    let y = diagonal.y, x = diagonal.x;
    y >= 0 && x < matrix[y].length;
    y--, x++
  ) {
    slice.push(matrix[y][x]);
  }

  return slice;
}

function Matrix(slice, matrix, diagonal) {
  for (let i = 0; i < slice.length; i++) {
    matrix[diagonal.y - i][diagonal.x + i] = slice[i];
  }
}

const matrix = [
  [1, 3, 9, 4],
  [9, 5, 7, 7],
  [3, 6, 9, 7],
  [1, 2, 2, 2],
];

const Ylength = matrix.length;
const Xlength = matrix[0].length;

const sortedMatrix = [];
for (let i = 0; i < Ylength; i++) {
  sortedMatrix[i] = new Array(Xlength);
}

for (const diagonal of Diagonal(Xlength, Ylength)) {
  var slice = sliceMatrix(matrix, diagonal);
  slice.sort();

  Matrix(slice, sortedMatrix, diagonal);
}

console.log(sortedMatrix);
