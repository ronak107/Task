var s = "xzxzx";
var count = 0;
for (var i = 0; i < s.length - 2; i++) {
  for (var j = i + 1; j < s.length - 1; j++) {
    var a = s.slice(0, i + 1);
    var b = s.slice(i + 1, j + 1);
    var c = s.slice(j + 1, s.length);
    if (a + b != b + c && b + c != c + a && a + b != c + a) {
      count++;
    }
  }
}

console.log(count);
