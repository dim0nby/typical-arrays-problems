
exports.min = function min (array) {
  if (array && isNaN(array) && (array.length  != 0)) {
    array.sort((a, b) => a - b);
    return (array[0]);
  }
  else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array && isNaN(array) && (array.length  != 0)) {
  array.sort((a, b) => b - a);
 return (array[0]);
  }
  else {
    return 0;
  }
 
}

exports.avg = function avg (array) {
  if (array && isNaN(array) && (array.length  != 0)) {
  function arraySum(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
      sum += arr[i];
      }
  return(sum);
  }
  var totalAverage=(arraySum(array) / array.length);
  return totalAverage;
}
else {
  return 0;
}
}
