let i = 0;
function reverse(a) {
  if (!a.length) {
    return a;
  }
  return reverse(a.slice(1)).concat(a[0]);
}
function spaces(x) {
  var res = "";
  while (x--) res += " ";
  return res;
}
let arrays = [1, 2, 3, 4, 5, 6];
let res = reverse(arrays, 6);
let finalArray = arrays.concat(res);
var recursive_function = function (array) {
  if (array.length > 0) {
    if (array.length > 6) {
      var string = spaces(12 - array.length) + array[0];
     console.log(string)
    } else {
      var string = spaces(6 + array.length) + array[0];
      console.log(string);
    }

    recursive_function(array.slice(1));
  }
};

recursive_function(finalArray);
