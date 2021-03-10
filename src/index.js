
exports.min = function min(array) {
  if (array != undefined) {
    if (array.length != 0) {
      let minElement = array[0];
      for (let i = 0; i < array.length; i++) {
        if (minElement > array[i]) {
          minElement = array[i];
        }
      }
      return minElement;
    }
  }
  return 0;
}

exports.max = function max(array) {
  if (array != undefined) {
    if (array.length != 0) {
      let maxElement = array[0];
      for (let i = 0; i < array.length; i++) {
        if (maxElement < array[i]) {
          maxElement = array[i];
        }
      }
      return maxElement;
    }
  } return 0;
}

exports.avg = function avg(array) {
  if (array != undefined) {
    if (array.length != 0) {
      let arithmeticMean = 0;
      for (let i = 0; i < array.length; i++) {
        arithmeticMean += array[i];
      }
      return arithmeticMean / array.length;
    }
  } return 0;
}
