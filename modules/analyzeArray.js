export default function analyzeArray(array) {
  const obj = {};
  const length = array.length;

  obj.min = min(array);
  obj.average = sum(array) / length;
  obj.length = length;
  obj.max = max(array);

  return obj;
}

function sum(array) {
  const sum = array.reduce((acc, item) => {
    return acc + item;
  }, 0);

  return sum;
}

function min(array) {
  const init = array[0];
  const min = array.reduce((acc, item) => {
    return acc < item ? acc : item;
  }, init);

  return min;
}

function max(array) {
  const init = array[0];
  const max = array.reduce((acc, item) => {
    return acc > item ? acc : item;
  }, init);

  return max;
}
