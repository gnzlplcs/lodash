const _ = {
  clamp(number, lower, upper) {
    let lowerClampedVAlue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedVAlue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    if (end == undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end;
    return isInRange;
  },

};




// Do not write or modify code below this line.
module.exports = _;