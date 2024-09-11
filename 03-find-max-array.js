function findMax(array) {
  let maximum = array[0];
  for (let arr of array) {
    if (arr > maximum) {
      maximum = arr;
    }
  }
  return maximum;
}
console.log(findMax([23, 56, 45, 99, 32, 19, 49]));
