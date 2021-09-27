const _ = {
  clamp(number, lower, upper) {
    let lowerClampedVAlue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedVAlue, upper);
    return clampedValue;
  },

};




// Do not write or modify code below this line.
module.exports = _;