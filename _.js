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

  words(string) {
    return string.split(' ');
  },

  pad(string, length) {
    const stringLength = string.length;
    let result;
    if (stringLength >= length) {
      return string;
    } else {
      let spaces = length - stringLength;
      let startSpace, endSpace = 0;
      if (spaces == 1) {
        result = ` ${string}`;
      } else {
        if (spaces % 2 == 0) {
          startSpace = spaces / 2;
          endSpace = spaces / 2;
        }
        else {
          startSpace = Math.floor(spaces / 2);
          endSpace = Math.ceil(spaces / 2);
        }
        result = `${' '.repeat(startSpace)}${string}${' '.repeat(endSpace)}`;
      }
      return result;
    }
  },

  has(obj, key) {
    return obj[key] !== undefined ? true : false;
  },

  invert(obj){
    let newObj = {};
    for (const key in obj) {
      let originalValue = obj[key];
      newObj[originalValue] = key;
    }
    return newObj;
  },

  findKey(object, predicate) {
    for (const key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },

  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  },

  dropWhile(array, predicate) {
    let dropNumber = array.findIndex(function(element, index){
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, n) {
    if (n === undefined) n = 1;
    let chunkedArr = [];
    for (let index = 0; index < array.length; index += n) {
      let innerArr = array.slice(index, index + n);
      chunkedArr.push(innerArr)
    }
    return chunkedArr;
  }

}


// Do not write or modify code below this line.
module.exports = _;