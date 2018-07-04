/*var name = "Joe"
var height = "74"


// Don't worry about this
module.exports = { name, height
}
*/
var combos = function (arr) {
  var combinations = [];
  for (var i = 0; i<arr.length-1;i++){
    for (var j=i+1;j<arr.length;j++){
      combinations.push([arr[i],arr[j]]);
    }
  }
  console.log(combinations)
}
arr= [1,2,3,4]
combos(arr)