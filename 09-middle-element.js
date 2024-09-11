function middleElement(array) {
  let middle = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return [array[middle - 1], array[middle]];
  } else {
    return [array[middle]];
  }
}
console.log(middleElement([23, 45, 65, 56, 17]));
console.log(middleElement([23, 45, 65, 56, 17, 45]));
console.log(middleElement([23, 45, 65, 56, 17, 45, 45, 67, 84, 12]));
